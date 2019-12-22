import { combineReducers } from "redux";
import auth, { AuthState, initialStateAuth } from "./auth";
import desktop, { DesktopState, initialStateDesktop } from "./desktop";
import explorer, { ExplorerState, initialStateExplorerState } from "./explorer";
import images, { ImagesState, initialStateImages } from "./images";
import playback, { initialStatePlayback, PlaybackState } from "./playback";
import searchPagination, {
  initialStateSearchPagination,
  SearchPaginationState
} from "./search-pagination";
import user, { initialStateUser, UserState } from "./user";
import webamp, { initialStateWebamp, WebampState } from "./webamp";
import windowsReducer, { initialStateWindows, WindowsState } from "./windows";
import dataTransfer, {
  initialStateDataTransfer,
  DataTransferState
} from "./dataTransfer";

export const APPLY_SNAPSHOT = "APPLY_SNAPSHOT";

export interface AppState {
  explorer: ExplorerState;
  desktop: DesktopState;
  user: UserState;
  windows: WindowsState;
  images: ImagesState;
  playback: PlaybackState;
  auth: AuthState;
  searchPagination: SearchPaginationState;
  dataTransfer: DataTransferState;
  webamp: WebampState;
}

export const initialStateApp: AppState = {
  explorer: initialStateExplorerState,
  desktop: initialStateDesktop,
  user: initialStateUser,
  windows: initialStateWindows,
  images: initialStateImages,
  playback: initialStatePlayback,
  auth: initialStateAuth,
  searchPagination: initialStateSearchPagination,
  dataTransfer: initialStateDataTransfer,
  webamp: initialStateWebamp
};

const reducer = combineReducers<AppState>({
  explorer,
  images,
  windows: windowsReducer,
  desktop,
  user,
  playback,
  auth,
  searchPagination,
  dataTransfer,
  webamp
});

export default reducer;
