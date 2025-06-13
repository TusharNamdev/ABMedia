import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  list: [
    {
      id: 1,
      name: "Sarah Johnson",
      designation: "Product Manager, Google",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
      message:
        "Text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content..",
    },
    {
      id: 2,
      name: "Emma Watson",
      designation: "UI/UX Designer, Dribbble",
      image: "https://randomuser.me/api/portraits/women/65.jpg",
      message:
        "Text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content..",
    },
    {
      id: 3,
      name: "David Smith",
      designation: "Software Engineer, Amazon",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
      message:
        "Text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content..",
    },
  ],
};

const testimonialsSlice = createSlice({
  name: 'testimonials',
  initialState,
  reducers: {},
});

export default testimonialsSlice.reducer;
