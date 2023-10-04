export function getCurrentVideo({ player }) {
  return player.currentVideo;
}

export function getIsPaused({ player }) {
  return player.isPaused;
}

export function getCanPlay({ player }) {
  return player.canPlay;
}
