import { createAsyncThunk } from "@reduxjs/toolkit";
import { api, handleRequest } from "./api.ts";
import { TAuthData, TAuthResponse } from "../types/authTypes.ts";

export const authUser = createAsyncThunk<TAuthResponse, { authData: TAuthData, endpoint: string }, {
  rejectValue: string
}>(
  'auth/authenticate',
  async ({ authData, endpoint }, { rejectWithValue }) => {
    const request = api.post(endpoint, authData);
    return handleRequest(request, rejectWithValue);
  }
);
