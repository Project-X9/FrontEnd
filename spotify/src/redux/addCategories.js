
import * as ActionTypes from './ActionTypes';

export const Categories = (state = { categories:[] }, action) => {
    switch (action.type) {
      case ActionTypes.ADD_CATEGORIES:
        return { ...state, categories: action.payload };
      default:
        return state;
    }
  };