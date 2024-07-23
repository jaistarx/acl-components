import { SerializedError } from '@reduxjs/toolkit';

export type LookupState = {
  data: {
    actionPayload: LookupItem[];
    lookupTypes: LookupData|undefined;
  
   } | null;
  loading: boolean;
  error: SerializedError | null;
};

export type LookupItem = {
  lookupId: number;
  lookupType: string;
  lookupName: string;
  lookupValue: string | null;
  measureYear : string | number;
  userName: string;
};

export type LookupData = {
  [key: string]: string[];
};

export type LookupRow ={

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
 
 }

export type FetchLookupDataParam = { measureYear: number | undefined };

export type DeleteLookupDataParam = { lookupId: string };

export type SaveLookupDataParam = { lookupItem: LookupItem };
