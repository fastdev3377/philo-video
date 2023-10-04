import { useEffect, useRef, useState } from 'react';

import { calculateLiveMarkerPosition, formatHour, generateGuideTimes } from '../../utils';

import styles from './guide.module.sass';

export function Guide() {
  const guideElementRef = useRef(null);
  const [guideElement, setGuideElement] = useState(guideElementRef.current);

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
        <div className={styles.presentations}>{/* scheduleData */}</div>
      </div>
    </div>
  );
}
