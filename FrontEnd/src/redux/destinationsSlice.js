// redux/destinationsSlice.js

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchDestinations = createAsyncThunk(
  'destinations/fetchDestinations',
  async () => {
    const res = await axios.get('/api/destinations');
    return res.data;
  }
);

const destinationsSlice = createSlice({
  name: 'destinations',
  initialState: {
    data: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchDestinations.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchDestinations.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchDestinations.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

// ✅ Safe selector to avoid .map crash
export const selectDestinations = (state) =>
  Array.isArray(state.destinations?.data) ? state.destinations.data : [];

export default destinationsSlice.reducer;
