import React, { useEffect } from 'react'
import './Page.css'
import { useDispatch, useSelector } from 'react-redux'
import {getWeather, fetchWeather } from '../../createSlice'

function Weather() {

    const dispatch = useDispatch()
    const details = useSelector(getWeather)
    console.log(details,"details")
  
    useEffect(()=>{
        dispatch(fetchWeather(getWeather))
    })
    return (
        <div className='container'>
            <h1>Weather</h1>
            <h2>City:{details.main.name} </h2>
            <h2>Temperature:{details.main.temp}</h2> 
           <h1>{details.main.temp}</h1>
            <h2>City: {details.name}</h2>
                
        </div>
    )
}

export default Weather