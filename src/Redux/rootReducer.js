import { applyMiddleware, combineReducers } from "redux";
import { reducer } from "./user/userReducer";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
    userReducer: reducer
},composeWithDevTools(applyMiddleware(thunk)))

export default rootReducer