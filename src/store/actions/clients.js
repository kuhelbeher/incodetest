import axios from 'axios';
import * as actionTypes from './actionTypes';

export const fetchClientsStart = () => ({
  type: actionTypes.FETCH_CLIENTS_START,
});

export const fetchClientsFail = error => ({
  type: actionTypes.FETCH_CLIENTS_FAIL,
  error,
});

export const fetchClientsSuccess = clients => ({
  type: actionTypes.FETCH_CLIENTS_SUCCESS,
  clients,
});

export const fetchClients = () => dispatch => {
  dispatch(fetchClientsStart());
  axios
    .get('/clients.json')
    .then(res => {
      console.log(res);
    })
    .catch(error => {
      dispatch(fetchClientsFail(error));
    });
};