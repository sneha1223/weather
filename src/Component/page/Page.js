// // import React, { useEffect } from 'react'
// // import { useDispatch, useSelector } from 'react-redux'
// // import { fetchWeather, getWeather } from '../../createSlice'

// // function Page() {
// //     const dispatch = useDispatch()
// //     const details = useSelector(getWeather)
// //     console.log("details", details)
// //     useEffect(() => {
// //         dispatch(fetchWeather())
// //     }, [dispatch])

// //     //    const weather = useSelector(getWeather)
// //     //    console.log(weather)



// //     return (
// //         // <div>
// //         //     {details?.map((ele) => (
// //         //         <div key={ele.id}>
// //         //             <h2>{ele?.name}</h2>
// //         //         </div>

// //         //     ))}
// //         // </div>
// //         <div>
// //             {details?.map((ele)=>{
// //                 return (
// //                     <div>
// //                         <h2>{ele.name} </h2>
// //                     </div>
// //                 )
// //             })}
// //         </div>
// //     )
// // }

// // export default Page


// import React, { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { fetchWeather, getWeather } from '../../createSlice';
// import { useState } from 'react';
// import './Page.css'

// function Page() {

//     const dispatch = useDispatch();
//     const details = useSelector(getWeather);

//     console.log("details", details);

//     const [data, setData] = useState({
//         name: 'London',
//         celcies: 10,
//         speed: 2,
//         humidity: 10
//     })

//     useEffect(() => {
//         //    setData({...data, name:details.weather.main.name,celcies:details.weather.main.temp,speed:details.weather.wind.speed,humidity:details.weather.main.humidity}) 
//         //    console.log(setData,"setdata") 
//         dispatch(fetchWeather());
//         console.log(dispatch,"dis")
//     }, [dispatch]);

//     if (!details) {
//         return <div>Loading...</div>;
//     }


//     return (

//                 // <div className='container'>
//                 //     <div className='weather'>
//                 //         <div className='search'>
//                 //             <input type='text' placeholder='Enter City Name' />
//                 //             <button><img src='/images/search.png' alt='' /> </button>
//                 //         </div>
//                 //         <div className='winfo'>
//                 //             <img src='/images/weather.png' alt='' />
//                 //             {/* {Array.isArray(details) ? (
//                 //             details?.map((ele)=>{
//                 //                 return (
//                 //                     <div key={ele.id}> */}
                                    
//                 //                         <h2>City: {details.name}</h2>
//                 //                         <h2>City: {main.name}</h2>
//                 //                         <div className='details'>
//                 //                 <div className='col'>
//                 //                     <img src='/images/humidity.png' alt='' />
//                 //                     <div className='humidity'>
//                 //                         <p>  {details.main.humidity}</p>
//                 //                         <p>Humidity</p>
//                 //                     </div>

//                 //                 </div>
//                 //                 <div className='col'>
//                 //                     <img src='/images/wind.png' alt='' />
//                 //                     <div className='wind'>
//                 //                         <p> {details.wind.speed}</p>
//                 //                         <p>Wind</p>
//                 //                     </div>

//                 //                 </div>


//                 //             </div> 

//                 //                         </div>
//                                 {/* )
//                             }) ) : (
//                                 <h2>hcudhuh</h2>
//                             )} */}
                        

// {/* 
//          <h3>Temperature: {details.main.temp}</h3>
//                                 <p>Description: {details.weather[0].description}</p>
//             //                     <p>Wind Speed: {details.wind.speed}</p> */}
//             //             </div>
//             //         </div>

              
    
//             //     );


//             // }
            
//             // export default Page;

//         // <div className='container'>
//         //     <div className='weather'>
//         //         <div className='search'>
//         //             <input type='text' placeholder='Enter City Name' />
//         //             <button><img src='/images/search.png' alt='' /> </button>
//         //         </div>
//         //         <div className='winfo'>
//         //             <img src='/images/weather.png' alt='' />
//         //             {Array.isArray(details) ? (
//         //                 details.map((ele) => (
//         //                     <div key={ele.id}>
//         //                         <h1>{ele.main.temp}</h1>
//         //                         <h2>City: {ele?.name}</h2>

//         //                         <p>Description: {ele?.weather[0].description}</p>
//         //                         <p>Wind Speed: {ele?.wind.speed}</p>
//         //                         {/* Other details */}
//         //                     </div>
//         //                 ))
//         //             ) : (
//         //                 <div>No weather details available.</div>
//         //             )}
//         //         </div>
//         //     </div>
//         // </div>




//     //     <div>
//     //     <h2>City: {details.name}</h2>
//     //     <h3>Temperature: {details.main.temp}</h3>
//     //     <p>Description: {details.weather[0].description}</p>
//     //     <p>Wind Speed: {details.wind.speed}</p>
//     //   </div>