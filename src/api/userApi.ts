import { createAsyncThunk } from "@reduxjs/toolkit";
import { api, handleRequest } from "./api.ts";
import { TUserResponse, TUsersResponse } from "../types/userTypes.ts";

export const getUser = createAsyncThunk<TUserResponse, string, { rejectValue: string }>(
  'user/getUser',
  async (id, { rejectWithValue }) => {
    const request = api(`/users/${id}`);
    return handleRequest(request, rejectWithValue);
  }
);

export const getUsers = createAsyncThunk<TUsersResponse, number, { rejectValue: string }>(
  'user/getUsers',
  async (page, { rejectWithValue }) => {
    const request = api(`/users?page=${page}&per_page=4`);
    return handleRequest(request, rejectWithValue);
  }
);