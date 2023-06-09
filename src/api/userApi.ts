import { createAsyncThunk } from "@reduxjs/toolkit";
import { api, handleRequest } from "./api.ts";
import { TUserResponse, TUsersResponse, TUserUpdateData, TUserUpdateResponse } from "../types/userTypes.ts";
import { TOTAL_USERS } from "../utils/constants.ts";

export const getUser = createAsyncThunk<TUserResponse, string, { rejectValue: string }>(
  'user/getUser',
  async (id, { rejectWithValue }) => {
    const request = api(`/users/${id}`);
    return handleRequest(request, rejectWithValue);
  }
);

export const getUsers = createAsyncThunk<TUsersResponse, void, { rejectValue: string }>(
  'user/getUsers',
  async (_, { rejectWithValue }) => {
    const request = api(`/users?per_page=${TOTAL_USERS}`);
    return handleRequest(request, rejectWithValue);
  }
);

export const updateUser = createAsyncThunk<TUserUpdateResponse, TUserUpdateData, { rejectValue: string }>(
  'user/updateUser',
  async (data, { rejectWithValue }) => {
    const request = api.patch(`/users/${data.id}`, data);
    return handleRequest(request, rejectWithValue);
  }
)