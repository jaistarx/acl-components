import { SerializedError } from '@reduxjs/toolkit';

export type LookupState = {
  data: {
    actionPayload: LookupItem[];
    lookupTypes: LookupData | undefined;
    categoryLookup?: {
      id: string;
      value: string;
    }[];
    subcategoryLookup?: {
      id: string;
      value: string;
    }[];
    reportingRequirementsLookup?: {
      id: string;
      value: string;
    }[];
    measureTypeLookup?: {
      id: string;
      value: string;
    }[];
    domainTypelookup?: {
      id: string;
      value: string;
    }[];
    weighingCategoryLookup?: {
      id: string;
      value: string;
    }[];
    generalTrendLookup?: {
      id: string;
      value: string;
    }[];
  } | null;
  loading: boolean;
  error: SerializedError | null;
};

export type LookupItem = {
  lookupId: number;
  lookupType: string;
  lookupName: string;
  userName: string;
  lookupValue: string | null;
  measureYear: string | null;
  createdBy: string | null;
  createdOn: string | null;
  measureDate: string | null;
  updatedBy: string | null;
  updatedOn: string | null;
};

export type LookupData = {
  [key: string]: string[];
};

export type LookupRow = {
  lookupId: number;
  measureDate: string;
  lookupType: string;
  lookupName: string | null;
  lookupValue: string;
  measureYear: string | null;
  createdBy: string | null;
  createdOn: string;
  updatedBy: string | null;
  updatedOn: string;
};

export type FetchLookupDataParam = { measureYear: number | undefined };

export type DeleteLookupDataParam = { lookupId: string };

export type SaveLookupDataParam = { lookupItem: LookupItem };
