import * as ActionTypes from './ActionTypes';

export const Data = (state = { data: [] }, action) => {
  switch (action.type) {
    case ActionTypes.ADD_USERDATA:
      return { ...state, data: action.payload };
    // case ActionTypes.REMOVE_USERDATA:
    //   return {...state,data:[]};
    default:
      return state;
  }
};
