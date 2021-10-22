import { createStore } from "redux";
import rootReducer from "./rootReducer";
import {reducer}  from "./user/userReducer";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { applyMiddleware, combineReducers } from "redux";

const store = createStore(reducer,composeWithDevTools(applyMiddleware(thunk)));

export default store;