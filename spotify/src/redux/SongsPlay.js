import * as ActionTypes from './ActionTypes';


export const Song = (state = {song:null}, action) => {
  switch (action.type) {
    case ActionTypes.CURRENT_SONG_URL:
      return { ...state, song: action.payload };
    case ActionTypes.ADD_LOGOUT:
      return { ...state, song:null };
    default:
      return state;
  }
};