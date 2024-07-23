import { SerializedError } from '@reduxjs/toolkit';

export type MeasureState = {
  data: MeasureType[] | undefined;
  loading: boolean;
  error: SerializedError | null;
};

export type MeasureType = {
  measureId: number;
  measureCode: string | null;
  measureName: string | null;
  categoryName: string | null;
  abbriviation: string | null;
  measureYear: string | null;
  weightCategoryId: number;
  correlation: number;
  createdBy: string | null;
  createdOn: string | null;
  updatedBy: string | null;
  updatedOn: string | null;
};

export type FetchMeasureDataParam = { measureYear: number | undefined };
