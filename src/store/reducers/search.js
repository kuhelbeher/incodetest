// @flow

import * as actionTypes from '../actions/actionTypes';

type State = {|
  searchResults: Array<Client>,
  searchValue: string,
|};

const initialState = {
  searchResults: [],
  searchValue: '',
};

const searchClientsSuccess = (
  state: State,
  action: SearchClientsSuccessAction,
) => ({
  ...state,
  searchValue: action.searchValue,
  searchResults: action.searchResults,
});

const searchClientsReset = (state: State) => ({
  ...state,
  searchValue: '',
  searchResults: [],
});

const reducer = (state: State = initialState, action: Action) => {
  switch (action.type) {
    case actionTypes.SEARCH_CLIENTS_SUCCESS:
      return searchClientsSuccess(state, action);
    case actionTypes.SEARCH_CLIENTS_RESET:
      return searchClientsReset(state);
    default:
      return state;
  }
};

export default reducer;
