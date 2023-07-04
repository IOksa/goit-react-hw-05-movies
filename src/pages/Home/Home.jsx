import axios from 'axios';
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {BASE_URL, API_KEY} from '../../constants/constants';
import css from './Home.module.css';


const Home = () => {
    const [trendingMovies, setTrendingMovies]=useState([]);
    const location = useLocation();

    useEffect(() => {

      const fetchTodayMovies=(async ()=>{
        const fetchQuery=`${BASE_URL}3/trending/movie/day?api_key=${API_KEY}&language=en-US`;
        console.log("fetchQuery=",fetchQuery);
        try{
          await axios.get(fetchQuery)
          .then((response) => {
          console.log('response=', response);
          const res=response.data.results.map(r=>({id: r.id, title: r.title}));
          console.log('res=', res);
          setTrendingMovies([...res]);
         
          })
        
        }catch (error) {
          console.log(error);
        }
      
       
      })
      
      fetchTodayMovies();
    }, []);
  

    return (
      <div>
        <p className={css.title}>Trending today</p>
        <ul>
           {trendingMovies.map(trend => (

                <li key={trend.id}>
                <Link to={`/movies/${trend.id}`} state={location} className={css.movieLink} >
                  {trend.title}
                </Link>
                </li>
                ))}
        </ul>
      </div>
    );
  };
  
  export default Home;

   