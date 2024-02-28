import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { usePreviousValue } from '../../hooks/use-previous';
import {
  loadVideo,
  setCurrentVideo,
  setIsPaused,
  setPlayerCanPlay,
  setVideoInitialized,
} from '../../redux/actions/player';
import { getCurrentVideo, getVideoInitialized, getIsPaused } from '../../redux/selectors/player';
import { getScheduleData } from '../../redux/selectors/schedule';
import { AppDispatch } from '../../types/thunk';
import { NEXT_VIDEO_PREP_TIME, SECOND } from '../../utils';
import { PlayerControls } from '../player-controls/player-controls';
import { useInterval } from '../../hooks/use-interval';
import { Presentation } from '../../types/presentation';

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
  const isVideoInitialized = useSelector(getVideoInitialized);

  const [remaining, setRemaining] = useState(0);
  const [nextVideo, setNextVideo] = useState<Presentation | null>(null);

  const { video = {}, startTime } = currentVideo || {};
  const { source, thumb } = video;

  const checkRemainingTime = () => {
    if (!videoElement.current || !video.id) return;
    // calc the remaining time of current video
    const newRemaining = videoElement.current.duration - videoElement.current.currentTime;
    // get the index of current video from scheduleData to get next video data
    const idx = scheduleData.findIndex((data: Presentation) => data.video.id === video.id);
    const newNextVideo: Presentation = scheduleData[(idx + 1) % scheduleData.length];

    setRemaining(Math.ceil(newRemaining));

    if (newRemaining < NEXT_VIDEO_PREP_TIME) {
      if (!nextVideo || newNextVideo.video.id !== nextVideo.video.id) {
        setNextVideo(newNextVideo);
      }
    }
  };
  useInterval(checkRemainingTime, SECOND);

  useEffect(() => {
    if (scheduleData.length) {
      dispatch(loadVideo());
    }
  }, []);

  useEffect(() => {
    if (!video.id || !videoElement.current) return;

    if (!isVideoInitialized) {
      const now = new Date().getTime();
      const start = new Date(startTime).getTime();
      const diff = (now - start) / 1000;
      if (videoElement.current) videoElement.current.currentTime = diff;
      dispatch(setVideoInitialized(true));
    }
  }, [currentVideo, videoElement.current]);

  const createEventListener = (event: keyof HTMLVideoElementEventMap, handler: VoidFunction) => {
    if (videoElement.current) {
      videoElement.current.addEventListener(event, handler);
    }
  };

  const removeEventListener = (event: keyof HTMLVideoElementEventMap, handler: VoidFunction) => {
    if (videoElement.current) {
      videoElement.current.removeEventListener(event, handler);
    }
  };

  const handleUpdatePlayState = () => {
    if (videoElement.current) {
      dispatch(setIsPaused(videoElement.current.paused));
    }
  };

  const handleCanPlay = () => {
    dispatch(setPlayerCanPlay());
  };

  const handlePlayEnded = () => {
    dispatch(setCurrentVideo(nextVideo));
    setNextVideo(null);
  };

  const handleHideControls = () => {
    if (videoElement.current) {
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
    if (videoElement.current) {
      createEventListener('ended', handlePlayEnded);
    }

    return () => {
      if (videoElement.current) {
        removeEventListener('ended', handlePlayEnded);
      }
    };
  }, [videoElement.current, nextVideo, currentVideo]);

  useEffect(() => {
    if (videoElement.current) {
      createEventListener('play', handleUpdatePlayState);
      createEventListener('pause', handleUpdatePlayState);
      createEventListener('canplay', handleCanPlay);

      setHideControlsTimeout();
    }

    return () => {
      if (videoElement.current) {
        removeEventListener('play', handleUpdatePlayState);
        removeEventListener('pause', handleUpdatePlayState);
        removeEventListener('canplay', handleCanPlay);
        removeEventListener('ended', handlePlayEnded);
      }

      if (hideControlsTimeoutRef.current) {
        window.clearTimeout(hideControlsTimeoutRef.current);
      }
    };
  }, [videoElement.current]);

  const handlePlayPause = (play: boolean) => {
    if (videoElement.current) {
      if (play) {
        videoElement.current.play();
      } else {
        videoElement.current.pause();
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
        // Setting this as muted for now for preventing errors on autoplay start
        // https://stackoverflow.com/a/59147330
        muted
      />
      <PlayerControls playerControlsActive={playerControlsActive} />
      {nextVideo && (
        <div className={styles.nextVideo}>
          <img
            className={styles.nextVideoThumb}
            alt={nextVideo.video.title}
            src={nextVideo.video.thumb}
          />
          <span className={styles.nextVideoTitle}>
            {nextVideo.video.title}
            <br />
            {`will be showing in ${remaining}s`}
          </span>
        </div>
      )}
    </div>
  );
}
