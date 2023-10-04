import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { usePreviousValue } from '../../hooks/use-previous';
import { loadVideo, setIsPaused, setPlayerCanPlay } from '../../redux/actions/player';
import { getCurrentVideo, getIsPaused } from '../../redux/selectors/player';
import { getScheduleData } from '../../redux/selectors/schedule';
import { AppDispatch } from '../../types/thunk';
import { SECOND } from '../../utils';
import { PlayerControls } from '../player-controls/player-controls';

import styles from './player.module.sass';

export function Player() {
  const dispatch = useDispatch<AppDispatch>();
  const [playerControlsActive, setPlayerControlsActive] = useState(true);
  const videoElement = useRef<HTMLVideoElement>(null);
  const hideControlsTimeoutRef = useRef<number>();

  const isPaused = useSelector(getIsPaused);
  const previousIsPaused = usePreviousValue(isPaused);
  const currentVideo = useSelector(getCurrentVideo);
  const scheduleData = useSelector(getScheduleData);

  const { video = {} } = currentVideo;
  const { source, thumb } = video;

  useEffect(() => {
    if (scheduleData.length) {
      dispatch(loadVideo());
    }
  }, []);

  const createEventListener = (event: string, handler: VoidFunction) => {
    if (videoElement?.current) {
      videoElement?.current.addEventListener(event, handler);
    }
  };

  const handleUpdatePlayState = () => {
    if (videoElement?.current) {
      dispatch(setIsPaused(videoElement?.current.paused));
    }
  };

  const handleCanPlay = () => {
    dispatch(setPlayerCanPlay());
  };

  const handleHideControls = () => {
    if (videoElement?.current) {
      setPlayerControlsActive(false);
    }
  };

  const setHideControlsTimeout = () => {
    if (hideControlsTimeoutRef.current) {
      window.clearTimeout(hideControlsTimeoutRef.current);
    }

    hideControlsTimeoutRef.current = window.setTimeout(handleHideControls, SECOND * 1.5);
  };

  useEffect(() => {
    if (videoElement?.current) {
      createEventListener('play', handleUpdatePlayState);
      createEventListener('pause', handleUpdatePlayState);
      createEventListener('canplay', handleCanPlay);

      setHideControlsTimeout();
    }

    return () => {
      if (videoElement?.current) {
        videoElement?.current.removeEventListener('play', handleUpdatePlayState);
        videoElement?.current.removeEventListener('pause', handleUpdatePlayState);
        videoElement?.current.removeEventListener('canplay', handleCanPlay);
      }

      if (hideControlsTimeoutRef.current) {
        window.clearTimeout(hideControlsTimeoutRef.current);
      }
    };
  }, [videoElement?.current]);

  const handlePlayPause = (play: boolean) => {
    if (videoElement?.current) {
      if (play) {
        videoElement?.current.play();
      } else {
        videoElement?.current.pause();
      }
    }
  };

  useEffect(() => {
    if (previousIsPaused !== isPaused) {
      handlePlayPause(!isPaused);
    }
  }, [isPaused]);

  const handleMouseMove = () => {
    setPlayerControlsActive(true);

    setHideControlsTimeout();
  };

  return (
    <div
      onMouseEnter={handleMouseMove}
      onMouseLeave={handleHideControls}
      onMouseMove={handleMouseMove}
      className={styles.playerGroup}
    >
      <video
        poster={thumb}
        className={styles.player}
        controls={false}
        ref={videoElement}
        autoPlay
        src={source}
      />
      <PlayerControls playerControlsActive={playerControlsActive} />
    </div>
  );
}
