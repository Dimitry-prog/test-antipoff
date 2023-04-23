import { ActionReducerMapBuilder, createSlice } from "@reduxjs/toolkit";
import { authUser } from "../../api/authApi.ts";
import { TAuthResponse } from "../../types/authTypes.ts";

type AuthState = {
  authInfo: TAuthResponse;
  status: "init" | "loading" | "success" | "error";
  error: string | undefined;
}
const isToken = localStorage.getItem('token');

const initialState: AuthState = {
  authInfo: {
    id: '',
    token: isToken ? JSON.parse(isToken) : null,
  },
  status: "init",
  error: undefined,
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder: ActionReducerMapBuilder<AuthState>) => {
    builder
      .addCase(authUser.pending, (state) => {
        state.status = "loading";
        state.error = undefined;
      })
      .addCase(authUser.fulfilled, (state, action) => {
        state.status = "success";
        state.authInfo = action.payload;
        localStorage.setItem('token', JSON.stringify(action.payload.token));
      })
      .addCase(authUser.rejected, (state, action) => {
        state.status = "error";
        state.error = action.payload;
      })
  },
});

export const { reducer: authReducer } = authSlice