const { useParams } = require('react-router-dom');

export const Reviews = () => {
  const { movieId } = useParams();

  // useEffect(() => {
  // HTTP запрос, если нужно
  // }, [])

  return <div>Review: {movieId}</div>;
};

// export default Reviews;
