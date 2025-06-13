import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  list: [
    {
      id: 1,
      title: "GOLDEN TEMPLE TOUR",
      image: "\Golden.jpg",
    },
    {
      id: 2,
      title: "AMAZING KERELA TOUR",
      image: "\Kerela.jpg",
    },
    {
      id: 3,
      title: "KASHMIR HOLIDAY TOUR",
      image: "\J&K.jpg",
    },
    {
      id: 4,
      title: "RAJASTHAN TOUR",
      image: "\Rajasthan.jpg",
    },
    {
      id: 5,
      title: "TRIP TO GOA",
      image: "\Goa.jpg",
    },
    {
      id: 6,
      title: "NAINITAL ESCAPE",
      image: "\Nainital.webp",
    },
  ],
};

const tourSlice = createSlice({
  name: 'tours',
  initialState,
  reducers: {},
});

export default tourSlice.reducer;
