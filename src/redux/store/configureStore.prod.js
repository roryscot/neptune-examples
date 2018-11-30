
import {createStore, applyMiddleware, compose} from 'redux';
import rootReducer from '../reducers/rootReducer';

import { createLogger } from 'redux-logger'

import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';

import thunkMiddleware from 'redux-thunk'
const loggerMiddleware = createLogger();

export default function configureStore(initialState) {
  return createStore(
    rootReducer,
    initialState,
    applyMiddleware(thunkMiddleware, loggerMiddleware, reduxImmutableStateInvariant())
  );
}