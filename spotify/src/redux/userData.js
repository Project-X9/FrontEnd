import * as ActionTypes from './ActionTypes';

export const  Data = (state = {userData}, action) => {
    switch (action.type) {
        case ActionTypes.ADD_USERDATA:
            return {...state, userData: action.payload};
        default:
            return state;
    }
}