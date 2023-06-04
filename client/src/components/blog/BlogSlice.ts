/* eslint-disable simple-import-sort/imports */
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface BlogState {  // 
  list: string[];
}

const initialState: BlogState = {
  list: [],
};

const blogSlice = createSlice({
  name: "blog",
  initialState,
  reducers: {
    setBlogList: (state, action: PayloadAction<string[]>) => {
      state.list = action.payload;
    },
  },
});

export const { setBlogList } = blogSlice.actions;

export default blogSlice.reducer;
