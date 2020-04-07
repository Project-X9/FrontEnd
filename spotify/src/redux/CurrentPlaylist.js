import * as ActionTypes from './ActionTypes';

export const Current = (state = { currentPlaylist: [], isLoading : true}, action) => {
  switch (action.type) {
    case ActionTypes.ADD_CURRENT_PLAYLIST:
      return { ...state, currentPlaylist: action.payload , isLoading:false};
    case ActionTypes.ADD_LOGOUT_BE:
      return { ...state, currentPlaylist: [] };
    case ActionTypes.CURRENT_LOADING:
      return { ...state, isLoading: true, currentPlaylist: []};  
        
    default:
      return state;
  }
};