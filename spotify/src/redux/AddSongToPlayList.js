import * as ActionTypes from './ActionTypes';

export const ADDSongId = (state = { songid: {} }, action) => {
  switch (action.type) {
    case ActionTypes.ADDSONGID:
      return { ...state, songid: action.payload };
    case ActionTypes.ADD_LOGOUT_BE:
      return { ...state, songid: {} };
    default:
      return state;
  }
};