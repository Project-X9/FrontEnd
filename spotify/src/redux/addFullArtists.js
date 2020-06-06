import * as ActionTypes from './ActionTypes';

export const FullArtists = (state = { fullArtists:[] }, action) => {
    switch (action.type) {
        case ActionTypes.ADD_FULLARTISTS:
            return { ...state, fullArtists: action.payload };
        default:
            return state;
    }
};