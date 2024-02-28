import { combineReducers } from 'redux';
import { ClockState } from './defaults/clock';
import { PlayerState } from './defaults/player';
import { ScheduleState } from './defaults/schedule';
import { FavoriteState } from './defaults/favorite';

import clock from './reducers/clock';
import player from './reducers/player';
import schedule from './reducers/schedule';
import favorite from './reducers/favorite';

export interface RootState {
  schedule: ScheduleState;
  clock: ClockState;
  player: PlayerState;
  favorite: FavoriteState;
}

export default combineReducers({
  schedule,
  clock,
  player,
  favorite,
});
