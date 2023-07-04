import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {BASE_URL, API_KEY, BASE_URL_POSTER} from '../../constants/constants';
import css from './Cast.module.css';

const Cast= () => {
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
        setActors(response.data.cast);
        console.log('response.data.cast=', response.data.cast);
      
      })
      .catch((error)=> {
        console.log(error);
      });
    
     
    })
    
    fetchMovieCast();
  }, [movieId]);

  return (
 
      <div>
        <h3 className={css.title}>Cast</h3>
        <ul className={css.actorsList}>
          {actors.map((actor) => (
          <li key={actor.id} className={css.actorsItem}>
            <img src={BASE_URL_POSTER+actor.profile_path} alt={actor.name} width="100px" height="150px"/>
            <div>
            <p>{actor.name}</p>
            <p>Character: {actor.character}</p>
            </div>
          </li>
          ))}
          </ul>
      </div>
    
  );
};

export default Cast;