import axios from 'axios';
import { useEffect, useRef, useState } from 'react';
import { Link, Outlet, useParams, useLocation } from 'react-router-dom';
import {BASE_URL, API_KEY, BASE_URL_POSTER} from '../../constants/constants';
import css from './MovieDetails.module.css';
import image from '../../images/image-not-found.webp';

const MovieDetails = () => {
  const [movieDetails, setMovieDetails]=useState({});
  const { movieId } = useParams();
  const location = useLocation();
  const backLinkLocationRef = useRef(location.state?.from ?? '/');

  useEffect(() => {
    if (!movieId) {
      return;
    }
    
    const fetchMovieDetails = (async ()=>{
      const fetchQuery = `${BASE_URL}3/movie/${movieId}?api_key=${API_KEY}&language=en-US`;
      
      try{
        await axios.get(fetchQuery)
        .then((response) => {
            setMovieDetails(response.data);
        })
      }
      catch (error){
        console.log(error);
      }     
    })
    
    fetchMovieDetails();
  },[movieId])

  return (
    <>
      <Link to={backLinkLocationRef.current} className={css.goBack}>← Go back</Link>
      {movieDetails && <div className={css.wrapper}>
        <img src={movieDetails.poster_path ? BASE_URL_POSTER+movieDetails.poster_path : image} alt={movieDetails.title} className={css.img} />
        <div>
          <p className={css.movieHeader}>{movieDetails.title} ({movieDetails?.release_date?.slice(0,4)})</p>
          <p>Popularity: {Math.round(movieDetails.popularity)}</p>
          <p className={css.movieHeader}>Overview</p>
          <p>{movieDetails.overview}</p>
          <p className={css.movieHeader}>Genres</p>
          <ul className={css.genresList}>
            {movieDetails?.genres?.map(({ name }) => (
              <li key={name} className={css.genresItem}>
                {name}
              </li>
            ))}
          </ul>  
        </div>
      </div>
      }
      <div className={css.wrapperAdInfo}>
        <h2>Additional information</h2>
        <ul>
          <li>
            <Link to="cast">Cast</Link>
          </li>
          <li>
            <Link to="reviews">Reviews</Link>
          </li>
        </ul>
      </div>
    
      <Outlet />
    </>
  );
};

export default MovieDetails;

