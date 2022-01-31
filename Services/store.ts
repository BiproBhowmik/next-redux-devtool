import { compose, createStore } from "redux";

import rootReducer from "./Reducers/index";
import { composeWithDevTools } from 'redux-devtools-extension'; //npm install --save redux-devtools-extension

const composeEnhancers = compose(
    (typeof window !== 'undefined' && window.devToolsExtension) ? window.devToolsExtension() : f => f);


const store = createStore(rootReducer, composeWithDevTools(
    composeEnhancers
    // applyMiddleware(...middleware),
    // other store enhancers if any
  ));

export default store