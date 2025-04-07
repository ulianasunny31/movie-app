import { NavLink } from 'react-router-dom';
import css from './Navigation.module.css';
import { BiSolidCameraMovie } from 'react-icons/bi';

const isLoggedIn = false;

const Navigation = () => {
  return (
    <div className={css.navigation}>
      <div>
        <NavLink to="/movies">
          <BiSolidCameraMovie />
          Movies
        </NavLink>
        <NavLink to="/search-movies">Search</NavLink>
        <div>
          {isLoggedIn ? (
            <button>Log out</button>
          ) : (
            <NavLink to="/login">Log in</NavLink>
          )}

          <NavLink to="/library">Library</NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
