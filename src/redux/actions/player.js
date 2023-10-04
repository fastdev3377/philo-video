import { getScheduleData } from '../selectors/schedule';

export const LOAD_VIDEO = 'LOAD_VIDEO';
export const SET_PLAYER_CAN_PLAY = 'SET_PLAYER_CAN_PLAY';
export const SET_IS_PLAYING = 'SET_IS_PLAYING';

export function loadVideo() {
  return (dispatch, getState) => {
    const state = getState();
    const scheduleData = getScheduleData(state);

    const currentVideo = scheduleData[0];

    dispatch({
      type: LOAD_VIDEO,
      currentVideo,
    });
  };
}

export function setIsPaused(isPaused) {
  return {
    type: SET_IS_PLAYING,
    isPaused,
  };
}

export function setPlayerCanPlay() {
  return {
    type: SET_PLAYER_CAN_PLAY,
    canPlay: true,
  };
}
