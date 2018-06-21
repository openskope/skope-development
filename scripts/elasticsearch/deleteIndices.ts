import getConnection from './getConnection';
const client = getConnection();

const deleteIndices = async (
  indices : Array<string> = null
) : Promise<boolean> => {
  try {
    await client.ping({
      requestTimeout: 30000,
    });
  } catch (error) {
    console.error('Could not connect to elasticsearch.');
    return null;
  }

  const allIndices = !(indices && indices.length > 0);

  try {
    await client.indices.delete({
      index: allIndices ? '*' : indices,
    });
  } catch (error) {
    console.error(error.message);
    return false;
  }

  await client.indices.refresh({
    index: allIndices ? '' : indices,
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
