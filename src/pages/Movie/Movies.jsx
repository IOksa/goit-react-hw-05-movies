import axios from 'axios';
import { useState, useEffect } from 'react';
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import {BASE_URL, API_KEY} from '../../constants/constants';
import css from './Movie.module.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Movies = () => {
 
  const [searchMoviesList, setSearchMoviesList]=useState([]);
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();
  const queryString = searchParams.get("query") ?? '';


  const handleSubmit = event => {
    event.preventDefault();
    const form = event.currentTarget;
    const inputValue=form.elements.query.value.toLowerCase().trim();
    if (inputValue === ''){
      setSearchParams({});
      return;
    }
    setSearchParams({ query: inputValue });
    form.reset();
  };


  useEffect(() => {
    if (!queryString) {
      return;
    }

    const fetchSearchMovies= (async ()=>{
      const fetchQuery=`${BASE_URL}3/search/movie?api_key=${API_KEY}&query=${queryString}&include_adult=false&language=en-US&page=1`;
     
      try{
        await axios.get(fetchQuery)
        .then((response) => {
          console.log("response=",response);
          const res=response.data.results;
          if(res.length>0){
            res.map(r=>({id: r.id, title: r.title}));
            setSearchMoviesList([...res]);
          }
          else{
           toast.error("Sorry, we don`t have such films!", {autoClose: 3000, theme: "colored",});
          }
         
         
        })
      }catch(error) {
        console.log(error);
      }
    })
    
    fetchSearchMovies();
  }, [queryString])


  
  return (
    <>
    <form onSubmit={handleSubmit} className={css.SearchForm}>
      <input
        type="text"
        name="query"
        defaultValue={queryString}
        autoFocus
        placeholder="Search movies..."
        className={css.SearchFormInput}
      />
      <button type="submit" className={css.SearchFormButton}>        
       Search
      </button>
    </form>
    <ToastContainer />

    <ul>
      {searchMoviesList?.map(movie => (
          <li key={movie.id}>
            <Link to={`${movie.id}`} state={{from:location}} className={css.movieLink}>
              {movie.title}
            </Link>
          </li>
          ))}
    </ul>

    </>
    
  );
};

export default Movies;

