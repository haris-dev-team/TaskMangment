import {combineReducers, configureStore} from '@reduxjs/toolkit';
import auth_Slice from './slices/auth_Slice';

const reducers = combineReducers({
  auth: auth_Slice,
});

export const store = configureStore({
  reducer: reducers,
});
