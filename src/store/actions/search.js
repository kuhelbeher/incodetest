// @flow

import * as actionTypes from './actionTypes';
import type { Client } from '../../flowtypes/types';

export const searchClientsReset = () => ({
  type: actionTypes.SEARCH_CLIENTS_RESET,
});

export const searchClientsSuccess = (
  value: string,
  searchResults: Array<Client>,
) => ({
  type: actionTypes.SEARCH_CLIENTS_SUCCESS,
  value,
  searchResults,
});

// return an array of keys that match on a certain value
function getKeys(obj: Object, val: string) {
  let objects = [];
  Object.keys(obj).forEach(i => {
    if (typeof obj[i] === 'object') {
      objects = objects.concat(getKeys(obj[i], val));
    } else if (obj[i].toLowerCase().indexOf(val.toLowerCase()) >= 0) {
      objects.push(i);
    }
  });
  return objects;
}

export const searchClients = (searchValue: string, clients: Array<Client>) => (
  dispatch: Function,
) => {
  if (searchValue.length < 1) {
    dispatch(searchClientsReset());
    return;
  }

  const searchResults = clients.filter(
    client => getKeys(client, searchValue).length > 0,
  );

  dispatch(searchClientsSuccess(searchValue, searchResults));
};
