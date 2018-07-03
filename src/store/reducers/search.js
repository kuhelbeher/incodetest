// @flow

import * as actionTypes from '../actions/actionTypes';

const initialState = {
  searchResults: [],
  searchValue: '',
};

const searchClientsSuccess = (state, action) => ({
  ...state,
  searchValue: action.searchValue,
  searchResults: action.searchResults,
});

const searchClientsReset = state => ({
  ...state,
  searchValue: '',
  searchResults: [],
});

const reducer = (state = initialState, action) => {
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
