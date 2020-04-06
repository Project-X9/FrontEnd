import * as ActionTypes from './ActionTypes';

export const PlayList = (state = { playLists: [] }, action) => {
  switch (action.type) {
    case ActionTypes.ADD_PLAYLIST:
      return { ...state, playLists: action.payload };
    // case ActionTypes.REMOVE_PLAYLIST:
    //   return {};
    default:
      return state;
  }
};
// export const PlayList_BE = (state = { playlist_BE: [] }, action) => {
//   switch (action.type) {
//     case ActionTypes.ADD_PLAYLIST_BYID:
//       return { ...state, playlist_BE: state.playlist_BE.push(action.payload) };
//     // case ActionTypes.REMOVE_PLAYLIST:
//     //   return {};
//     default:
//       return state;
//   }
// };
