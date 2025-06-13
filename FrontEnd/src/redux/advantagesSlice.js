import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [
    {
      id: 1,
      title: "Save Time",
      description: "No More Switching For Packages Or Plans.",
      icon: "https://cdn-icons-png.flaticon.com/512/2717/2717769.png", // clock icon
    },
    {
      id: 2,
      title: "Save Money",
      description: "Compare, Negotiate, And Choose The Best.",
      icon: "https://cdn-icons-png.flaticon.com/512/484/484662.png", // wallet icon
    },
    {
      id: 3,
      title: "Trusted Network",
      description: "A Trusted Network Of 7000+ Travel Agents",
      icon: "https://cdn-icons-png.flaticon.com/512/2769/2769339.png", // network icon
    },
    {
      id: 4,
      title: "Multiple Options",
      description: "Itineraries & Travel Tips From Trusted Agents",
      icon: "https://cdn-icons-png.flaticon.com/512/3595/3595455.png", // book icon
    },
  ],
};

const advantagesSlice = createSlice({
  name: 'advantages',
  initialState,
  reducers: {},
});

export default advantagesSlice.reducer;
