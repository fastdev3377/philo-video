import {
  SET_CURRENT_VIDEO,
  SET_IS_INITIALIZED,
  SET_IS_PLAYING,
  SET_PLAYER_CAN_PLAY,
} from '../actions/player';
import createReducer from './create-reducer';
import DEFAULT_STATE from '../defaults/player';

function setCurrentVideo(state, { currentVideo }) {
  return {
    ...state,
    currentVideo,
  };
}

function setPlayerCanPlay(state, { canPlay }) {
  return {
    ...state,
    canPlay,
  };
}

function setIsPaused(state, { isPaused }) {
  return {
    ...state,
    isPaused,
  };
}

function setVideoInitialized(state, { initialized }) {
  return {
    ...state,
    initialized,
  };
}

const handlers = {
  [SET_PLAYER_CAN_PLAY]: setPlayerCanPlay,
  [SET_IS_PLAYING]: setIsPaused,
  [SET_IS_INITIALIZED]: setVideoInitialized,
  [SET_CURRENT_VIDEO]: setCurrentVideo,
};

export default createReducer(DEFAULT_STATE, handlers);
