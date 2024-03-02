import React from 'react'
import { useEffect } from 'react'
import { API_KEY , imageUrl} from '../../constants/constants'
import './Banner.css'
import axios from '../axios'
import { useState } from 'react'
function Banner() {
  console.log('Banner component rendered');
  const [movie, setMovie]=useState();
  const getRandomIndexMovie=()=>{
    axios.get(`trending/all/week?api_key=${API_KEY}&language=en-US`).then((response) => {
      const randomIndex=Math.floor(Math.random() * response.data.results.length);
      const randomMovie=response.data.results[randomIndex];
      setMovie(randomMovie);

            console.log(randomMovie);

    });

  }
  useEffect(() => {
    getRandomIndexMovie();
   const intervalId = setInterval(() => {
    getRandomIndexMovie();
  }, 10000);
  console.log('interval is correct');

  return () => clearInterval(intervalId);

    
  }, [])
  
  
  // useEffect(() => {
  //   axios.get(`trending/all/week?api_key=${API_KEY}&language=en-US`).then((response) => {
  //     console.log(response.data.results[0])
  //     setMovie(response.data.results[0])
  //   })
  // }, [])

  return (
    <div
    style={{backgroundImage:`url(${movie? imageUrl+movie.backdrop_path: ""})`}}
      className='banner'>
      <div className='content' >
        <h1 className='title'>{movie ? movie.title || movie.name : ""} </h1>
        <div className='banner_buttons' >
          <button className='button' >Play</button>
          <button className='button' >My list</button>
        </div>
        <h1 className='description'>{movie ? movie.overview : ""}</h1>
      </div>
      <div className="fade_bottom"></div>
    </div>
  )
}

export default Banner