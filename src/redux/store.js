import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import { UPDATE_DISPLAYABLE_TIME } from './actions/clock';
import rootReducer from './reducers';

const ignoredActions = [UPDATE_DISPLAYABLE_TIME];

const predicate = (getState, action) => {
  const { type } = action;
  return !ignoredActions.some(ignoredAction => ignoredAction === type);
};

// eslint-disable-next-line
const logger = createLogger({ predicate });

export default function configureStore(initialState = {}, debug = true) {
  const middlewares = [thunk];

  if (debug) {
    middlewares.push(logger);
  }

  const createStoreWithMiddleware = composeWithDevTools(applyMiddleware(...middlewares));

  const store = createStoreWithMiddleware(createStore)(rootReducer, initialState);

  return store;
}
