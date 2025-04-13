import { NavLink } from 'react-router-dom';
import { BiSolidCameraMovie } from 'react-icons/bi';

const UserMenu = () => {
  return (
    <div>
      <NavLink to="/movies">
        <BiSolidCameraMovie />
        Movies
      </NavLink>
      <NavLink to="/search-movies">Search</NavLink>
      <div>
        <NavLink to="/library">Library</NavLink>
      </div>
    </div>
  );
};

export default UserMenu;
