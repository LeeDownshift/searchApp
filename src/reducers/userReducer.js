import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function usersReducer(state = initialState.users, action) {
  switch (action.type) {
    case types.USERS_REQUEST_SUCCESS:
      return action.users;
    default:
      return state;
  }
}