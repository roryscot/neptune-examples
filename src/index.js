import React from 'react'
import { render } from 'react-dom'

import { Provider } from 'react-redux'
// import { createStore, applyMiddleware } from 'redux'
// import rootReducer from './redux/reducers/rootReducer'

import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

// import thunkMiddleware from 'redux-thunk'
// import { createLogger } from 'redux-logger'

import configureStore from 'redux/store/configureStore';

// let store = configureStore();


// import 'bootstrap/dist/css/bootstrap.css'
// import './styles.css'


// const loggerMiddleware = createLogger();

// const store = createStore(
//     rootReducer,
//     applyMiddleware(
//         thunkMiddleware,
//         loggerMiddleware
//       )
//     )

let store = configureStore();


const ReactRoot = document.getElementById('reactRoot');

if (ReactRoot) {
    render(
        (
            <Provider store={store}>
                <App />
            </Provider>
        ),
        ReactRoot
    );
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();