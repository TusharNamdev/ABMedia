import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchTours = createAsyncThunk(
  'tours/fetchTours',
  async () => {
    const res = await axios.get('/api/packages');
    console.log("🔥 API Response:", res.data); // Add this
    return res.data;
  }
);


const tourSlice = createSlice({
  name: 'tours',
  initialState: {
    data: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTours.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchTours.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchTours.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const selectTours = (state) => state.tours?.data || [];
export default tourSlice.reducer;
