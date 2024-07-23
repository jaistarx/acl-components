import { createSlice } from '@reduxjs/toolkit';
import { models } from 'powerbi-client';
import { fetchReportConfig } from './powerbi.api';
import { PowerbiState } from './powerbi.type';

const initialState: PowerbiState = {
  data: {
    type: 'report',
    // TODO: integrate after getting origin report id
    // id: undefined,
    embedUrl: undefined,
    accessToken: undefined,
    tokenType: models.TokenType.Embed,
    settings: {
      panes: {
        filters: {
          expanded: false,
          visible: false,
        },
      },
    },
  },
  loading: false,
  error: null,
};

const powerbiSlice = createSlice({
  name: 'powerbi',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchReportConfig.pending, (state) => {
      state.loading = true;
      state.data = initialState.data;
      state.error = null;
    });
    builder.addCase(fetchReportConfig.fulfilled, (state, action) => {
      const actionPayload = action.payload;
      state.loading = false;
      state.data = {
        ...initialState.data,
        embedUrl: actionPayload.EmbedUrl,
        accessToken: actionPayload.EmbedToken.Token,
      };
      state.error = null;
    });
    builder.addCase(fetchReportConfig.rejected, (state, action) => {
      state.loading = false;
      state.data = initialState.data;
      state.error = action.error;
    });
  },
});

export default powerbiSlice;

export const powerbiActions = powerbiSlice.actions;
