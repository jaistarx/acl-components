import { createAsyncThunk } from '@reduxjs/toolkit';
import axios, { AxiosResponse, CancelTokenSource } from 'axios';

let cancelSource: CancelTokenSource;

export const fetchReportConfig = createAsyncThunk('fetchReportConfig', async () => {
  if (cancelSource) {
    cancelSource.cancel('Operation canceled due to new request.');
  }

  const source = axios.CancelToken.source();
  cancelSource = source;

  const response: AxiosResponse = await axios.get('https://aka.ms/CaptureViewsReportEmbedConfig', {
    cancelToken: source.token,
  });

  return response.data;
});
