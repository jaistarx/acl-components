import { createSlice } from '@reduxjs/toolkit';
import { postDeleteFile, postUploadedFile } from './function-app.api';
import { FuntionAppState } from './function-app.type';

const initialState: FuntionAppState = {
  data: [],
  loading: false,
  error: null,
};

const funtionAppSlice = createSlice({
  name: 'funtionApp',
  initialState,
  reducers: {
    reset() {
      return {
        ...initialState,
      };
    },
  },
  extraReducers: (builder) => {
    builder.addCase(postUploadedFile.pending, (state) => {
      state.loading = true;
      state.data = initialState.data;
      state.error = null;
    });
    builder.addCase(postUploadedFile.fulfilled, (state, action) => {
      const actionPayload = action.payload;
      state.loading = false;
      state.data = actionPayload;
      state.error = null;
    });
    builder.addCase(postUploadedFile.rejected, (state, action) => {
      state.loading = false;
      state.data = initialState.data;
      state.error = action.error;
    });
    builder.addCase(postDeleteFile.fulfilled, (state, action) => {
      const actionPayload = action.payload;
      state.loading = false;
      state.data = actionPayload;
      state.error = null;
    });
    builder.addCase(postDeleteFile.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error;
    });
  },
});

export default funtionAppSlice;

export const funtionAppActions = funtionAppSlice.actions;
