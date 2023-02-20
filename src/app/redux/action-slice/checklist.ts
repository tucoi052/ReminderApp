/* eslint-disable @typescript-eslint/no-explicit-any */
import { SLICE_NAME } from '@config/type';
import { CheckListStateI } from '@model/checklist';
import * as Action from '@redux-action-type/checklist';
import {
  createAction,
  createAsyncThunk,
  createSlice,
  PayloadAction,
} from '@reduxjs/toolkit';

const initialState: CheckListStateI = {
  loading: false,
};
const checklistSlice = createSlice({
  name: SLICE_NAME.CHECKLIST,
  initialState: initialState,
  reducers: {
    reset: () => initialState,
    changeFiled: (
      state,
      { payload }: PayloadAction<{ field: keyof CheckListStateI; value: any }>,
    ) => {
      state[payload.field] = payload.value;
    },
  },
});

const createChecklist = createAction(
  Action.GET,
  (body: any, onSucceeded?: () => void, onFailure?: (msg: string) => void) => ({
    payload: {
      body,
      onSucceeded,
      onFailure,
    },
  }),
);

const getChecklist = createAction(Action.CREATE, () => ({
  payload: {},
}));

export const checklistActions = {
  ...checklistSlice.actions,
  createChecklist,
  getChecklist,
};
export const checklistReducer = checklistSlice.reducer;
