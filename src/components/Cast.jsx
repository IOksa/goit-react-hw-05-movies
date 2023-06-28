const { useParams } = require('react-router-dom');

const Cast= () => {
  const { movieId } = useParams();

  // useEffect(() => {
  // HTTP запрос, если нужно
  // }, [])

  return <div>Cast: {movieId}</div>;
};

export default Cast;