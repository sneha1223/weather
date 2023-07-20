import { configureStore } from "@reduxjs/toolkit";
import weatherReducer from './createSlice'


export default configureStore({
    reducer: {
        weather: weatherReducer,
    },
})