import { NUMERIC, US_LANGUAGE_CODE } from '../../utils';

export const UPDATE_DISPLAYABLE_TIME = 'UPDATE_DISPLAYABLE_TIME';

export function updateDisplayableTime() {
  const date = new Date();
  const displayableTime = date.toLocaleString(US_LANGUAGE_CODE, {
    hour: NUMERIC,
    minute: NUMERIC,
    second: NUMERIC,
    hour12: true,
  });

  return {
    type: UPDATE_DISPLAYABLE_TIME,
    displayableTime,
  };
}
