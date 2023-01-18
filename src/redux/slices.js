import { createSlice } from "@reduxjs/toolkit";

const database = createSlice({
  name: "cropInfo",
  initialState: {
    cropInfo: {},
    title: "",
  },
  reducers: {
    setDatabaseToStore: (state, action) => {
      state.cropInfo = action.payload;
    },
    storeTitle: (state, action) => {
      state.title = action.payload;
    },
  },
});

export const databaseReducer = database.reducer;
export const { setDatabaseToStore, storeTitle } = database.actions;
