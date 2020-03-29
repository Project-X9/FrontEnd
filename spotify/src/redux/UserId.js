import * as ActionTypes from './ActionTypes';

const initialState={
  id:''
};

export const UserID = (state = { id:''}, action) => {
  switch (action.type) {
    case ActionTypes.ADD_USERID:
      return { ...state, id: action.payload };
    default:
      return state;
  }
};
