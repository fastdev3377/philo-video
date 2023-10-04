export const SECOND = 1000;
const MS_PER_MINUTE = 60 * SECOND;

export const US_LANGUAGE_CODE = 'en-US';
export const NUMERIC = 'numeric';

export const calculateLiveMarkerPosition = () => {
  const today = new Date();
  const now = today.getTime();
  const startTime = today.setHours(0, 0, 0, 0);
  const endTime = today.setHours(24, 0, 0, 0);
  const diff = endTime - startTime;
  const timeFromBeginning = now - startTime;

  return timeFromBeginning / diff;
};

// creates date objects from last midnight to next midnight
export const generateGuideTimes = () => {
  const today = new Date();

  let hoursToday = [];

  for (let i = 0; i < 24; i += 1) {
    hoursToday = [...hoursToday, new Date(today.setHours(i, 0, 0, 0))];
  }

  return hoursToday;
};

export const formatHour = date => {
  const formattedHour = date.toLocaleString(US_LANGUAGE_CODE, {
    hour: NUMERIC,
    hour12: true,
  });

  return formattedHour;
};

export const createScheduleData = videos => {
  let startTime = 0;
  const schedule = [];
  let videoIndex = 0;

  while (startTime < 24 * 60 * 60) {
    const video = videos[videoIndex % videos.length];
    const endTime = startTime + video.duration;

    const today = new Date();
    const timezoneOffset = today.getTimezoneOffset();
    const timezoneOffsetMS = timezoneOffset * MS_PER_MINUTE;

    today.setHours(0, 0, 0, 0);
    const startTimestamp = new Date(today.setSeconds(startTime) - timezoneOffsetMS).toJSON();

    today.setHours(0, 0, 0, 0);
    const endTimestamp = new Date(today.setSeconds(endTime) - timezoneOffsetMS).toJSON();

    schedule.push({
      startTime: startTimestamp.replace('Z', ''),
      endTime: endTimestamp.replace('Z', ''),
      video,
    });

    startTime = endTime;
    videoIndex += 1;
  }

  return schedule;
};
