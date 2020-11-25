import { createStore,  applyMiddleware } from "redux";
import RootReducer from "./rootReducer";
import { composeWithDevTools } from 'redux-devtools-extension'

const composedEnhancer = composeWithDevTools();
 const store = createStore(RootReducer, composedEnhancer);
export default store;