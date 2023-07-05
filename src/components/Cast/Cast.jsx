import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {BASE_URL, API_KEY, BASE_URL_PROFILE} from '../../constants/constants';
import css from './Cast.module.css';
import image from '../../images/image-not-found.webp';

const Cast= () => {
  const { movieId } = useParams();
  const [actors, setActors]=useState([]);


  useEffect(() => {
    if (!movieId) {
      return;
    }
 
    const fetchMovieCast=(async ()=>{
      const fetchQuery=`${BASE_URL}3/movie/${movieId}/credits?language=en-US&api_key=${API_KEY}`;
     try{
        await axios.get(fetchQuery)
        .then((response) => {
          setActors(response.data.cast);
        })
      }catch(error) {
        console.log(error);
      };
    
     
    })
    
    fetchMovieCast();
  }, [movieId]);

  return (
 
      <div>
        <h3 className={css.title}>Cast</h3>
        <ul className={css.actorsList}>
          {actors && actors.map((actor) => (
          <li key={actor.id} className={css.actorsItem}>
            <img src={actor.profile_path ? BASE_URL_PROFILE+actor.profile_path : image} alt={actor.name} className={css.img} />
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