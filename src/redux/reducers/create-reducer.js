import { has } from 'lodash';

export default function createReducer(initialState, handlers) {
  return function reducer(state = initialState, action) {
    if (has(handlers, action.type)) {
      return handlers[action.type](state, action);
    }
    return state;
  };
}
