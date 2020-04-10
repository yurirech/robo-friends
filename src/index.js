import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers } from "redux";
import {searchRobots, requestRobots} from "./reducers";
import {createLogger} from "redux-logger/src";
import thunkMiddleware from 'redux-thunk';
import './index.css';
import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';
import 'tachyons';

//Step 6 -> import Provider, createLogger, thunkMiddleware, combineReducers, createStore and constants from reducers file.
// Then declare store, logger and rootReducer as below
const logger = createLogger();
const rootReducer = combineReducers({ searchRobots, requestRobots});
const store = createStore(rootReducer, applyMiddleware(thunkMiddleware,  logger));

//Step 7 -> wrap App comp with the Provider. Pass down the store props through the provider with store={store} (step 8 app.js file)
ReactDOM.render(<Provider store={store}>
                  <App  />
                </Provider>, document.getElementById('root'));
registerServiceWorker();
