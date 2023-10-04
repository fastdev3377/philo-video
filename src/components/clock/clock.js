import { useDispatch, useSelector } from 'react-redux';

import { useInterval } from '../../hooks/use-interval';
import { updateDisplayableTime } from '../../redux/actions/clock';
import { getDisplayableTime } from '../../redux/selectors/clock';
import { SECOND } from '../../utils';

import styles from './clock.module.sass';

export function Clock() {
  const dispatch = useDispatch();
  const displayableTime = useSelector(getDisplayableTime);
  useInterval(() => dispatch(updateDisplayableTime()), SECOND);

  if (!displayableTime) {
    return null;
  }

  return <div className={styles.clockContainer}>{displayableTime}</div>;
}
