import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../counterSlice";

interface counterState {
  page: number;
  name: string;
  email: string;
  phone: string;
  plan: string;
  subscriptionMethod: "Yearly" | "Monhtly";
  OnlineService: boolean;
  LargerStore: boolean;
  CustomProfile: boolean;
}

const initialState: counterState = {
  page: 1,
  name: "",
  email: "",
  phone: "",
  plan: "",
  subscriptionMethod: "Monhtly",
  OnlineService: false,
  LargerStore: false,
  CustomProfile: false,
};

export default configureStore({
  reducer: {
    counter: counterReducer,
  },
});
