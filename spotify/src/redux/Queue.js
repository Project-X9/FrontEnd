import * as ActionTypes from './ActionTypes';

export const QueueOfTracks = (state = { queue: null , isLoading: true}, action) => {
    switch (action.type) {
      case ActionTypes.ADDQUEUE:
        return { ...state, queue: action.payload , isLoading:false};
        case ActionTypes.ADD_LOGOUT_BE:
          return {...state , queue: null }
        case ActionTypes.ADDQUEUE_LOADING:
        return {...state , isLoading: true }  
      default:
        return state;
    }
  };
  