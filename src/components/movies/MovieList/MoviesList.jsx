import { Link, useLocation } from 'react-router-dom';
import css from './MoviesList.module.css';
import { useSelector } from 'react-redux';
import { selectGenres } from '../../../redux/movies/selectors';

const MoviesList = ({ movies }) => {
  const location = useLocation();
  const genres = useSelector(selectGenres);

  return (
    <ul className={css.moviesList}>
      {movies.map((movie) => {
        const genresNames = movie.genre_ids?.map((id) => {
          const genre = genres.find((genre) => genre.id === id);
          return genre ? genre.name : 'Unknown';
        });

        console.log(genresNames);

        return (
          <Link
            state={location}
            key={movie.id}
            to={`/movies/${movie.id}`}
            className={css.movieItem}
          >
            {movie.poster_path ? (
              <img
                className={css.movieImg}
                alt="Poster"
                src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
              />
            ) : (
              <div className={css.imageDiv} alt="Poster">
                X
              </div>
            )}

            <div>
              <h3>{movie.title}</h3>
              <div className={css.shortInfoDiv}>
                <p className={css.genresList}>
                  {genresNames.length > 0
                    ? genresNames.slice(0, 2).concat('Others').join(', ')
                    : 'no genres'}{' '}
                </p>
                <p>{movie.vote_average}</p>
              </div>
            </div>
          </Link>
        );
      })}
    </ul>
  );
};

export default MoviesList;
