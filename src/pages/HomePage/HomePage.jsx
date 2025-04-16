// import css from './HomePage.module.css';

import { useEffect } from 'react';
import { getGenres, getTrendingMovies } from '../../redux/movies/operations';
import { useDispatch, useSelector } from 'react-redux';
import { selecttrendingMovies } from '../../redux/movies/selectors';
import MoviesList from '../../components/movies/MovieList/MoviesList';

const HomePage = () => {
  const dispatch = useDispatch();
  const trendingMovies = useSelector(selecttrendingMovies);

  useEffect(() => {
    dispatch(getTrendingMovies());
  }, []);

  useEffect(() => {
    dispatch(getGenres());
  }, []);

  return (
    <div>
      <MoviesList movies={trendingMovies} />
    </div>
  );
};

export default HomePage;
