import { SerializedError } from '@reduxjs/toolkit';
import { UploadedFilesData } from '../file';
import { UserState } from '../user';

export type FuntionAppState = {
  data: unknown;
  loading: boolean;
  error: SerializedError | null;
};

export type PostUploadedFileParam = {
  user: UserState;
  file: File;
  fileType: UploadedFilesData['fileType'];
  date: string;
};
