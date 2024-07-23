import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { GlobalState } from './global.type';

const initialState: GlobalState = {
  showBackdrop: false,
  showSidemenu: Boolean(sessionStorage.getItem('selectedClient')),
  selectedClient: sessionStorage.getItem('selectedClient') ?? '',
};

const globalSlice = createSlice({
  name: 'global',
  initialState,
  reducers: {
    update(state, action: PayloadAction<Partial<GlobalState>>) {
      const actionPayload = action.payload;

      return {
        ...state,
        ...actionPayload,
      };
    },
    reset() {
      return {
        ...initialState,
      };
    },
  },
});

export default globalSlice;

export const globalActions = globalSlice.actions;
