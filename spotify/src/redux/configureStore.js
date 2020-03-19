import { createStore, combineReducers, applyMiddleware } from 'redux';
import { createForms } from 'react-redux-form';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { InitialFeedback } from './forms';
import { Data } from './userData';
import { UserID } from './UserStates';

export const ConfigureStore = () => {
  const store = createStore(
    combineReducers({
        data:Data,
        id:UserID,
      ...createForms({
        feedback: InitialFeedback,
      }),
    }),
    applyMiddleware(thunk, logger),
  );

  return store;
};
