import { DATA_URL } from './const.js';
import { enableFilterForm } from './filter-form.js';

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
  .then(() => {
    enableFilterForm();
  })
  .catch((err) => {
    onError(err);
  });

export { createFetch };
