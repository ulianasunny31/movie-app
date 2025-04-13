import { useDispatch, useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../../redux/auth/selectors';
import { NavLink } from 'react-router-dom';
import { logoutUser } from '../../../redux/auth/operations';

const AuthNav = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const dispatch = useDispatch();

  function handleLogout() {
    console.log('clikc');

    dispatch(logoutUser());
  }

  return (
    <div>
      {isLoggedIn ? (
        <button onClick={() => handleLogout()}>Log out</button>
      ) : (
        <NavLink to="/login">Log in</NavLink>
      )}
    </div>
  );
};

export default AuthNav;
