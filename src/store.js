import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
// import { createWrapper } from 'next-redux-wrapper';
import rootReducer from "./redux/reducers/rootReducer";

// initial states here
const initalState = {};

// middleware
const middleware = [thunk];

// creating store
export const store = createStore(rootReducer, initalState, composeWithDevTools(applyMiddleware(...middleware)));

// assigning store to next wrapper
