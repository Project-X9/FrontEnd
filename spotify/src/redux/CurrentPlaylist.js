import * as ActionTypes from './ActionTypes';

export const Current = (state = { currentPlaylist: [] }, action) => {
  switch (action.type) {
    case ActionTypes.ADD_CURRENT_PLAYLIST:
      return { ...state, currentPlaylist: action.payload };
    case ActionTypes.ADD_LOGOUT_BE:
      return { ...state, currentPlaylist: [] };
        
    default:
      return state;
  }
};