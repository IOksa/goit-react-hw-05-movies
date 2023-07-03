import axios from 'axios';
import { useEffect, useRef, useState } from 'react';
import { Link, Outlet, useParams, useLocation } from 'react-router-dom';
import {BASE_URL, API_KEY} from '../constants/constants';

const MovieDetails = () => {
  const [movieDetails, setMovieDetails]=useState({});
  const { movieId } = useParams();
  const location = useLocation();
  const backLinkLocationRef = useRef(location.state?.from ?? '/');
  const BASE_URL_POSTER='https://image.tmdb.org/t/p/w500';


  useEffect(() => {
    if (!movieId) {
      return;
    }
    console.log('movieId=', movieId);
    const fetchMovieDetails=(()=>{
      const fetchQuery=`${BASE_URL}3/movie/${movieId}?api_key=${API_KEY}&language=en-US`;
      console.log("fetchQuery=",fetchQuery);
      axios.get(fetchQuery)
      .then((response) => {
        console.log('response=', response);
        setMovieDetails(response.data);
        console.log('response.data=', response.data);
      
      })
      .catch((error)=> {
        console.log(error);
      });
    
     
    })
    
    fetchMovieDetails();
  },[movieId])

  return (
    <>
      <Link to={backLinkLocationRef.current}>Go back</Link>
      <div>
        <img src={BASE_URL_POSTER+movieDetails.poster_path} alt={movieDetails.title} width="400px" />
        <div>
        <p>{movieDetails.title}</p>
        <p>User Score: {Math.round(movieDetails.popularity)}%</p>
        <p>Overview</p>
        <p>{movieDetails.overview}</p>
        <p>Genres</p>
        <ul>
          {/* {movieDetails.genres.map(({ name }) => (
            <li key={name}>
              {name}
            </li>
          ))} */}
        </ul>  
      </div>
      </div>
      <h2>Additional information {movieId}</h2>
      <ul>
        <li>
          <Link to="cast">Cast</Link>
        </li>
        <li>
          <Link to="reviews">Reviews</Link>
        </li>
      </ul>
      <Outlet />
    </>
  );
};

export default MovieDetails;

// {movieDetails.release_date.slice(0,4)}