import { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  calcHeightByDuration,
  calculateLiveMarkerPosition,
  formatHour,
  formatTime,
  generateGuideTimes,
} from '../../utils';

import { getScheduleData } from '../../redux/selectors/schedule';
import { updateFavorite } from '../../redux/actions/favorite';

import styles from './guide.module.sass';
import { getFavoritesData } from '../../redux/selectors/favorite';

export function Guide() {
  const dispatch = useDispatch();
  const guideElementRef = useRef(null);
  const [guideElement, setGuideElement] = useState(guideElementRef.current);
  const scheduleData = useSelector(getScheduleData);
  const favoriteData = useSelector(getFavoritesData);

  const liveMarkerPosition = calculateLiveMarkerPosition();
  const livePosition = guideElement ? guideElement.scrollHeight * liveMarkerPosition : 0;

  const scrollToLive = () => {
    if (guideElement) {
      const guideHeight = guideElement.offsetHeight;

      const positionToScroll = livePosition - guideHeight / 4;
      guideElement.scrollTo(0, positionToScroll);
    }
  };

  useEffect(() => {
    setGuideElement(guideElementRef.current);
  }, [guideElementRef.current]);

  useEffect(() => {
    if (guideElement) {
      scrollToLive();
    }
  }, [guideElement]);

  const handleUpdateFavorite = ({ id, value }) => {
    dispatch(updateFavorite({ id, value }));
  };

  const renderTimeline = () => {
    const guideHours = generateGuideTimes().map(date => formatHour(date));

    return guideHours.map(hour => (
      <div key={hour} className={styles.hour}>
        {hour}
      </div>
    ));
  };

  const liveMarkerStyle = { top: `${livePosition}px` };

  return (
    <div className={styles.guideContainer}>
      <div className={styles.guideHeader}>Guide</div>
      <div ref={guideElementRef} className={styles.guide}>
        <div className={styles.timeline}>
          <div className={styles.liveMarker} style={liveMarkerStyle} />
          {renderTimeline()}
        </div>
        <div className={styles.presentations}>
          {scheduleData.map(({ startTime, video }) => {
            const {
              duration, id, thumb, title,
            } = video;
            const isFavorite = favoriteData[id];

            return (
              <div
                key={id}
                className={styles.presentation}
                style={{
                  // set the height of presentation based on duration
                  height: `${calcHeightByDuration(duration)}em`,
                  // set the background image from thumbnail
                  backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0.8)), url(${thumb})`,
                }}
              >
                <button
                  type="button"
                  className={`${styles.presentationFavorite}${
                    isFavorite ? ` ${styles.favorite}` : ''
                  }`}
                  onClick={() => handleUpdateFavorite({ id, value: !isFavorite })}
                >
                  {isFavorite ? '★' : '☆'}
                </button>
                <span className={styles.presentationTime}>{formatTime(startTime)}</span>
                <span className={styles.presentationTitle}>{title}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
