import { FRUser, TokenManager } from '@forgerock/javascript-sdk';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { UserState } from './user.type';

const initialState: UserState = {
  userEmail: '',
  firstName: '',
  lastName: '',
  userName: '',
  clientRoles: {},
  isAuthenticated: false,
  isLoading: false,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    updateUser(state, action: PayloadAction<UserState>) {
      const actionPayload = action.payload;

      if (Boolean(actionPayload)) {
        sessionStorage.setItem('user', JSON.stringify(actionPayload));
        return { ...actionPayload };
      }
    },
    clearUser(state) {
      const reAuthenticate = async () => {
        try {
          await TokenManager.getTokens({
            forceRenew: true,
            login: 'redirect',
          });
        } catch (err) {
          console.error('Reauthentication failed!!!', err);
        }
      };

      const logoutUser = async () => {
        try {
          state.isLoading = true;

          await FRUser.logout()
            .then(async () => {
              localStorage.clear();
              sessionStorage.clear();

              await reAuthenticate();
            })
            .catch((error) => {
              throw new Error(error?.message);
            });
        } catch (error) {
          console.error('Not able to log out:', error);
        }
      };

      const isLogoutValid =
        state.isAuthenticated || Boolean(localStorage.getItem(`FR-SDK-${window.REACT_APP_CLIENTID}`));

      if (isLogoutValid) {
        logoutUser();
      }
    },
  },
});

export default userSlice;

export const userActions = userSlice.actions;
