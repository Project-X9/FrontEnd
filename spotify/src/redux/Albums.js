import * as ActionTypes from './ActionTypes';

export const Album = (state = { artist: [] }, action) => {
  switch (action.type) {
    case ActionTypes.ADD_ALBUM:
      return { ...state, album: action.payload };
    
    default:
      return state;
  }
};