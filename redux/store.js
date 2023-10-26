"use client";
import { combineReducers, configureStore  } from "@reduxjs/toolkit";
import counterReducer from "./features/counterSlice";


const rootReducer = combineReducers({
  counter: counterReducer,
  // name by which you will get data with useSlelector : slice file name which exports the createSlice() method  
},);

export const store = configureStore({
  reducer: rootReducer,
 });
