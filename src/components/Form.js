import { useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SearchMovieForm = ({ onSubmit })=> {
  const [query, setQuery] = useState('');

  const handleNameChange = event => {
    setQuery(event.target.value.toLowerCase());
  };

  const handleSubmit = event => {
    event.preventDefault();

    if (query.trim() === '') {
      toast.error('Empty input');
      return;
    }

    onSubmit(query);
    setQuery('');
  };

  return (
    <form onSubmit={handleSubmit} >
      <input
        type="text"
        name="query"
        value={query}
        onChange={handleNameChange}
      />
      <button type="submit">        
       Search
      </button>
    </form>
  );
}

export default SearchMovieForm;