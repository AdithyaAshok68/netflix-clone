import React from 'react'
import './Rowpost.css'
import { API_KEY, imageUrl } from '../../constants/constants'
import { useEffect } from 'react'
import { useState } from 'react'
import YouTube from 'react-youtube'
import axios from '../axios'
function Rowpost(props) {
  const [movie, setMovie] = useState([])
  const [urlId, setUrlId]= useState()
  useEffect(() => {
    axios.get(props.url).then(response => {
      console.log(response.data)
      setMovie(response.data.results)
    })
    // .catch(err=>{
    //   alert('Network Error')
    // })

  }, [props.url])
  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };
  const handleMovie = (id) => {
    console.log(id)
      axios.get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then((response)=>{
        console.log(response.data)
        if(response.data.results.length!==0){
          setUrlId(response.data.results[0])
        }else{
          console.log('Array empty')
        }
      })
     
      
  }
  return (
    <div className='row'>
      <h2>{props.title}</h2>
      <div className="posters">
        {movie.map((obj) =>
          <img 
          key={obj.id} 
          onClick={() => handleMovie(obj.id)}
           className={props.isSmall ? 'smallPoster' : 'poster'} src={`${imageUrl + obj.backdrop_path}`} alt="poster" />
        )}

      </div>
     {urlId && <YouTube opts={opts} videoId={urlId.key} />}
    </div>
  )
}

export default Rowpost
