import { combineReducers } from 'redux';
import { ClockState } from './defaults/clock';
import { PlayerState } from './defaults/player';
import { ScheduleState } from './defaults/schedule';

import clock from './reducers/clock';
import player from './reducers/player';
import schedule from './reducers/schedule';

export interface RootState {
  schedule: ScheduleState;
  clock: ClockState;
  player: PlayerState;
}

export default combineReducers({
  schedule,
  clock,
  player,
});
