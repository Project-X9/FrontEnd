import * as ActionTypes from './ActionTypes';


export const UserID = (state = { id:''}, action) => {
  switch (action.type) {
    case ActionTypes.ADD_USERID:
      return { ...state, id: action.payload };
    case ActionTypes.ADD_LOGOUT:
      return { ...state, id:action.payload };
    default:
      return state;
  }
};
