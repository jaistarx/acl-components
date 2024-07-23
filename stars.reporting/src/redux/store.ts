import { combineReducers, configureStore } from '@reduxjs/toolkit';
import fileSlice from './file/file.slice';
import funtionAppSlice from './function-app/function-app.slice';
import globalSlice from './global/global.slice';
import lookupSlice from './lookup/lookup.slice';
import measureSlice from './measure/measure.slice';
import powerbiSlice from './powerbi/powerbi.slice';
import userSlice from './user/user.slice';

const rootReducer = combineReducers({
  user: userSlice.reducer,
  global: globalSlice.reducer,
  powerbi: powerbiSlice.reducer,
  file: fileSlice.reducer,
  lookup: lookupSlice.reducer,
  measure: measureSlice.reducer,
  functionApp: funtionAppSlice.reducer,
  // FEATURE: add more reducers if needed
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
