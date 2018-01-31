import * as elasticsearch from 'elasticsearch';

export default (options = {}) => {
  const client = new elasticsearch.Client({
    host: 'localhost:3000/app/elastic',
    ...options,
  });

  return client;
};
