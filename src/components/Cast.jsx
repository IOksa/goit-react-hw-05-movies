import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link, Outlet, useParams, useLocation } from 'react-router-dom';
import {BASE_URL, API_KEY} from '../constants/constants';

export const Cast= () => {
  const { movieId } = useParams();
  const [actors, setActors]=useState([]);

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
        setActors(response.data);
        console.log('response.data=', response.data);
      
      })
      .catch((error)=> {
        console.log(error);
      });
    
     
    })
    
    fetchMovieCast();
  }, [movieId])

  return <div>Cast: {movieId}</div>;
};

export default Cast;