import getConnection from './getConnection';
const client = getConnection();

const listIndices = async () : Promise<Array<Object>> => {
  try {
    await client.ping({
      requestTimeout: 30000,
    });
  } catch (error) {
    console.error('Could not connect to elasticsearch.');
    return null;
  }

  const indexList : Array<Object> = await client.cat.indices({
    format: 'json',
  });

  return indexList;
};

export default listIndices;

if (!module.parent) {
  (async () => {
    const indexList : Array<Object> = await listIndices();

    console.dir(indexList);
  })();
}
