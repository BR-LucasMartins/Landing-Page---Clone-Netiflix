import { Swiper, SwiperSlide } from 'swiper/react';
import { useEffect, useState } from 'react'
import { getMovies } from '../Api';
import ReactPlayer from 'react-player';
import movieTrailer from 'movie-trailer';

import { FaPlay, FaPlus, FaRegThumbsUp } from "react-icons/fa";

//css
import "./Row.css";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/bundle';
import  { Navigation } from 'swiper/modules';

const imageHost = "https://image.tmdb.org/t/p/original/";

function Row({title, path , isLarge}) {

  const [movies , setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl ] = useState("");

  const [slidesPerView, setSlidesPerView ] = useState(12);

  useEffect(() => {

    if(window.innerWidth < 720){
      setSlidesPerView(3)
    }
    
    if (isLarge) {
      setSlidesPerView(4);

      if(window.innerWidth < 720){
        setSlidesPerView(1)
      }
    }

  }, [isLarge]);

  const fetchMovies = async(_path) => {
    try {
      const data = await getMovies(_path);
      console.log(data)
      setMovies(data?.results);

    } catch (error) {
      console.log("fetchMovies error: " , error)
    }
  } 

  useEffect(() => {
    fetchMovies(path);
  }, [path]);

  const handleOnClick = (movie) => {
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      movieTrailer(movie.title || movie.name || movie.original_name || "")
        .then((url) => {
          setTrailerUrl(url);
        })
        .catch((error) => {
          console.log("Error fetching movie trailer: ", error);
        });
    }
  };

  return (
    <div className='row-container'>
      <h2 className='row-header'> {title} </h2>
      <Swiper
       modules={[Navigation]}
        slidesPerView={slidesPerView}
        spaceBetween={10}
        navigation
        className={`row-cards ${isLarge ? "row-cards-large" : "" }`}
  
      >
        {movies?.map((movie) => {
          return(
            <SwiperSlide key={movie.id}>
              {isLarge ? (
                <div className='card-movie-large'>
                    <div className="card-movie-large-header">
                      <img className="card-movie-large-image"
                          onClick={() => handleOnClick(movie)}
                          key={movie.id} 
                          src={`${imageHost}${isLarge ? movie.backdrop_path : movie.poster_path}`} 
                          alt={movie.name} />
                      <h2 className='card-movie-large-title'>{movie.name || movie.title} </h2>
                    </div>
                    <div className="card-movie-large-body">
                      <div className="card-movie-body-title">
                        <h4> {movie.name || movie.title} </h4>
                        <span> {parseFloat(movie.vote_average.toFixed(1))} </span>
                      </div>
                      <div className="card-movie-body-icons">
                        <div className='icon-play' onClick={() => handleOnClick(movie)}>
                          <FaPlay />
                        </div>
                        <div className='icon-plus'>
                            <FaPlus />
                        </div>
                        <div  className='icon-like'>
                          <FaRegThumbsUp/>
                        </div>  
                      </div>
                     
                     <div className="card-movie-body-overview">
                          
                     </div>
      
                    </div>
                </div>
              ) : (
                <div className='card-movie'>
                    <img className={`movie-card ${isLarge && "movie-card-large"}`} 
                    onClick={() => handleOnClick(movie)}
                    key={movie.id} 
                    src={`${imageHost}${isLarge ? movie.backdrop_path : movie.poster_path}`} 
                    alt={movie.name} />
                </div>
              )}
                
            </SwiperSlide> 
          )
        })}

      </Swiper>

       
          {trailerUrl && <ReactPlayer className="video-container"  url={trailerUrl} playing={true} />}
        
    </div>
  )
}

export default Row


