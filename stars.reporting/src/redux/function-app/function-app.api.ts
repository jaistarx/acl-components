import { createAsyncThunk } from '@reduxjs/toolkit';
import axios, { AxiosResponse, CancelTokenSource } from 'axios';
import { PostUploadedFileParam } from './function-app.type';

let cancelSource: CancelTokenSource;

export const postUploadedFile = createAsyncThunk(
  'postUploadedFile',
  async ({ user, file, fileType, date }: PostUploadedFileParam) => {
    if (cancelSource) {
      cancelSource.cancel('Operation canceled due to new request.');
    }

    const source = axios.CancelToken.source();
    cancelSource = source;

    if (file && date) {
      const formData = new FormData();

      formData.append('file', file);
      formData.append('fileName', file.name);
      formData.append('fileSize', String(file.size));
      formData.append('user', user.userEmail);
      formData.append('fileType', fileType?.trim() ?? '');
      formData.append('fileExtension', file.name.split('.').pop() ?? '');
      formData.append('measureYear', date);

      const response: AxiosResponse = await axios.post(`${window.REACT_APP_FUNCTION_URL}/upload`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      return response.data;
    }
  },
);
