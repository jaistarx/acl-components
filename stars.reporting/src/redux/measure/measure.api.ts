import { createAsyncThunk } from '@reduxjs/toolkit';
import axios, { AxiosResponse, CancelTokenSource } from 'axios';
import { FetchMeasureDataParam } from './measure.type';

let cancelSource: CancelTokenSource;

export const fetchMeasureData = createAsyncThunk('fetchMeasureData', async ({ measureYear }: FetchMeasureDataParam) => {
  if (cancelSource) {
    cancelSource.cancel('Operation canceled due to new request.');
  }

  const source = axios.CancelToken.source();
  cancelSource = source;

  if (measureYear) {
    const response: AxiosResponse = await axios.get(`Measure/${measureYear}`, {
      cancelToken: source.token,
    });

    return response.data;
  }
});
