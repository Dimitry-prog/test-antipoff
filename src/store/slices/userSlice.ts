import { TUserCurrent } from "../../types/userTypes.ts";
import { ActionReducerMapBuilder, AnyAction, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getUser, getUsers, updateUser } from "../../api/userApi.ts";

type TUserState = {
  user: TUserCurrent | null,
  userList: TUserCurrent[],
  status: "init" | "loading" | "success" | "error";
  error: string | undefined;
}

const initialState: TUserState = {
  user: null,
  userList: JSON.parse(localStorage.getItem("userList") ?? "[]"),
  status: "init",
  error: undefined,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    toggleLike: (state, action: PayloadAction<{ id: number }>) => {
      const user = state.userList.find(user => user.id === action.payload.id);

      if (!user) return;

      user.isLike = !user.isLike;
      localStorage.setItem("userList", JSON.stringify(state.userList));
    }
  },
  extraReducers: (builder: ActionReducerMapBuilder<TUserState>) => {
    builder
      .addCase(getUser.pending, (state) => {
        state.status = "loading";
        state.error = undefined;
      })
      .addCase(getUser.fulfilled, (state, action) => {
        state.status = "success";
        const { id, avatar, first_name, last_name, email } = action.payload.data;
        const fullName = `${first_name} ${last_name}`;
        state.user = {
          id,
          email,
          fullName,
          avatar,
          isLike: false,
        }
      })
      .addCase(getUsers.pending, (state) => {
        state.status = "loading";
        state.error = undefined;
      })
      .addCase(getUsers.fulfilled, (state, action) => {
        state.status = "success";
        state.userList = action.payload.data.map(user => ({
          id: user.id,
          email: user.email,
          fullName: `${user.first_name} ${user.last_name}`,
          avatar: user.avatar,
          isLike: false,
        }));
        localStorage.setItem("userList", JSON.stringify(state.userList));
      })
      .addCase(updateUser.pending, (state) => {
        state.status = "loading";
        state.error = undefined;
      })
      .addCase(updateUser.fulfilled, (state, action) => {
        state.status = "success";
        const user = state.userList.find(user => user.id === action.payload.id);

        if (!user) return;

        user.avatar = action.payload.avatar;
        localStorage.setItem("userList", JSON.stringify(state.userList));
      })
      .addMatcher(isError, (state, action: PayloadAction<string>) => {
        state.error = action.payload;
        state.status = "error";
      });
  },
});

const isError = (action: AnyAction) => {
  return action.type.endsWith('rejected');
};

export const { reducer: userReducer, actions: userActions } = userSlice;