import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import {BASE_URL, API_KEY} from '../constants/constants';

const Reviews = () => {
  const { movieId } = useParams();
  const [review, setReview]=useState([]);


  useEffect(() => {
    if (!movieId) {
          return;
        }
    

      
    console.log('movieId=', movieId);
    const fetchMovieReview=(()=>{
      const fetchQuery=`${BASE_URL}3/movie/${movieId}/reviews?api_key=${API_KEY}&language=en-US&page=1`;
      console.log("fetchQuery=",fetchQuery);
      axios.get(fetchQuery)
      .then((response) => {
        console.log('response=', response);
        if(response.data.results.length>0){
          setReview(response.data.results);
        }else{
          setReview('We don`t have any reviews for this movie');
          
        }
        
        console.log('response.data.results=', response.data.results);
      
      })
      .catch((error)=> {
        console.log(error);
      });
    
     
    })
    
    fetchMovieReview();
  }, [movieId])

  return (
    <div>
      <ul>
        {Array.isArray(review)?
        review.map(rev=>
        <li key={rev.id}>
          <p>{rev.author}: </p>
          <p>{rev.content}</p>
        </li>
        )
        : <p>{review}</p>}
      </ul>
    </div>
  );
};

export default Reviews;
