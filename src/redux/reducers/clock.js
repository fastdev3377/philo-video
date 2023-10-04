import { UPDATE_DISPLAYABLE_TIME } from '../actions/clock';
import DEFAULT_STATE from '../defaults/clock';
import createReducer from './create-reducer';

function updateDisplayableTime(state, { displayableTime }) {
  return {
    ...state,
    displayableTime,
  };
}

const handlers = {
  [UPDATE_DISPLAYABLE_TIME]: updateDisplayableTime,
};

export default createReducer(DEFAULT_STATE, handlers);
