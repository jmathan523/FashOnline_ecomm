import { combineReducers } from "redux";
import userReducer from "./user/user.reducer";
import cartReducer from "./cart/cart.reducer";
import { persistReducer } from "redux-persist";
// using localstorage lib of redux persist
import storage from "redux-persist/lib/storage";

// persist reducers config; Whitelist => reducers to be whitelisted. User reducer will be persisted by firebase
// by default

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["cart"],
};

const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer,
});

export default persistReducer(persistConfig, rootReducer);
