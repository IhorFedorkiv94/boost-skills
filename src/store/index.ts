import {createStore, compose, applyMiddleware} from "redux";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./rootSaga";
import rootReducer from "./rootReducer";
import {GenericAction} from "./types";

const sagaMiddleware = createSagaMiddleware();

/**
 * Logs all actions and states after they are dispatched.
 */
//eslint-disable-next-line @typescript-eslint/no-explicit-any
const logger = () => (next: any) => (action: GenericAction) => {
  const result = next(action);
  return result;
};

const store = createStore(
  rootReducer,
  compose(
    process.env.NODE_ENV === "development" ? applyMiddleware(sagaMiddleware, logger) : applyMiddleware(sagaMiddleware)
  )
);

sagaMiddleware.run(rootSaga);

export default store;
