import { DATA_URL } from './const.js';

const createFetch = (onSuccess, onError) => () => fetch(
  DATA_URL,
)
  .then((response) => {
    if (response.ok) {
      return response.json();
    }

    throw new Error(`${response.status} ${response.statusText}`);
  })
  .then((json) => {
    onSuccess(json);
  })
  .catch((err) => {
    onError(err);
  });

export { createFetch };
