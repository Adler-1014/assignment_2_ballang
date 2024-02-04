import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";

export const profileSlice = createSlice({
  name: "profile",
  initialState: {
    nickname: `guest_${nanoid(5)}`,
  },
  reducers: {
    updateNickname: (state, action) => {
      state.nickname = action.payload;
    },
  },
});

export const { updateNickname } = profileSlice.actions;
export const profileReducer = profileSlice.reducer;
