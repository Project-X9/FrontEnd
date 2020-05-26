import * as ActionTypes from '../ActionTypes';


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
export const TotalTime = (state = {totalTime:0}, action) => {
  switch (action.type) {
    case ActionTypes.TOTAL_TIME:
      return { ...state, totalTime: action.payload };
    default:
      return state;
  }
};

export const CurrentTime = (state = {currentTime:0}, action) => {
  switch (action.type) {
    case ActionTypes.CURRENT_TIME:
      return { ...state, currentTime: action.payload };
    default:
      return state;
  }
};