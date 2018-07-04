// @flow

import * as actionTypes from '../actions/actionTypes';

type State = {|
  clients: Array<Client>,
  loading: boolean,
  activeClient: ?Client,
|};

const initialState = {
  clients: [],
  loading: false,
  activeClient: null,
};

const fetchClientsStart = (state: State) => ({
  ...state,
  loading: true,
});

const fetchClientsFail = (state: State) => ({
  ...state,
  loading: false,
});

const fetchClientsSuccess = (
  state: State,
  action: FetchClientSuccessAction,
) => ({
  ...state,
  loading: false,
  clients: action.clients,
});

const clientClick = (state: State, action: ClientClickAction) => ({
  ...state,
  activeClient: action.activeClient,
});

const reducer = (state: State = initialState, action: Action) => {
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
