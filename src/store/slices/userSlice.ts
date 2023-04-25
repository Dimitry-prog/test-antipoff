import { TUserCurrent } from "../../types/userTypes.ts";
import { ActionReducerMapBuilder, createSlice, PayloadAction } from "@reduxjs/toolkit";
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
      state.userList = state.userList.map(user => {
        if (user.id === action.payload.id) {
          user.isLike = !user.isLike;
        }
        return user;
      });
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
        state.userList = action.payload.data.map(user => ({
          id: user.id,
          email: user.email,
          fullName: `${user.first_name} ${user.last_name}`,
          avatar: user.avatar,
          isLike: false,
        }));
        localStorage.setItem("userList", JSON.stringify(state.userList));
      })
      .addCase(getUsers.rejected, (state, action) => {
        state.status = "error";
        state.error = action.payload;
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
      .addCase(updateUser.rejected, (state, action) => {
        state.status = "error";
        state.error = action.payload;
      })
  },
});

export const { reducer: userReducer, actions: userActions } = userSlice;