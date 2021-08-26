import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import mainReducer from "./mainReducer";
import serviceReducer from './serviceReducer';

const rootReducer = combineReducers({
    mainPage: mainReducer,
    servicePage: serviceReducer
})

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;