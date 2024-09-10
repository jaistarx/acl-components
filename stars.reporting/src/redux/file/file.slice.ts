import { createSlice } from '@reduxjs/toolkit';
import { getFileProcessing, getUploadedFiles } from './file.api';
import { FileState } from './file.type';

const initialState: FileState = {
  data: { fileProcessing: [], uploadedFiles: [] },
  loading: false,
  error: null,
};

const fileSlice = createSlice({
  name: 'file',
  initialState,
  reducers: {
    reset() {
      return {
        ...initialState,
      };
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getFileProcessing.pending, (state) => {
      state.loading = true;
      state.data.fileProcessing = { ...initialState.data.fileProcessing };
      state.error = null;
    });
    builder.addCase(getFileProcessing.fulfilled, (state, action) => {
      const actionPayload = action.payload;
      state.loading = false;
      state.data.fileProcessing = actionPayload;
      state.error = null;
    });
    builder.addCase(getFileProcessing.rejected, (state, action) => {
      state.loading = false;
      state.data.fileProcessing = { ...initialState.data.fileProcessing };
      state.error = action.error;
    });
    builder.addCase(getUploadedFiles.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(getUploadedFiles.fulfilled, (state, action) => {
      const actionPayload = action.payload;
      state.loading = false;
      state.data.uploadedFiles = actionPayload;
      state.error = null;
    });
    builder.addCase(getUploadedFiles.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error;
    });
  },
});

export default fileSlice;

export const fileActions = fileSlice.actions;
