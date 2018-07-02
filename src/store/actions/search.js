import * as actionTypes from './actionTypes';

export const searchClientsReset = () => ({
  type: actionTypes.SEARCH_CLIENTS_RESET,
});

export const searchClientsSuccess = (value, searchResults) => ({
  type: actionTypes.SEARCH_CLIENTS_SUCCESS,
  value,
  searchResults,
});

// return an array of keys that match on a certain value
function getKeys(obj, val) {
  let objects = [];
  for (const i in obj) {
    if (!obj.hasOwnProperty(i)) continue;
    if (typeof obj[i] === 'object') {
      objects = objects.concat(getKeys(obj[i], val));
    } else if (obj[i].toLowerCase().indexOf(val.toLowerCase()) >= 0) {
      objects.push(i);
    }
  }
  return objects;
}

export const searchClients = (searchValue, clients) => dispatch => {
  if (searchValue.length < 1) {
    dispatch(searchClientsReset());
    return;
  }

  const searchResults = clients.filter(
    client => getKeys(client, searchValue).length > 0,
  );

  dispatch(searchClientsSuccess(searchValue, searchResults));
};
