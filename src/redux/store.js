import { createStore, applyMiddleware } from "redux";
import reducer from "./rootReducer";
import logger from "redux-logger";
import { persistStore } from "redux-persist";

const middlewares = [logger];

export const store = createStore(reducer, applyMiddleware(...middlewares));

export const persistor = persistStore(store);
