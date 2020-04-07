import * as ActionTypes from './ActionTypes';

export const SignUpState = (state = { userstate:null }, action) => {
  switch (action.type) {
    case ActionTypes.ADD_USER:
      return { ...state, userstate: action.payload };
    case ActionTypes.ADD_LOGOUT_BE:
      return {...state , userstate: null}  
    default:
      return state;
  }
};
export const SignInState = (state = { isSignedIn:null }, action) => {
  switch (action.type) {
    case ActionTypes.ADD_LOGIN:
      return { ...state, isSignedIn: action.payload };
    case ActionTypes.ADD_LOGOUT_BE:
      return {...state , isSignedIn: null}  
    default:
      return state;
  }
};