import { createStore, combineReducers, applyMiddleware } from "redux";
import { createForms } from "react-redux-form";
import thunk from "redux-thunk";
import logger from "redux-logger";
import {
  InitialFeedback,
  InitialLogin,
  ChangePassword,
  EditProfile,
} from "./forms";
import { Data, Data_BE } from "./userData";
import { UserID } from "./UserId";
import { PlayList } from "./UserPlayLists";
import { Artist } from "./Artist";
import { Album } from "./Albums";
import { SignUpState, SignInState } from "./addUser";
import { Current } from "./CurrentPlaylist";
import { Categories } from "./addCategories";
import { Song, CurrentTime,TotalTime,PrevSong } from './PlayFooterStuff/SongsPlay';
import { SongState } from './PlayFooterStuff/SongState';
import { SongProgress, ProgressMode ,ProgressDirty} from './PlayFooterStuff/SongProgress';

function saveState(state) {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem("state", serializedState);
  } catch (error) {
    //
  }
}
function loadState() {
  try {
    const serializedState = localStorage.getItem("state");
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (error) {}
}
const persistState = loadState();
export const ConfigureStore = () => {
  const store = createStore(
    combineReducers({
      data: Data,
      id: UserID,
      playLists: PlayList,
      artist: Artist,
      album: Album,
      userstate: SignUpState,
      isSignedIn: SignInState,
      data_be: Data_BE,
      currentPlaylist: Current,
      categories: Categories,
      song:Song,
      isPlaying:SongState,
      progress:SongProgress,
      in_set_progress_mode:ProgressMode,
      is_progress_dirty:ProgressDirty,
      currentTime:CurrentTime,
      totalTime:TotalTime,
      prevsong:PrevSong,
      // playlist_BE:PlayList_BE,
      ...createForms({
        feedback: InitialFeedback,
        login: InitialLogin,
        changepassword: ChangePassword,
        editprofie: EditProfile,
      }),
    }),
    persistState,
    applyMiddleware(thunk, logger)
  );
  store.subscribe(() => saveState(store.getState()));
  return store;
};
