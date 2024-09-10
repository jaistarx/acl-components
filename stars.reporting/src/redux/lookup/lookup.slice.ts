import { createSlice } from '@reduxjs/toolkit';
import { deleteLookupData, fetchLookupData, saveLookupData } from './lookup.api';
import { LookupData, LookupItem, LookupState } from './lookup.type';
import { getValuesByType, getValuesByTypeWithValue } from '@/utils/common/helper';

const initialState: LookupState = {
  data: null,
  loading: false,
  error: null,
};

const lookupSlice = createSlice({
  name: 'lookup',
  initialState,
  reducers: {
    reset() {
      return {
        ...initialState,
      };
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchLookupData.pending, (state) => {
      state.loading = true;
      state.data = initialState.data;
      state.error = null;
    });
    builder.addCase(fetchLookupData.fulfilled, (state, action) => {
      const excludedLookupValues = ['WeighingCategory'];

      const transformData = (data: LookupItem[]): LookupData => {
        const lookup: LookupData = {};

        data.forEach((item) => {
          const { lookupType, lookupValue } = item;

          if (lookupValue && !excludedLookupValues.includes(lookupType.trim())) {
            const extractedLookupItem = lookup[lookupType.trim()] ? lookup[lookupType.trim()] : [];
            lookup[lookupType.trim()] = [...extractedLookupItem, lookupValue];
          }
        });

        return lookup;
      };

      const actionPayload = action.payload;
      state.data = {
        actionPayload,
        lookupTypes: transformData(actionPayload),
        categoryLookup: getValuesByType(actionPayload, 'MeasureCategory'),
        subcategoryLookup: getValuesByType(actionPayload, 'SubMeasureCategory'),
        reportingRequirementsLookup: getValuesByType(actionPayload, 'ReportingRequirements'),
        measureTypeLookup: getValuesByType(actionPayload, 'MeasureType'),
        domainTypelookup: getValuesByType(actionPayload, 'DomainType'),
        weighingCategoryLookup: getValuesByTypeWithValue(actionPayload, 'WeighingCategory'),
        generalTrendLookup: getValuesByType(actionPayload, 'GeneralTrend'),
      };
      state.loading = false;
      state.error = null;
    });
    builder.addCase(fetchLookupData.rejected, (state, action) => {
      state.loading = false;
      state.data = initialState.data;
      state.error = action.error;
    });
    builder.addCase(deleteLookupData.pending, (state) => {
      state.loading = true;
      state.error = null;
    });

    builder.addCase(deleteLookupData.fulfilled, (state, action) => {
      const lookupIdToDelete = action.meta.arg;

      const newData = state.data ? { ...state.data } : null;

      if (newData) newData.actionPayload = newData.actionPayload.filter((item) => item.lookupId !== lookupIdToDelete);

      state.loading = false;
      state.data = newData;
      state.error = null;
    });

    builder.addCase(deleteLookupData.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error;
    });

    builder.addCase(saveLookupData.pending, (state) => {
      state.loading = true;
      state.error = null;
    });

    builder.addCase(saveLookupData.fulfilled, (state, action) => {
      const newLookupItem = action.payload;
      const newData = state.data ? { ...state.data } : { actionPayload: [], lookupTypes: {} };

      newData.actionPayload.push(newLookupItem);

      state.loading = false;
      state.data = newData;
      state.error = null;
    });

    builder.addCase(saveLookupData.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error;
    });
  },
});

export default lookupSlice;

export const lookupActions = lookupSlice.actions;
