import * as ActionTypes from './ActionTypes';

export const QueueOfTracks = (state = { queue: [] , isLoading: true}, action) => {
    switch (action.type) {
      case ActionTypes.ADD_DELETED_PLAYLISTS:
        return { ...state, queue: action.payload , isLoading:false};
        case ActionTypes.ADD_LOGOUT_BE:
          return {...state , queue: [] }
        case ActionTypes.DELETED_PLAYLISTS_LOADING:
        return {...state , isLoading: true }  
      default:
        return state;
    }
  };
  