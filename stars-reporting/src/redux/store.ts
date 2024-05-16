import { combineReducers, configureStore } from "@reduxjs/toolkit";
import userSlice from "./user/user.slice";

const rootReducer = combineReducers({
  user: userSlice.reducer,
  // FEATURE: add more reducers if needed
});

const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
