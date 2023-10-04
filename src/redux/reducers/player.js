import { LOAD_VIDEO, SET_IS_PLAYING, SET_PLAYER_CAN_PLAY } from '../actions/player';
import createReducer from './create-reducer';
import DEFAULT_STATE from '../defaults/player';

function loadVideo(state, { currentVideo }) {
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

const handlers = {
  [LOAD_VIDEO]: loadVideo,
  [SET_PLAYER_CAN_PLAY]: setPlayerCanPlay,
  [SET_IS_PLAYING]: setIsPaused,
};

export default createReducer(DEFAULT_STATE, handlers);
