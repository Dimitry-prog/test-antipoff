import { TUser } from "../../types/userTypes.ts";
import { ActionReducerMapBuilder, createSlice } from "@reduxjs/toolkit";
import { getUser, getUsers } from "../../api/userApi.ts";

type TUserState = {
  user: TUser | null,
  userList: TUser[],
  status: "init" | "loading" | "success" | "error";
  error: string | undefined;
}

const initialState: TUserState = {
  user: null,
  userList: [],
  status: "init",
  error: undefined,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder: ActionReducerMapBuilder<TUserState>) => {
    builder
      .addCase(getUser.pending, (state) => {
        state.status = "loading";
        state.error = undefined;
      })
      .addCase(getUser.fulfilled, (state, action) => {
        state.status = "success";
        state.user = action.payload.data;
      })
      .addCase(getUser.rejected, (state, action) => {
        state.status = "error";
        state.error = action.payload;
      })
      .addCase(getUsers.pending, (state) => {
        state.status = "loading";
        state.error = undefined;
      })
      .addCase(getUsers.fulfilled, (state, action) => {
        state.status = "success";
        state.userList = action.payload.data;
      })
      .addCase(getUsers.rejected, (state, action) => {
        state.status = "error";
        state.error = action.payload;
      })
  },
});

export const { reducer: userReducer } = userSlice;