import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import {BASE_URL, API_KEY} from '../../constants/constants';
import css from './Reviews.module.css';

const Reviews = () => {
  const { movieId } = useParams();
  const [review, setReview]=useState([]);


  useEffect(() => {
    if (!movieId) {
          return;
        }
    
    const fetchMovieReview= (async ()=>{
      const fetchQuery=`${BASE_URL}3/movie/${movieId}/reviews?api_key=${API_KEY}&language=en-US&page=1`;
      try{
        await axios.get(fetchQuery)
        .then((response) => {
          if(response.data.results.length>0){
            setReview(response.data.results);
          }else{
            setReview('We don`t have any reviews for this movie');
          }
        })
      }catch(error){
        console.log(error)
      };
    
     
    })
    
    fetchMovieReview();
  }, [movieId])

  return (
    <div>
      <h3 className={css.title}>Reviews</h3>
      <ul>
        {Array.isArray(review)?
        review.map(rev=>
        <li key={rev.id}>
          <p className={css.author}>{rev.author}: </p>
          <p>{rev.content}</p>
        </li>
        )
        : <p>{review}</p>}
      </ul>
    </div>
  );
};

export default Reviews;
