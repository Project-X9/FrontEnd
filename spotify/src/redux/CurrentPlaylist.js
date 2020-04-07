import * as ActionTypes from './ActionTypes';

export const Current = (state = { currentPlaylist: [] }, action) => {
  switch (action.type) {
    case ActionTypes.ADD_CURRENT_PLAYLIST:
      return { ...state, currentPlaylist: action.payload };
    default:
      return state;
  }
};