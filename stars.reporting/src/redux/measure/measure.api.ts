import { createAsyncThunk } from '@reduxjs/toolkit';
import axios, { AxiosResponse, CancelTokenSource } from 'axios';
import { FetchMeasureDataParam, MeasureType, PostMeasureDataParam, UpdateMeasureDataParam } from './measure.type';

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

export const postMeasureData = createAsyncThunk('postMeasureData', async (data: PostMeasureDataParam) => {
  const response: AxiosResponse<MeasureType> = await axios.post('Measure', data);
  return response.data;
});

export const updateMeasureData = createAsyncThunk('updateMeasureData', async (data: UpdateMeasureDataParam) => {
  const response: AxiosResponse<MeasureType> = await axios.put('Measure', data);
  return response.data;
});
