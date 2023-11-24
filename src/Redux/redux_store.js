import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import thunk from "redux-thunk";
import converter_reducer from "./converter_reducer";

let reducers = combineReducers({
    converter_reducer: converter_reducer
});

let store = legacy_createStore(reducers, applyMiddleware(thunk));

export default store;