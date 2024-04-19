import { createSlice } from "@reduxjs/toolkit";
import { UserLogin } from "@/types/user";
import { AppState } from "../store";
import { ConvertUser } from "@/utils/ConvertUser";
export type AccountState = {
  user?: UserLogin;
  loading: boolean;
};

const initialState: AccountState = {
  user: undefined,
  loading: false,
};

export const accountSlice = createSlice({
  name: "account",
  initialState,
  reducers: {
    setUserLogin: (state, action) => {
      console.log(state);
      state.loading = true;
      state.user = ConvertUser(action.payload);
    },
  },
});

export const { setUserLogin } = accountSlice.actions;

export const getUserLogin = (state: AppState) => state.account.user;
export default accountSlice.reducer;
