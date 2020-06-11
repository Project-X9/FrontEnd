import * as ActionTypes from '../ActionTypes';


export const SongState = (state = {shuffle:false}, action) => {
  switch (action.type) {
    case ActionTypes.START_SHUFFLE:
      return { ...state, shuffle: true };
    case ActionTypes.PAUSE_SHUFFLE:
      return { ...state, shuffle:false };
    case ActionTypes.ADD_LOGOUT_BE:
      return { ...state, shuffle:false };  
    default:
      return state;
  }
};