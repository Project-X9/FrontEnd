import * as ActionTypes from './ActionTypes';

export const Album = (state = { album: [] }, action) => {
  switch (action.type) {
    case ActionTypes.ADD_ALBUM:
      return { ...state, album: action.payload };
    case ActionTypes.ADD_LOGOUT_BE:
      return { ...state, album: [] };
    default:
      return state;
  }
};