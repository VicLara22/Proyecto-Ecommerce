/* import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "../../redux/reducer/index.js";
import thunk from "redux-thunk";
import { logger } from "redux-logger";

const store = createStore(
  rootReducer,
  compose(applyMiddleware(thunk), applyMiddleware(logger))
);

export default store; */

import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import rootReducer from '../reducer/index'

const store = createStore(
  rootReducer, composeWithDevTools(
    applyMiddleware(
      thunk)))

export default store;