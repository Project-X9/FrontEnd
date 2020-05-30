import * as ActionTypes from './ActionTypes';

export const SignUpData = (state = { signupdata: {} }, action) => {
  switch (action.type) {
    case ActionTypes.ADD_NEW_USER:
      return { ...state, signupdata: action.payload };
    default:
      return state;
  }
};
export const SignUpModal = (state = { isModalOpen: false }, action) => {
    switch (action.type) {
      case ActionTypes.CONTROLMODAL:
        return { ...state,  isModalOpen: action.payload };
      default:
        return state;
    }
  };