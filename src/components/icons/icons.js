/* eslint max-len: "off" */
import PropTypes from 'prop-types';

export function BackIcon({ classNames }) {
  return (
    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 8 16" className={classNames}>
      <path d="M2.4,8l5.3,5.3C7.9,13.5,8,13.7,8,14c0,0.6-0.4,1-1,1c-0.3,0-0.5-0.1-0.7-0.3l-6-6C0.1,8.5,0,8.3,0,8c0-0.3,0.1-0.5,0.3-0.7l6-6C6.5,1.1,6.7,1,7,1c0.6,0,1,0.4,1,1c0,0.3-0.1,0.6-0.3,0.8L2.4,8L2.4,8z" />
    </svg>
  );
}

BackIcon.propTypes = {
  classNames: PropTypes.string,
};

export function BrowseIcon({ classNames }) {
  return (
    <svg
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 32 26"
      className={classNames}
    >
      <g>
        <path d="M24,18.5c1.7,0,3,1.3,3,3s-1.3,3-3,3s-3-1.3-3-3S22.3,18.5,24,18.5 M24,17c-2.5,0-4.5,2-4.5,4.5s2,4.5,4.5,4.5&#x9;s4.5-2,4.5-4.5S26.5,17,24,17L24,17z" />
      </g>
      <g>
        <path d="M26,2c2.2,0,4,1.8,4,4s-1.8,4-4,4s-4-1.8-4-4S23.8,2,26,2 M26,0c-3.3,0-6,2.7-6,6s2.7,6,6,6s6-2.7,6-6S29.3,0,26,0L26,0z" />
      </g>
      <g>
        <path d="M9,8.5c3.6,0,6.5,2.9,6.5,6.5s-2.9,6.5-6.5,6.5S2.5,18.6,2.5,15S5.4,8.5,9,8.5 M9,6c-5,0-9,4-9,9s4,9,9,9s9-4,9-9S14,6,9,6&#x9;L9,6z" />
      </g>
      <g>
        <rect
          x="17.7"
          y="6.8"
          transform="matrix(0.4678 0.8838 -0.8838 0.4678 18.6716 -11.2919)"
          width="2"
          height="6.1"
        />
      </g>
      <g>
        <rect
          x="15.8"
          y="18"
          transform="matrix(0.9175 0.3977 -0.3977 0.9175 9.074 -5.7036)"
          width="5"
          height="2"
        />
      </g>
    </svg>
  );
}

BrowseIcon.propTypes = {
  classNames: PropTypes.string,
};

export function CheckIcon({ classNames }) {
  return (
    <svg
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 16"
      className={classNames}
    >
      <path d="M15.7,1.3l-1.3-0.9c-0.4-0.2-0.8-0.2-1.1,0.2L6,11.3L2.5,7.7c-0.3-0.3-0.8-0.3-1.1,0L0.2,8.9c-0.3,0.3-0.3,0.8,0,1.1l5.6,5.6c0.3,0.3,0.9,0.3,1.2-0.1l8.9-13.1C16.1,2,16,1.5,15.7,1.3z" />
    </svg>
  );
}

CheckIcon.propTypes = {
  classNames: PropTypes.string,
};

export function ClearIcon({ classNames }) {
  return (
    <svg
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 16"
      className={classNames}
    >
      <path d="M14,11.9L10.1,8L14,4.1c0.4-0.4,0.4-1,0-1.4L13.3,2c-0.4-0.4-1-0.4-1.4,0L8,5.9L4.1,2c-0.4-0.4-1-0.4-1.4,0L2,2.7c-0.4,0.4-0.4,1,0,1.4L5.9,8L2,11.9c-0.4,0.4-0.4,1,0,1.4L2.7,14c0.4,0.4,1,0.4,1.4,0L8,10.1l3.9,3.9c0.4,0.4,1,0.4,1.4,0l0.7-0.7C14.4,12.9,14.4,12.3,14,11.9z" />
    </svg>
  );
}

ClearIcon.propTypes = {
  classNames: PropTypes.string,
};

export function FacebookIcon({ classNames }) {
  return (
    <svg
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      width="32px"
      height="32px"
      viewBox="0 0 32 32"
      className={classNames}
    >
      <g>
        <g>
          <line stroke="#479ED7" x1="27" y1="0" x2="27" y2="0" />
        </g>
      </g>
      <path d="M8.3,10.6h3.3V9.1V7.6V7.4c0-1.4,0-3.6,1.1-5C13.7,1,15.2,0,17.8,0c4.2,0,5.9,0.6,5.9,0.6l-0.8,4.9c0,0-1.4-0.4-2.7-0.4s-2.4,0.5-2.4,1.7v0.5v1.7v1.5h5.3l-0.4,4.8h-4.9V32h-6.2V15.4H8.3V10.6" />
    </svg>
  );
}

FacebookIcon.propTypes = {
  classNames: PropTypes.string,
};

export function InfoIcon({ classNames }) {
  return (
    <svg
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 16"
      className={classNames}
    >
      <g className="svg-info">
        <g>
          <path d="M8,1c3.9,0,7,3.1,7,7s-3.1,7-7,7s-7-3.1-7-7S4.1,1,8,1 M8,0C3.6,0,0,3.6,0,8s3.6,8,8,8s8-3.6,8-8S12.4,0,8,0L8,0z" />
        </g>
        <g>
          <path d="M6,11.1l0.4-3.6c0.1-0.9,0.4-1.3,1-1.3l0.3,0C8.4,6.1,9.1,6.3,9,7.3l-0.4,3.7c-0.1,0.8,0.1,1.1,0.6,1.2&#x9;&#x9;c0,0-0.1,0.7-1.3,0.8C6.3,13.1,5.9,12.3,6,11.1z M6.7,4.5C6.7,3.7,7.2,3.1,8,3c0.8-0.1,1.4,0.3,1.4,0.9C9.5,4.7,9,5.3,8.2,5.4&#x9;&#x9;C7.3,5.5,6.8,5.1,6.7,4.5z" />
        </g>
      </g>
    </svg>
  );
}

InfoIcon.propTypes = {
  classNames: PropTypes.string,
};

export function LiveIcon({ classNames }) {
  return (
    <svg
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 32"
      className={classNames}
    >
      <path d="M10,13l2.4-11.4c0.3-1.4-1.6-2.2-2.4-0.9L0.2,17c-0.5,0.9,0.1,2,1.1,2H6L3.6,30.4c-0.3,1.4,1.6,2.2,2.4,0.9L15.8,15c0.5-0.9-0.1-2-1.1-2H10z" />
    </svg>
  );
}
LiveIcon.propTypes = {
  classNames: PropTypes.string,
};

export function LogoIcon({ classNames }) {
  return (
    <svg
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 60 30"
      className={classNames}
    >
      <path
        className="svg-logo"
        d="M52.5,6.8c-4.2,0-7.5,3.4-7.5,7.5s3.4,7.5,7.5,7.5s7.5-3.4,7.5-7.5S56.6,6.8,52.5,6.8z M52.5,19.8c-3,0-5.5-2.4-5.5-5.5s2.4-5.5,5.5-5.5s5.5,2.4,5.5,5.5S55.5,19.8,52.5,19.8z M40,0.7c1.1,0,2.1,1,2.1,2.1v18.3c0,0.4-0.4,0.8-0.9,0.8h-0.5c-0.4,0-0.7-0.3-0.7-0.8V0.7z M34.5,6.7c1.2,0,2.1,1,2.1,2.1v12.2c0,0.4-0.4,0.8-0.8,0.8h-0.5c-0.4,0-0.8-0.3-0.8-0.8V6.7z M36.9,2.1c0,0.8-0.6,1.4-1.4,1.4s-1.4-0.6-1.4-1.4s0.6-1.4,1.4-1.4S36.9,1.3,36.9,2.1z M19.8,21.1c0,0.4-0.4,0.8-0.8,0.8h-0.5c-0.4,0-0.7-0.3-0.7-0.8V0.7c1.1,0,2.1,1,2.1,2.1l0,6.6c1-1.7,3.2-2.6,5.1-2.6c2.6,0,4.9,1.3,5.7,3.9c0.3,0.8,0.4,1.7,0.4,2.8v7.7c0,0.4-0.4,0.8-0.8,0.8h-0.5c-0.4,0-0.8-0.3-0.8-0.8c0,0,0-7.5,0-7.5c0-2.5-1.2-4.8-4.1-4.8c-2.9,0-4.8,1.9-5,4.6V21.1z M2.1,27.2c0,1.2-0.9,2.1-2.1,2.1v-4.2c0,0,0-10.9,0-10.9c0-4,3.5-7.4,7.5-7.4c4.5,0,7.5,3.4,7.5,7.6c0,3.4-2.3,6.4-5.6,7.2c-1.5,0.4-3.9,0.5-4.9-0.8c-0.4-0.5-0.5-1.4-0.1-2c0.9,0.6,2,1,3.2,1c3,0,5.5-2.5,5.5-5.4c0-3-2.5-5.5-5.5-5.5c-3,0-5.5,2.4-5.5,5.5L2.1,27.2z"
      />
    </svg>
  );
}

LogoIcon.propTypes = {
  classNames: PropTypes.string,
};

export function MaximizeIcon({ classNames }) {
  return (
    <svg
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 16"
      className={classNames}
    >
      <path d="M14.4,1C14.7,1,15,1.3,15,1.6v12.8c0,0.3-0.3,0.6-0.6,0.6H1.6C1.3,15,1,14.7,1,14.4V1.6C1,1.3,1.3,1,1.6,1H14.4 M14.4,0H1.6C0.7,0,0,0.7,0,1.6v12.8C0,15.3,0.7,16,1.6,16h12.8c0.9,0,1.6-0.7,1.6-1.6V1.6C16,0.7,15.3,0,14.4,0L14.4,0z" />
      <path d="M12.4,8.9c-0.1-0.2-0.3-0.2-0.4-0.1l-0.9,0.9L9.3,8l1.8-1.8L12,7.2c0.1,0.1,0.4,0.1,0.4-0.1L14,2.3C14,2.1,13.9,2,13.7,2L8.9,3.6C8.8,3.7,8.7,3.9,8.8,4l0.9,0.9L8,6.7L6.2,4.9L7.2,4c0.1-0.1,0.1-0.4-0.1-0.4L2.3,2C2.1,2,2,2.1,2,2.3l1.6,4.7C3.7,7.2,3.9,7.3,4,7.2l0.9-0.9L6.7,8L4.9,9.8L4,8.8C3.9,8.7,3.7,8.8,3.6,8.9L2,13.7C2,13.9,2.1,14,2.3,14l4.7-1.6c0.2-0.1,0.2-0.3,0.1-0.4l-0.9-0.9L8,9.3l1.8,1.8L8.8,12c-0.1,0.1-0.1,0.4,0.1,0.4l4.7,1.6c0.2,0.1,0.4-0.1,0.3-0.3L12.4,8.9z" />
    </svg>
  );
}

MaximizeIcon.propTypes = {
  classNames: PropTypes.string,
};

export function MinimizeIcon({ classNames }) {
  return (
    <svg
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 16"
      className={classNames}
    >
      <path d="M14.4,0H1.6C0.7,0,0,0.7,0,1.6v12.8C0,15.3,0.7,16,1.6,16h12.8c0.9,0,1.6-0.7,1.6-1.6V1.6C16,0.7,15.3,0,14.4,0z M13.1,11.8l0.9-0.9c0.1-0.1,0.1-0.4-0.1-0.4L9.2,8.9C9,8.9,8.9,9,8.9,9.2l1.6,4.7c0.1,0.2,0.3,0.2,0.4,0.1l0.9-0.9l1.9,1.9H2.3l1.9-1.9l0.9,0.9c0.1,0.1,0.4,0.1,0.4-0.1l1.6-4.7C7.1,9,7,8.9,6.8,8.9L2,10.5c-0.2,0.1-0.2,0.3-0.1,0.4l0.9,0.9L1,13.7V2.3l1.9,1.9L1.9,5.1C1.8,5.2,1.9,5.4,2,5.5l4.7,1.6C7,7.1,7.1,7,7.1,6.8L5.5,2C5.4,1.9,5.2,1.8,5.1,1.9L4.2,2.9L2.3,1h11.4l-1.9,1.9l-0.9-0.9c-0.1-0.1-0.4-0.1-0.4,0.1L8.9,6.8C8.9,7,9,7.1,9.2,7.1L14,5.5c0.2-0.1,0.2-0.3,0.1-0.4l-0.9-0.9L15,2.3v11.4L13.1,11.8z" />
    </svg>
  );
}

MinimizeIcon.propTypes = {
  classNames: PropTypes.string,
};

export function PauseIcon({ classNames }) {
  return (
    <svg viewBox="0 0 96 96" className={classNames}>
      <rect
        fill="#FFFFFF"
        stroke="none"
        x="23.32"
        y="16.01"
        width="16.95"
        height="62.56"
        rx="2"
        ry="2"
      />
      <rect
        fill="#FFFFFF"
        stroke="none"
        x="55.73"
        y="16.01"
        width="16.95"
        height="62.56"
        rx="2"
        ry="2"
      />
    </svg>
  );
}

PauseIcon.propTypes = {
  classNames: PropTypes.string,
};

export function PlayPauseSmallIcon({ classNames }) {
  return (
    <svg
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      className={classNames}
    >
      <g className="svg-play-pause-small">
        <g className="svg-pause-small">
          <path d="M7.5,15H7c-0.6,0-1-0.4-1-1V6c0-0.6,0.4-1,1-1h0.5c0.6,0,1,0.4,1,1v8C8.5,14.6,8.1,15,7.5,15z" />
          <path d="M13,15h-0.5c-0.6,0-1-0.4-1-1V6c0-0.6,0.4-1,1-1H13c0.6,0,1,0.4,1,1v8C14,14.6,13.6,15,13,15z" />
        </g>
        <g className="svg-play-pause-small-ring-bottom">
          <path d="M10,1c5,0,9,4,9,9s-4,9-9,9s-9-4-9-9S5,1,10,1 M10,0C4.5,0,0,4.5,0,10s4.5,10,10,10s10-4.5,10-10S15.5,0,10,0L10,0z" />
        </g>
        <g className="svg-play-pause-small-ring-top">
          <path d="M10,1c5,0,9,4,9,9s-4,9-9,9s-9-4-9-9S5,1,10,1 M10,0C4.5,0,0,4.5,0,10s4.5,10,10,10s10-4.5,10-10S15.5,0,10,0L10,0z" />
        </g>
        <path
          className="svg-play-small"
          d="M7,6.1v7.8c0,0.9,1,1.4,1.7,0.9l5.8-3.9c0.7-0.4,0.7-1.4,0-1.9L8.7,5.2C8,4.7,7,5.2,7,6.1z"
        />
      </g>
    </svg>
  );
}

PlayPauseSmallIcon.propTypes = {
  classNames: PropTypes.string,
};

export function PlayIcon({ classNames }) {
  return (
    <svg
      className={classNames}
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 16"
    >
      <path
        className={classNames}
        fill="#FFFFFF"
        d="M1.5,2v12c0,1.6,1.8,2.6,3.1,1.7l9-6c1.2-0.8,1.2-2.5,0-3.3l-9-6C3.3-0.5,1.5,0.4,1.5,2z"
      />
    </svg>
  );
}

PlayIcon.propTypes = {
  classNames: PropTypes.string,
};

export function SaveIcon({ classNames }) {
  return (
    <svg
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 16"
      className={classNames}
    >
      <path d="M15,6.5H9.5V1c0-0.6-0.4-1-1-1h-1c-0.6,0-1,0.4-1,1v5.5H1c-0.6,0-1,0.4-1,1v1c0,0.6,0.4,1,1,1h5.5V15c0,0.6,0.4,1,1,1h1c0.6,0,1-0.4,1-1V9.5H15c0.6,0,1-0.4,1-1v-1C16,6.9,15.6,6.5,15,6.5z" />
    </svg>
  );
}

SaveIcon.propTypes = {
  classNames: PropTypes.string,
};

export function SearchIcon({ classNames }) {
  return (
    <svg
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 32 32"
      className={classNames}
    >
      <path d="M31.3,27.7l-7.5-7.5c1.4-2.1,2.2-4.6,2.2-7.3c0-7.2-5.8-13-13-13S0,5.8,0,13s5.8,13,13,13c2.7,0,5.2-0.8,7.3-2.2l7.5,7.5c1,1,2.5,1,3.5,0l0,0C32.2,30.3,32.2,28.7,31.3,27.7z M2.5,13C2.5,7.2,7.2,2.5,13,2.5S23.5,7.2,23.5,13S18.8,23.5,13,23.5S2.5,18.8,2.5,13z" />
    </svg>
  );
}

SearchIcon.propTypes = {
  classNames: PropTypes.string,
};

export function SendIcon({ classNames }) {
  return (
    <svg
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 16"
      className={classNames}
    >
      <polygon points="8,2 0,2 0,16 14,16 14,9 12,10.7 12,14 2,14 2,4 5,4 " />
      <path d="M16,5l-5-4v2c-0.9,0-6,1-7,8c2.4-3.5,6-4,7-4v2L16,5z" />
    </svg>
  );
}

SendIcon.propTypes = {
  classNames: PropTypes.string,
};

export function ShowsIcon({ classNames }) {
  return (
    <svg
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 32 22"
      className={classNames}
    >
      <path d="M28.5,15.5h-25c-0.6,0-1-0.4-1-1v-11c0-0.6,0.4-1,1-1h25c0.6,0,1,0.4,1,1v11C29.5,15.1,29.1,15.5,28.5,15.5z M29.5,0h-27C1.1,0,0,1.1,0,2.5v13C0,16.9,1.1,18,2.5,18h27c1.4,0,2.5-1.1,2.5-2.5v-13C32,1.1,30.9,0,29.5,0z" />
      <path d="M24,20.8L24,20.8c0-0.7-0.6-1.3-1.3-1.3H9.3c-0.7,0-1.3,0.6-1.3,1.2v0C8,21.5,8.6,22,9.3,22h13.5C23.4,22,24,21.5,24,20.8z" />
    </svg>
  );
}

ShowsIcon.propTypes = {
  classNames: PropTypes.string,
};

export function SortIcon({ classNames }) {
  return (
    <svg
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 16"
      className={classNames}
    >
      <g className="svg-sort">
        <path d="M16,3.5c0,0.6-0.4,1-1,1H1c-0.6,0-1-0.4-1-1v-1c0-0.5,0.4-1,1-1h14c0.6,0,1,0.5,1,1V3.5z M11,7.5c0-0.6-0.4-1-1-1H1&#x9;c-0.6,0-1,0.4-1,1v1c0,0.6,0.4,1,1,1h9c0.6,0,1-0.4,1-1V7.5z M6,12.5c0-0.6-0.4-1-1-1H1c-0.6,0-1,0.4-1,1v1c0,0.6,0.4,1,1,1h4&#x9;c0.6,0,1-0.4,1-1V12.5z" />
      </g>
    </svg>
  );
}

SortIcon.propTypes = {
  classNames: PropTypes.string,
};

export function TwitterIcon({ classNames }) {
  return (
    <svg
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      width="32px"
      height="32px"
      viewBox="0 0 32 32"
      className={classNames}
    >
      <path d="M32,6.1c-1.2,0.5-2.4,0.9-3.8,1c1.4-0.8,2.4-2.1,2.9-3.6c-1.3,0.8-2.7,1.3-4.2,1.6C25.7,3.8,24,3,22.1,3c-3.6,0-6.6,2.9-6.6,6.6c0,0.5,0.1,1,0.2,1.5C10.3,10.8,5.4,8.2,2.2,4.2c-0.6,1-0.9,2.1-0.9,3.3c0,2.3,1.2,4.3,2.9,5.5c-1.1,0-2.1-0.3-3-0.8c0,0,0,0.1,0,0.1c0,3.2,2.3,5.8,5.3,6.4c-0.6,0.1-1.1,0.2-1.7,0.2c-0.4,0-0.8,0-1.2-0.1c0.8,2.6,3.3,4.5,6.1,4.6c-2.2,1.8-5.1,2.8-8.2,2.8c-0.5,0-1.1,0-1.6-0.1C2.9,27.9,6.3,29,10,29c12.1,0,18.7-10,18.7-18.7c0-0.3,0-0.6,0-0.8C30,8.6,31.1,7.4,32,6.1z" />
    </svg>
  );
}

TwitterIcon.propTypes = {
  classNames: PropTypes.string,
};

export function UrlIcon({ classNames }) {
  return (
    <svg
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      width="32px"
      height="32px"
      viewBox="0 0 32 32"
      className={classNames}
    >
      <path d="M12.5,8.2l5.7-5.7c3.1-3.1,8.2-3.1,11.3,0s3.1,8.2,0,11.3l-5.7,5.7c-3.1,3.1-8.2,3.1-11.3,0c0,0,0,0,0,0c-0.8-0.8-0.8-2,0-2.8c0.8-0.8,2-0.8,2.8,0l0,0c1.6,1.6,4.1,1.6,5.7,0l5.7-5.7c1.6-1.6,1.6-4.1,0-5.7c-1.6-1.6-4.1-1.6-5.7,0l-3.4,3.4C15.9,8.2,14.2,8,12.5,8.2C12.5,8.2,12.5,8.2,12.5,8.2z M19.6,23.8c-1.7,0.2-3.5,0.1-5.1-0.6l-3.4,3.4c-1.6,1.6-4.1,1.6-5.7,0c-1.6-1.6-1.6-4.1,0-5.7l5.7-5.7c1.6-1.6,4.1-1.6,5.7,0l0,0c0.8,0.8,2,0.8,2.8,0c0.8-0.8,0.8-2,0-2.8c0,0,0,0,0,0c-3.1-3.1-8.2-3.1-11.3,0l-5.7,5.7c-3.1,3.1-3.1,8.2,0,11.3s8.2,3.1,11.3,0L19.6,23.8C19.5,23.8,19.5,23.8,19.6,23.8z" />
    </svg>
  );
}

UrlIcon.propTypes = {
  classNames: PropTypes.string,
};

export function VolumeIcon({ classNames }) {
  return (
    <svg
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 22 16"
      className={classNames}
    >
      <g className="svg-volume">
        <g className="svg-volume-high">
          <path d="M18.1,15.5c-0.1,0-0.3,0-0.4-0.1c-0.2-0.2-0.2-0.5,0-0.7c4-4,4-9.3,0-13.3c-0.2-0.2-0.2-0.5,0-0.7s0.5-0.2,0.7,0&#x9;&#x9;c4.3,4.3,4.3,10.4,0,14.7C18.4,15.5,18.2,15.5,18.1,15.5z" />
        </g>
        <g className="svg-volume-medium">
          <path d="M16.3,13.5c-0.1,0-0.3,0-0.4-0.1c-0.2-0.2-0.2-0.5,0-0.7c1.4-1.4,2.1-3,2.1-4.6s-0.7-3.3-2.1-4.6c-0.2-0.2-0.2-0.5,0-0.7&#x9;&#x9;s0.5-0.2,0.7,0C18.2,4.2,19,6.1,19,8s-0.8,3.8-2.4,5.4C16.5,13.5,16.4,13.5,16.3,13.5z" />
        </g>
        <g className="svg-volume-low">
          <path d="M14.4,11.5c-0.1,0-0.3,0-0.4-0.1c-0.2-0.2-0.2-0.5,0-0.7C14.8,9.9,15.2,9,15.2,8c0-1-0.4-1.9-1.2-2.6&#x9;&#x9;c-0.2-0.2-0.2-0.5,0-0.7s0.5-0.2,0.7,0c1,1,1.5,2.1,1.5,3.4s-0.5,2.4-1.5,3.4C14.7,11.5,14.5,11.5,14.4,11.5z" />
        </g>
        <polygon
          className="svg-volume-speaker"
          points="6,4.3 6,4.3 0,4.9 0,11.1 6,11.7 6,11.7 12,16 12,0 &#x9;"
        />
        <path
          className="svg-volume-mute"
          d="M21.8,10.5L19.3,8l2.5-2.5c0.2-0.2,0.2-0.6,0-0.9l-0.4-0.4c-0.2-0.2-0.6-0.2-0.9,0L18,6.7l-2.5-2.5&#x9;c-0.2-0.2-0.6-0.2-0.9,0l-0.4,0.4c-0.2,0.2-0.2,0.6,0,0.9L16.7,8l-2.5,2.5c-0.2,0.2-0.2,0.6,0,0.9l0.4,0.4c0.2,0.2,0.6,0.2,0.9,0&#x9;L18,9.3l2.5,2.5c0.2,0.2,0.6,0.2,0.9,0l0.4-0.4C22.1,11.1,22.1,10.7,21.8,10.5z"
        />
      </g>
    </svg>
  );
}

VolumeIcon.propTypes = {
  classNames: PropTypes.string,
};
