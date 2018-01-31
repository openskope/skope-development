import * as path from 'path';
import * as fs from 'fs-extra';
import * as glob from 'glob';
import * as LocalTypes from './types';
import getConnection from './getConnection';
const client = getConnection();

const sourceDataDirectoryPath : string = path.resolve(__dirname, '../elasticsearch-source-data');

const loadDocumentsForIndex = async (
  indexName : string,
) : Promise<boolean> => {
  const documentDirectory : string = path.resolve(sourceDataDirectoryPath, indexName);

  if (!fs.pathExistsSync(documentDirectory)) {
    return true;
  }

  fs.ensureDirSync(documentDirectory);

  const filenameList : Array<string> = glob.sync('*.@(json|js)', {
    cwd: documentDirectory,
  });

  const results = await Promise.all(
    filenameList.map(async (filename) : Promise<boolean> => {
      const extname : string = path.extname(filename);
      const basename : string = path.basename(filename, extname);
      const filePath : string = path.resolve(documentDirectory, filename);

      const document : Object = require(filePath);

      try {
        await client.create({
          waitForActiveShards: '1',
          refresh: false,
          index: indexName,
          type: 'dataset',
          id: basename,
          body: document,
        });
      } catch (error) {
        console.error(`Could not create document ‘${basename}’ in ‘${indexName}’.\n>>${error.message}`);
        return false;
      }

      console.log(`Document ‘${basename}’ in ‘${indexName}’ created.`);

      return true;
    })
  );

  return results.every(Boolean);
};

const loadIndices = async () : Promise<boolean> => {
  try {
    await client.ping({
      requestTimeout: 30000,
    });
  } catch (error) {
    console.error('Could not connect to elasticsearch.');
    return false;
  }

  process.stdout.write(`Scanning ${sourceDataDirectoryPath}\n`);

  const filenameList : Array<string> = glob.sync('*.index.@(json|js)', {
    cwd: sourceDataDirectoryPath,
  });

  const results = await Promise.all(
    filenameList.map(async (filename) : Promise<boolean> => {
      const extname : string = path.extname(filename);
      const basename : string = path.basename(filename, `.index${extname}`);
      const filePath : string = path.resolve(sourceDataDirectoryPath, filename);

      const indexName : string = basename;
      const indexDocument : LocalTypes.IndexDocument = require(filePath);

      const indexMappings : Object = indexDocument.mappings;
      const indexTypes : Array<string> = Object.keys(indexMappings);
    
      // Only consider the first type.
      const majorIndexType : string = indexTypes[0];

      try {
        await client.indices.create({
          waitForActiveShards: '1',
          updateAllTypes: true,
          index: indexName,
          body: indexDocument,
        });
      } catch (error) {
        console.error(`Could not create index ‘${indexName}’.\n>>${error.message}`);
        return false;
      }

      console.log(`Index ‘${indexName}’ created.`);

      // Add documents.
      const documentsLoaded : boolean = await loadDocumentsForIndex(indexName);

      await client.indices.refresh({
        index: indexName,
      });

      return documentsLoaded;
    })
  );

  return results.every(Boolean);
};

export default loadIndices;

if (!module.parent) {
  (async () => {
    const success : boolean = await loadIndices();

    console.log(`Success: ${success}.`);
  })();
}
