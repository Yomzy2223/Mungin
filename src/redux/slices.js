import { createSlice } from "@reduxjs/toolkit";

const database = createSlice({
  name: "cropInfo",
  initialState: {
    selectedCrop: {},
    cropsDetails: {},
    selectedCropDetails: {},
    title: "",
  },
  reducers: {
    storeSelectedCrop: (state, action) => {
      state.selectedCrop = action.payload;
    },
    storeTitle: (state, action) => {
      state.title = action.payload;
    },
    storeCropsDetails: (state, action) => {
      state.cropsDetails = action.payload;
    },
    storeSelectedCropDetails: (state, action) => {
      state.selectedCropDetails = action.payload;
    },
  },
});

export const databaseReducer = database.reducer;
export const {
  storeSelectedCrop,
  storeTitle,
  storeCropsDetails,
  storeSelectedCropDetails,
} = database.actions;
