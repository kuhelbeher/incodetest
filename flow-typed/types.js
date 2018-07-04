// @flow

export type Client = {|
  general: {
    firstName: string,
    lastName: string,
    avatar: string,
  },
  job: {
    company: string,
    title: string,
  },
  contact: {
    email: string,
    phone: string,
  },
  address: {
    street: string,
    city: string,
    zipCode: string,
    country: string,
  },
|};

type FetchClientStartAction = {
  type: 'FETCH_CLIENTS_START',
};

type FetchClientFailAction = {
  type: 'FETCH_CLIENTS_FAIL',
};

export type FetchClientSuccessAction = {
  type: 'FETCH_CLIENTS_SUCCESS',
  clients: Array<Client>,
};

export type ClientClickAction = {
  type: 'CLIENT_CLICK',
  activeClient: Client,
};

export type SearchClientsSuccessAction = {
  type: 'SEARCH_CLIENTS_SUCCESS',
  searchValue: string,
  searchResults: Array<Client>,
};

type SearchClientsResetAction = {
  type: 'SEARCH_CLIENTS_RESET',
};

export type Action =
  | FetchClientStartAction
  | FetchClientFailAction
  | FetchClientSuccessAction
  | ClientClickAction
  | SearchClientsSuccessAction
  | SearchClientsResetAction;

export type GlobalState = {
  +clients: {
    +client: Array<Client>,
    +loading: boolean,
    +activeClient: Client,
  },
  +search: {
    +searchValue: string,
    +searchResults: Array<Client>,
  },
};
