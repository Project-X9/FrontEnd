import { createStore, combineReducers, applyMiddleware } from "redux";
import { createForms } from "react-redux-form";
import thunk from "redux-thunk";
import logger from "redux-logger";
import { InitialFeedback, InitialLogin } from "./forms";
import { Data } from "./userData";
import { UserID } from "./UserId";
import {PlayList} from "./UserPlayLists"



function saveState (state){

  try {
      const serializedState=JSON.stringify(state)
      localStorage.setItem('state',serializedState);
  } catch (error) {
      //
  }
}
function loadState (){
  try {
      const serializedState =localStorage.getItem('state');
      if (serializedState===null){
          return undefined;
      }
      return JSON.parse( serializedState)
  } catch (error) {
      
  }
}
const persistState = loadState();
export const ConfigureStore = () => {
  const store = createStore(
    combineReducers({
      data: Data,
      id: UserID,
      playLists:PlayList,
      ...createForms({
        feedback: InitialFeedback,
        login: InitialLogin
      })
    }),
    persistState,
    applyMiddleware(thunk, logger)
  );
  store.subscribe(()=> saveState(store.getState()))
  return store;
};
