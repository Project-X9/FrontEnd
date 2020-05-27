import * as ActionTypes from '../ActionTypes';


export const SongProgress = (state = {progress:0}, action) => {
  switch (action.type) {
    case ActionTypes.CHANGE_SONG_PROGRESS:
      return { ...state, progress: action.payload };  
    default:
      return state;
  }
};

export const ProgressMode = (state = {in_set_progress_mode:false}, action) => {
  switch (action.type) {
    case ActionTypes.CHANGE_PROGRESS_Mode:
      return { ...state, in_set_progress_mode: action.payload };  
    default:
      return state;
  }
};
export const ProgressDirty = (state = {is_progress_dirty:false}, action) => {
  switch (action.type) {
    case ActionTypes.CHANGE_PROGRESS_Mode:
      return { ...state, is_progress_dirty: action.payload };  
    default:
      return state;
  }
};
