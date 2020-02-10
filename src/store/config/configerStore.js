import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "../reducers/index";
import reduxImmutableStateInvariant from "redux-immutable-state-invariant";
import thunkMiddleware from 'redux-thunk'
import reduxLogger from 'redux-logger'
const configureStore = (initialState) => {
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; 

  return createStore(
    rootReducer,
    initialState,
    composeEnhancers(applyMiddleware(reduxImmutableStateInvariant(), thunkMiddleware, reduxLogger))
  );
}
export default configureStore ;