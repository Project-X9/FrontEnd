import * as ActionTypes from './ActionTypes';

export const Data = (state = { data: [] }, action) => {
  switch (action.type) {
    case ActionTypes.ADD_USERDATA:
      return { ...state, data: action.payload };
    // case ActionTypes.REMOVE_USERDATA:
    //   return {...state,data:[]};
    default:
      return state;
  }
};
export const Data_BE = (state = { data_be: [] }, action) => {
  switch (action.type) {
    case ActionTypes.ADD_USERDATA_BE:
      return { ...state, data_be: action.payload };
      case ActionTypes.ADD_LOGOUT_BE:
        return {...state , data_be:null}  
    default:
      return state;
  }
};
