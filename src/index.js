import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import todoApp from './redux/reducers'

import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const store = createStore(todoApp)

const ReactRoot = document.getElementById('reactRoot');

if (ReactRoot) {
    render(
        <Provider store={store}>
            <App />
        </Provider>
        ,
        ReactRoot
    );
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();