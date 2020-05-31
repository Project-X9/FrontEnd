import * as ActionTypes from './ActionTypes';

export const AddToken = (state = { token:null }, action) => {
  switch (action.type) {
    case ActionTypes.ADD_TOKEN:
      return { ...state, token: action.payload };
    case ActionTypes.ADD_LOGOUT_BE:
      return {...state , userstate: null}  
    default:
      return state;
  }
};