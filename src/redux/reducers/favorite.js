import { UPDATE_FAVORITE } from '../actions/favorite';
import DEFAULT_STATE from '../defaults/favorite';
import createReducer from './create-reducer';

function updateFavorite(state, { favorite }) {
  const { id, value } = favorite;
  return {
    ...state,
    [id]: value,
  };
}

const handlers = {
  [UPDATE_FAVORITE]: updateFavorite,
};

export default createReducer(DEFAULT_STATE, handlers);
