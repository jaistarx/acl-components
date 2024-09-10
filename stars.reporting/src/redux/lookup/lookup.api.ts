import { createAsyncThunk } from '@reduxjs/toolkit';
import axios, { AxiosResponse, CancelTokenSource } from 'axios';
import { FetchLookupDataParam, LookupItem } from './lookup.type';

let cancelSource: CancelTokenSource;

export const fetchLookupData = createAsyncThunk('fetchLookupData', async ({ measureYear }: FetchLookupDataParam) => {
  if (cancelSource) {
    cancelSource.cancel('Operation canceled due to new request.');
  }

  const source = axios.CancelToken.source();
  cancelSource = source;

  if (measureYear) {
    const response: AxiosResponse = await axios.get(`Lookup/${measureYear}`, {
      cancelToken: source.token,
    });

    return response.data;
  }
});

export const deleteLookupData = createAsyncThunk('deleteLookupData', async (lookupId: number) => {
  if (cancelSource) {
    cancelSource.cancel('Operation canceled due to new request.');
  }

  const source = axios.CancelToken.source();
  cancelSource = source;

  const response: AxiosResponse = await axios.delete(`Lookup/${lookupId}`, {
    cancelToken: source.token,
  });

  return response.data;
});

export const saveLookupData = createAsyncThunk('saveLookupData', async (lookupItem: LookupItem) => {
  if (cancelSource) {
    cancelSource.cancel('Operation canceled due to new request.');
  }

  const source = axios.CancelToken.source();
  cancelSource = source;

  const currentDate = new Date().toISOString();
  const measureYear = lookupItem.measureYear?.toString();

  const lookupData = {
    createdBy: lookupItem.userName,
    createdOn: currentDate,
    updatedBy: '',
    updatedOn: currentDate,
    lookupId: lookupItem.lookupId,
    measureDate: currentDate,
    lookupType: lookupItem.lookupType,
    lookupName: lookupItem.lookupName,
    lookupValue: lookupItem.lookupValue,
    measureYear: measureYear,
  };

  const response: AxiosResponse = await axios.post(`Lookup`, lookupData, {
    cancelToken: source.token,
  });

  return response.data;
});

export const editLookupData = createAsyncThunk('editLookupData', async (lookupItem: LookupItem) => {
  if (cancelSource) {
    cancelSource.cancel('Operation canceled due to new request.');
  }

  const source = axios.CancelToken.source();
  cancelSource = source;

  const response: AxiosResponse = await axios.put(`Lookup`, lookupItem, {
    cancelToken: source.token,
  });

  return response.data;
});
