import * as actionTypes from '../actions/actionTypes';

const initialState = {
  clients: [],
  loading: false,
  activeClient: null,
};

const fetchClientsStart = state => ({
  ...state,
  loading: true,
});

const fetchClientsFail = state => ({
  ...state,
  loading: false,
});

const fetchClientsSuccess = (state, action) => ({
  ...state,
  loading: false,
  clients: action.clients,
});

const clientClick = (state, action) => ({
  ...state,
  activeClient: action.activeClient,
});

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_CLIENTS_START:
      return fetchClientsStart(state);
    case actionTypes.FETCH_CLIENTS_FAIL:
      return fetchClientsFail(state);
    case actionTypes.FETCH_CLIENTS_SUCCESS:
      return fetchClientsSuccess(state, action);
    case actionTypes.CLIENT_CLICK:
      return clientClick(state, action);
    default:
      return state;
  }
};

export default reducer;
