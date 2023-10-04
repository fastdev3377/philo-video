export const ADD_SCHEDULE = 'ADD_SCHEDULE';

export function addScheduleData(scheduleData) {
  return {
    type: ADD_SCHEDULE,
    scheduleData,
  };
}
