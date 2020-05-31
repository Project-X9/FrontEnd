import * as ActionTypes from '../ActionTypes';


export const SongState = (state = {shuffle:false}, action) => {
  switch (action.type) {
    case ActionTypes.START_SHUFFLE:
      return { ...state, shuffle: true };
    case ActionTypes.PAUSE_SHUFFLE:
      return { ...state, shuffle:false };
    // case ActionTypes.STOP_SONG:
    //   return { ...state, isPlaying:false };  
    default:
      return state;
  }
};