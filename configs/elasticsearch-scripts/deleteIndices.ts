import getConnection from './getConnection';
const client = getConnection();

const deleteIndices = async () : Promise<boolean> => {
  try {
    await client.ping({
      requestTimeout: 30000,
    });
  } catch (error) {
    console.error('Could not connect to elasticsearch.');
    return null;
  }

  try {
    await client.indices.delete({
      index: '*',
    });
  } catch (error) {
    console.error(error.message);
    return false;
  }

  await client.indices.refresh({
    index: '',
  });

  return true;
};

export default deleteIndices;

if (!module.parent) {
  (async () => {
    const success : boolean = await deleteIndices();

    console.log(`Success: ${success}.`);
  })();
}
