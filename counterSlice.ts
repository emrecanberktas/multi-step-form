import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "counter",
  initialState: {
    page: 1,
    name: "",
    email: "",
    phone: "",
    plan: "",
    subscriptionMethod: "Monhtly",
  },
  reducers: {
    increment: (state) => {
      state.page += 1;
    },
    decrement: (state) => {
      state.page -= 1;
    },
    setName: (state, action) => {
      state.name = action.payload;
    },
    setEmail: (state, action) => {
      state.email = action.payload;
    },
    setPhone: (state, action) => {
      state.phone = action.payload;
    },
    setPlan: (state, action) => {
      state.plan = action.payload;
    },
    setSubscriptionMethod: (state, action) => {
      state.subscriptionMethod = action.payload;
    },
  },
});

export const { increment, decrement, setName, setEmail, setPhone } =
  counterSlice.actions;

export default counterSlice.reducer;
