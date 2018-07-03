/* eslint-disable */
// @flow

export type Client = {
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
};

declare type ActionType = 'SET_SEARCH_TERM' | 'ADD_API_DATA';

declare type ActionT<A: ActionType, P> = {|
  type: A,
  payload: P,
|};

export type Action =
  | ActionT<'SET_SEARCH_TERM', string>
  | ActionT<'ADD_API_DATA', Show>;
