// src/redux/heroSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  title: "Discover Your Next Adventure",
  subtitle:
    "Choose from our curated experiences, customized for every kind of traveler.",
  image:
    "https://source.unsplash.com/1600x900/?travel,girls,beach", // placeholder background
};

const heroSlice = createSlice({
  name: "hero",
  initialState,
  reducers: {
    updateHero(state, action) {
      return { ...state, ...action.payload };
    },
  },
});

export const { updateHero } = heroSlice.actions;
export default heroSlice.reducer;
