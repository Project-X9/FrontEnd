import * as ActionTypes from './ActionTypes';

export const Artist = (state = { artist: [] }, action) => {
  switch (action.type) {
    case ActionTypes.ADD_ARTIST:
      return { ...state, artist: action.payload };
    
    default:
      return state;
  }
};
