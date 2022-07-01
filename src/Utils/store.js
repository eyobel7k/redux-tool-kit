import {configureStore } from "@reduxjs/toolkit";
import appReducer from "./appSlice";
import commentReducer from './commentSlice.js';

const store = configureStore({
  reducer:{
    app:appReducer,
    comments:commentReducer,
  },
});
export default store;
