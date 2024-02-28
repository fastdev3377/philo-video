import { getScheduleData } from '../selectors/schedule';

export const SET_PLAYER_CAN_PLAY = 'SET_PLAYER_CAN_PLAY';
export const SET_IS_PLAYING = 'SET_IS_PLAYING';
export const SET_IS_INITIALIZED = 'SET_IS_INITIALIZED';
export const SET_CURRENT_VIDEO = 'SET_CURRENT_VIDEO';

export function loadVideo() {
  return (dispatch, getState) => {
    const state = getState();
    const scheduleData = getScheduleData(state);
    const now = new Date();

    const currentVideo = scheduleData.find(schedule => {
      const { startTime, endTime } = schedule;
      return new Date(startTime) <= now && now <= new Date(endTime);
    });

    dispatch({
      type: SET_CURRENT_VIDEO,
      currentVideo,
    });
  };
}

export function setCurrentVideo(video) {
  return {
    type: SET_CURRENT_VIDEO,
    currentVideo: video,
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

export function setVideoInitialized(initialized) {
  return {
    type: SET_IS_INITIALIZED,
    initialized,
  };
}
