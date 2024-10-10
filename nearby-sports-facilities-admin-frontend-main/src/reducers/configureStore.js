import { combineReducers, configureStore } from '@reduxjs/toolkit';
import AuthSlice from './slices/AuthSLice';
import AlertsSlice from './slices/AlertsSlice';
const store = configureStore({
  reducer: combineReducers({ Auth: AuthSlice, Alerts: AlertsSlice }),
});

export const { dispatch, getState } = store;

export default store;
