import { SerializedError } from '@reduxjs/toolkit';
import { IReportEmbedConfiguration } from 'powerbi-client';

export type PowerbiState = {
  data: IReportEmbedConfiguration;
  loading: boolean;
  error: SerializedError | null;
};
