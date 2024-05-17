import { UserState } from "./user.types";
import { createSlice } from "@reduxjs/toolkit";
import { fetchUser } from "./user.api";

const INITIAL_STATE: UserState = {
  userEmail: "",
  firstName: "",
  lastName: "",
  userName: "",
  loading: false,
  error: "",
};

const userSlice = createSlice({
  name: "user",
  initialState: INITIAL_STATE,
  reducers: {
    updateUser(state: UserState, action: { payload: UserState }) {
      const actionPayload = action.payload;
      if (Boolean(actionPayload)) {
        // state.userEmail = actionPayload.userEmail;
        // state.firstName = actionPayload.firstName;
        // state.lastName = actionPayload.lastName;
        // state.userName = actionPayload.userName;
        return { ...action.payload };
      }
    },
    clearUser(state: UserState) {
      state.userEmail = "";
      state.firstName = "";
      state.lastName = "";
      state.userName = "";
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchUser.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchUser.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
    });
    builder.addCase(fetchUser.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error;
    });
  },
});

export default userSlice;
