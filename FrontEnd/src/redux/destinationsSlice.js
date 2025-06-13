import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  destinations: [
    {
      name: 'JAMMU & KASHMIR',
      price: '₹4999/-',
      image: '\J&K.jpg',
    },
    {
      name: 'HIMACHAL PRADESH',
      price: '₹4999/-',
      image: '\Himachal.jpg',
    },
    {
      name: 'GOA',
      price: '₹4999/-',
      image: '\Goa.jpg',
    },
    {
      name: 'ASSAM',
      price: '₹4999/-',
      image: 'Assam.jpg',
    },
    {
      name: 'MAHARASHTRA',
      price: '₹4999/-',
      image: '\Maharashtra.jpg',
    },
    {
      name: 'KERELA',
      price: '₹4999/-',
      image: '\Kerela.jpg',
    },
  ],
};

const destinationsSlice = createSlice({
  name: 'destinations',
  initialState,
  reducers: {},
});

export const selectDestinations = (state) => state.destinations.destinations;
export default destinationsSlice.reducer;
