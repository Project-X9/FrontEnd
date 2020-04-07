import * as ActionTypes from './ActionTypes';

export const Artist = (state = { artist: [] }, action) => {
  switch (action.type) {
    case ActionTypes.ADD_ARTIST:
      return { ...state, artist: action.payload };
    case ActionTypes.ADD_LOGOUT_BE:
      return { ...state, artist: [] };  
    default:
      return state;
  }
};
