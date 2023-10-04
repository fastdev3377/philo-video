import { Link } from 'react-router-dom';

import { Clock } from '../clock/clock';
import { LiveIcon, LogoIcon } from '../icons/icons';
import styles from './navbar.module.sass';

export function Navbar() {
  return (
    <div className={styles.navbarContainer}>
      <Link to="/">
        <LogoIcon classNames={styles.logo} />
      </Link>
      <Clock />
      <Link to="/live">
        <LiveIcon classNames={styles.liveIcon} />
        <span className={styles.liveText}>Live</span>
      </Link>
    </div>
  );
}
