import axios from 'axios';
import { useState, useEffect } from 'react';
import {BASE_URL, API_KEY} from '../constants/constants';
import TrendingMovie from 'components/TrendingMovie';

const Home = () => {
    const [trending, setTrending]=useState([]);

    useEffect(() => {

      const fetchTodayMovies=(()=>{
        const fetchQuery=`${BASE_URL}3/trending/movie/day?language=en-US&api_key=${API_KEY}`;
        console.log("fetchQuery=",fetchQuery);
        axios.get(fetchQuery).then((response) => {
          console.log('response=', response);
          const res=response.data.results.map(r=>({id: r.id, title: r.title}));
          console.log('res=', res);
          setTrending([...res]);
         
        })
        .catch((error)=> {
          console.log(error);
        });
      
       
      })
      
      fetchTodayMovies();
    }, []);
  

    return (
      <div>
        <p>Trending today</p>
        <ul>
           {trending.map(trend => (
                <TrendingMovie key={trend.id} title={trend.title} />
            ))}
        </ul>
      </div>
    );
  };
  
  export default Home;
