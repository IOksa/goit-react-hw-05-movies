import axios from 'axios';
import { toast } from 'react-toastify';
import { useState, useEffect } from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';
import {BASE_URL, API_KEY} from '../constants/constants';

const MoviesList = () => {
  const [query, setQuery]=useState('');
  const [searchMoviesList, setSearchMoviesList]=useState([]);
  const location = useLocation();
  const { searchQuery } = useParams();

//   useEffect(() => {
//     if (!query) {
//       return;
//     }


//     const fetchSearchMovies=(()=>{
//       const fetchQuery=`${BASE_URL}3/search/movie?api_key=${API_KEY}&query=${query}&include_adult=false&language=en-US&page=1`;
//       console.log("fetchQuery=",fetchQuery);
//       axios.get(fetchQuery)
//       .then((response) => {
//         console.log('response=', response);
//         const res=response.data.results.map(r=>({id: r.id, title: r.title}));
//         console.log('res=', res);
//         setSearchMoviesList([...res]);
       
//       })
//       .catch((error)=> {
//         console.log(error);
//       });
    
     
//     })
    
//     fetchSearchMovies();
//   }, [query])


  const onChangeQuery = searchQuery => {
    if(searchQuery===''){
      toast.error('Empty search input');
      return;
    }

    setQuery(searchQuery);
   
  

  };
  return (
    <>
    <ul>
      {searchMoviesList.map(movie => (

          <li key={movie.id}>
          <Link to={`/movies/${movie.id}`} state={location }>
            {movie.title}
          </Link>
          </li>
          ))}
    </ul>
    </>
    
  );
};

export default MoviesList;

