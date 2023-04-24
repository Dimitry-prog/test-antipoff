import { createAsyncThunk } from "@reduxjs/toolkit";
import { api, handleRequest } from "./api.ts";
import { TUserResponse, TUsersResponse } from "../types/userTypes.ts";

export const getUser = createAsyncThunk<TUserResponse, number, { rejectValue: string }>(
  'user/getUser',
  async (id, { rejectWithValue }) => {
    const request = api(`/users/${id}`);
    return handleRequest(request, rejectWithValue);
  }
);

export const getUsers = createAsyncThunk<TUsersResponse, void, { rejectValue: string }>(
  'user/getUsers',
  async (_, { rejectWithValue }) => {
    const request = api(`/users`);
    return handleRequest(request, rejectWithValue);
  }
);