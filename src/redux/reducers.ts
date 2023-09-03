import { combineReducers } from '@reduxjs/toolkit';
import tokenReducer from './tokens/reducer';
import Auth from './auth';
import loadingSlice from './_loading';
import Language from './language';

import { DarkMode } from './DarkMode';
import User from './user';

const combinedReducer = combineReducers({
  _loading: loadingSlice.reducer,
  tokens: tokenReducer,
  [Auth.slice.name]: Auth.slice.reducer,
  [User.slice.name]: User.slice.reducer,
  [Language.slice.name]: Language.slice.reducer,
  [DarkMode.slice.name]: DarkMode.slice.reducer,
});

export default combinedReducer;
