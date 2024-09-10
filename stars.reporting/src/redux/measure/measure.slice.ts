import { createSlice } from '@reduxjs/toolkit';
import { fetchMeasureData, postMeasureData, updateMeasureData } from './measure.api';
import { MeasureState } from './measure.type';

const initialState: MeasureState = {
  data: [],
  loading: false,
  error: null,
};

const measureSlice = createSlice({
  name: 'measure',
  initialState,
  reducers: {
    reset() {
      return {
        ...initialState,
      };
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchMeasureData.pending, (state) => {
      state.loading = true;
      state.data = initialState.data;
      state.error = null;
    });
    builder.addCase(fetchMeasureData.fulfilled, (state, action) => {
      const actionPayload = action.payload;
      state.loading = false;
      state.data = actionPayload;
      state.error = null;
    });
    builder.addCase(fetchMeasureData.rejected, (state, action) => {
      state.loading = false;
      state.data = initialState.data;
      state.error = action.error;
    });
    builder.addCase(postMeasureData.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(postMeasureData.fulfilled, (state, action) => {
      state.loading = false;

      if (!state.data) {
        state.data = [];
      }

      state.data.push(action.payload);
      state.error = null;
    });
    builder.addCase(postMeasureData.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error;
    });
  
    builder.addCase(updateMeasureData.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(updateMeasureData.fulfilled, (state, action) => {
      state.loading = false;

      if (!state.data) {
        state.data = [];
      }

      state.data.push(action.payload);
      state.error = null;
    });
    builder.addCase(updateMeasureData.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error;
    });

  },
});

export default measureSlice;

export const measureActions = measureSlice.actions;
