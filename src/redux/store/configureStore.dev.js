import {createStore, applyMiddleware, compose} from 'redux';
import rootReducer from '../reducers/rootReducer';
import initialState from '../initialState';

import { createLogger } from 'redux-logger'

import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';

import thunkMiddleware from 'redux-thunk'
const loggerMiddleware = createLogger();




const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default function configureStore(initialState) {
  return createStore(
    rootReducer,
    initialState,
    composeEnhancers(
        applyMiddleware(thunkMiddleware, loggerMiddleware, reduxImmutableStateInvariant())
    )
  );
}