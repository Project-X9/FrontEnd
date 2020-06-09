import * as ActionTypes from './ActionTypes';

export const DeletedPlaylists = (state = { deletedPlaylists: [] , isLoading: true}, action) => {
    switch (action.type) {
      case ActionTypes.ADD_DELETED_PLAYLISTS:
        return { ...state, deletedPlaylists: action.payload , isLoading:false};
        case ActionTypes.ADD_LOGOUT_BE:
          return {...state , deletedPlaylists: [] }
        case ActionTypes.DELETED_PLAYLISTS_LOADING:
        return {...state , isLoading: true }  
      default:
        return state;
    }
  };
  