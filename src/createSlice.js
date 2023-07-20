import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { API_KEY } from "./Constant";

export const fetchWeather = createAsyncThunk(
    "fetchWeather",
    async () => {
        try {
            const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=London&appid=${API_KEY}`)
            const data = await response.json();
            console.log(data);
            return data;
        }
        catch (error) {
            console.log("Error:", error);
            throw error;
        }
       
    } 
)
const initialState = {
    weather: null,
}

export const weatherSlice = createSlice({
    name: 'weather',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchWeather.fulfilled, (state, action) => {
                state.weather = action.payload;
            })
            .addCase(fetchWeather.rejected, (state, action) => {
                console.log("Rejected")
            })
    }
})


export default weatherSlice.reducer;
export const getWeather = (state) => state.weather.weather;