import { createSlice } from '@reduxjs/toolkit';
import { fetchMeasureData } from './measure.api';
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
  },
});

export default measureSlice;

export const measureActions = measureSlice.actions;
