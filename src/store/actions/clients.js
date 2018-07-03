// @flow

import axios from 'axios';
import * as actionTypes from './actionTypes';
import type { Client } from '../../flowtypes/types';

export const fetchClientsStart = () => ({
  type: actionTypes.FETCH_CLIENTS_START,
});

export const fetchClientsFail = (error: string) => ({
  type: actionTypes.FETCH_CLIENTS_FAIL,
  error,
});

export const fetchClientsSuccess = (clients: Array<Client>) => ({
  type: actionTypes.FETCH_CLIENTS_SUCCESS,
  clients,
});

export const fetchClients = () => (dispatch: Function) => {
  dispatch(fetchClientsStart());
  axios
    .get('/clients.json')
    .then((res: Object) => {
      dispatch(fetchClientsSuccess(res.data));
    })
    .catch(error => {
      dispatch(fetchClientsFail(error));
    });
};

export const clientClick = (activeClient: Client) => ({
  type: actionTypes.CLIENT_CLICK,
  activeClient,
});
