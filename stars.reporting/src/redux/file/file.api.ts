import { createAsyncThunk } from '@reduxjs/toolkit';
import axios, { AxiosResponse, CancelTokenSource } from 'axios';
import { GetFileProcessingParam, GetUploadedFilesParam } from './file.type';

let cancelSource: CancelTokenSource;

export const getFileProcessing = createAsyncThunk(
  'getFileProcessing',
  async ({ measureDate }: GetFileProcessingParam) => {
    if (cancelSource) {
      cancelSource.cancel('Operation canceled due to new request.');
    }

    const source = axios.CancelToken.source();
    cancelSource = source;

    if (measureDate) {
      const response: AxiosResponse = await axios.get(`FileProcessing/${measureDate}`, {
        cancelToken: source.token,
      });

      return response.data;
    }
  },
);

export const getUploadedFiles = createAsyncThunk('getUploadedFiles', async ({ measureDate }: GetUploadedFilesParam) => {
  if (cancelSource) {
    cancelSource.cancel('Operation canceled due to new request.');
  }

  const source = axios.CancelToken.source();
  cancelSource = source;

  if (measureDate) {
    const response: AxiosResponse = await axios.get(`UploadedFiles/${measureDate}`, {
      cancelToken: source.token,
    });

    return response.data;
  }
});
