import * as ActionTypes from './ActionTypes';

export const Data = (state = { data: [] }, action) => {
  switch (action.type) {
    case ActionTypes.ADD_USERDATA:
      return { ...state, data: action.payload };
    default:
      return state;
  }
};
