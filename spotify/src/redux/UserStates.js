import * as ActionTypes from './ActionTypes';

export const  UserID = (state = {id:''}, action) => {
    switch (action.type) {
        case ActionTypes.ADD_USERDATA:
            return {...state, id: action.payload };
        default:
            return state;
    }
}