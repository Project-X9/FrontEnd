import * as ActionTypes from './ActionTypes';

export const GenreTracks = (state = { genretracks: [] , isLoading: true}, action) => {
    switch (action.type) {
      case ActionTypes.ADD_SONGS_BY_CATEGORY:
        return { ...state, genretracks: action.payload , isLoading:false};
        case ActionTypes.ADD_LOGOUT_BE:
          return {...state , genretracks: [] }
        case ActionTypes.SONGS_BYCATEGORY_LOADING:
        return {...state , isLoading: true }  
      default:
        return state;
    }
  };
  