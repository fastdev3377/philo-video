import { ADD_SCHEDULE } from '../actions/schedule';
import createReducer from './create-reducer';
import DEFAULT_STATE from '../defaults/schedule';

function addScheduleData(state, { scheduleData }) {
  return {
    ...state,
    scheduleData,
  };
}

const handlers = {
  [ADD_SCHEDULE]: addScheduleData,
};

export default createReducer(DEFAULT_STATE, handlers);
