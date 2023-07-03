import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link, Outlet, useParams, useLocation } from 'react-router-dom';
import {BASE_URL, API_KEY} from '../constants/constants';

export const Cast= () => {
  const { movieId } = useParams();
  const [actors, setActors]=useState(null);
  const BASE_URL_POSTER='https://image.tmdb.org/t/p/w500';

  useEffect(() => {
    if (!movieId) {
      return;
    }
 
    console.log('movieId=', movieId);
    const fetchMovieCast=(()=>{
      const fetchQuery=`${BASE_URL}3/movie/${movieId}/credits?language=en-US&api_key=${API_KEY}`;
      console.log("fetchQuery=",fetchQuery);
      axios.get(fetchQuery)
      .then((response) => {
        console.log('response=', response);
        setActors(response.data.cast);
        console.log('response.data.cast=', response.data.cast);
      
      })
      .catch((error)=> {
        console.log(error);
      });
    
     
    })
    
    fetchMovieCast();
  }, [movieId])

  return (
    <div>
    <p>Cast: {movieId}</p>
    <ul>
      {actors.map((actor) => (
      <li key={actor.id}>
        <img src={BASE_URL_POSTER+actor.profile_path} alt={actor.name} width="100px" height="150px"/>
        <p>{actor.name}</p>
        <p>Character: {actor.character}</p>
      </li>
      ))}
      </ul>
    </div>
  );
};

export default Cast;