import * as ActionTypes from './ActionTypes';

export const FullSongs = (state = { fullSongs:[] }, action) => {
    switch (action.type) {
      case ActionTypes.ADD_FULLSONGS:
        return { ...state, fullSongs: action.payload };
      default:
        return state;
    }
  };