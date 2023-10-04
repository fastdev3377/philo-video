import { AnyAction } from 'redux';
import { ThunkDispatch } from 'redux-thunk';

import { RootState } from '../redux/reducers';

export type AppDispatch = ThunkDispatch<RootState, unknown, AnyAction>;
