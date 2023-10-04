import classNames from 'classnames';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';

import { setIsPaused } from '../../redux/actions/player';
import { getCanPlay, getCurrentVideo, getIsPaused } from '../../redux/selectors/player';
import { PauseIcon, PlayIcon } from '../icons/icons';

import styles from './player-controls.module.sass';

export function PlayerControls({ playerControlsActive }) {
  const dispatch = useDispatch();
  const currentVideo = useSelector(getCurrentVideo);
  const isPaused = useSelector(getIsPaused);
  const canPlay = useSelector(getCanPlay);

  const onPlayPauseClick = () => {
    dispatch(setIsPaused(!isPaused));
  };

  const { video = {} } = currentVideo;
  const { title, subtitle } = video;

  const playerControlsClasses = classNames({
    [styles.playerControls]: true,
    [styles.isActive]: playerControlsActive && canPlay,
  });

  const playPauseMarkup = isPaused ? <PlayIcon /> : <PauseIcon />;

  return (
    <div className={playerControlsClasses}>
      <div className={styles.titleGroup}>
        <div className={styles.title}>{title}</div>
        <div className={styles.subtitle}>{subtitle}</div>
      </div>
      <button className={styles.playPauseIcon} type="button" onClick={onPlayPauseClick}>
        {playPauseMarkup}
      </button>
    </div>
  );
}

PlayerControls.propTypes = {
  playerControlsActive: PropTypes.bool,
};
