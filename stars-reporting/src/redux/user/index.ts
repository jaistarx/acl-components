import userSlice from "./user.slice";

export const userActions = userSlice.actions;

export type { UserState } from "./user.types";

export { fetchUser } from "./user.api";
