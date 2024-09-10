import { SerializedError } from '@reduxjs/toolkit';

export type MeasureState = {
  data: MeasureType[] | undefined;
  loading: boolean;
  error: SerializedError | null;
};

export type MeasureType = {
  measureId: number;
  measureCode: string;
  measureName: string;
  categoryName: string;
  weightValue?: string;
  abbriviation: string;
  measureYear: string;
  weightCategoryId: number;
  correlation: number;
  weighingCategoryId: number;
  startDataFrame: string;
  endDataFrame: string;
  weighingCategory?: {
    weighingCategoryId: number;
    categoryName: string;
    weight: number;
    measureYear: string;
  };

  lookupMapping: {
    lookupMappingId: number;
    lookupId: number;
    measureId: number;
    lookupType?: string;
  }[];

  measureThreshold: {
    thresholdId: number;
    measureId: number;
    starRating: string;
    thresholdValue: number;
    OrganizationType: string;
  }[];
};
export type FetchMeasureDataParam = { measureYear: number | undefined };
export type PostMeasureDataParam = {
  measureId: number;
  measureCode: string;
  measureName: string;
  categoryName: string;
  abbriviation: string;
  measureYear: string;
  weightCategoryId: number;
  correlation: number;
  weighingCategoryId: number;
  startDataFrame: string;
  weightValue?: string;
  lookupMapping: LookupMapping[];
  measureThreshold: {
    thresholdId: number;
    measureId: number;
    starRating: string;
    thresholdValue: number;
    OrganizationType: string;
  }[];
};

export type LookupMapping = {
  lookupMappingId: number;
  lookupId: number;
  measureId: number;
  lookupType?: string;
};

export type Threshold = {
  thresholdId: number;
  measureId: number;
  starRating: string;
  thresholdValue: number;
  OrganizationType: string;
};

export type UpdateMeasureDataParam = {
  measureId: number;
  measureCode: string;
  measureName: string;
  categoryName: string;
  abbriviation: string;
  measureYear: string;
  weightCategoryId: number;
  correlation: number;
  weighingCategoryId: number;
  startDataFrame: string;
  endDataFrame: string;
  weightValue?: string;
  lookupMapping: LookupMapping[];
  measureThreshold: {
    thresholdId: number;
    measureId: number;
    starRating: string;
    thresholdValue: number;
    OrganizationType: string;
  }[];
};
