import {
  appReducer,
  authenticationReducer,
  checklistReducer,
} from '@redux-slice';
import { combineReducers } from '@reduxjs/toolkit';

export const allReducer = combineReducers({
  app: appReducer,
  authentication: authenticationReducer,
  checklist: checklistReducer,
});

export type RootState = ReturnType<typeof allReducer>;
