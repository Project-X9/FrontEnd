import * as ActionTypes from './ActionTypes';

export const SignUpState = (state = { userstate:null }, action) => {
  switch (action.type) {
    case ActionTypes.ADD_USER:
      return { ...state, userstate: action.payload };
    case ActionTypes.ADD_LOGOUT:
      return {...state , userstate: null}  
    default:
      return state;
  }
};
