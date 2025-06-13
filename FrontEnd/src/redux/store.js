// src/redux/store.js
import { configureStore } from "@reduxjs/toolkit";
import heroReducer from "./heroSlice";
import testimonialsReducer from './testimonialsSlice';
import tourReducer from './tourSlice';
import advantagesReducer from './advantagesSlice';
import destinationsReducer from './destinationsSlice';

const store = configureStore({
  reducer: {
    hero: heroReducer,
    destinations: destinationsReducer,
    tours: tourReducer,
    advantages: advantagesReducer,
    testimonials: testimonialsReducer
  },
});

export default store;
