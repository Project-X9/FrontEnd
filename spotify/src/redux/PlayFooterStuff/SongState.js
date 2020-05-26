import * as ActionTypes from '../ActionTypes';


export const SongState = (state = {isPlaying:false}, action) => {
  switch (action.type) {
    case ActionTypes.START_SONG:
      return { ...state, isPlaying: true };
    case ActionTypes.PAUSE_SONG:
      return { ...state, isPlaying:false };
    // case ActionTypes.STOP_SONG:
    //   return { ...state, isPlaying:false };  
    default:
      return state;
  }
};