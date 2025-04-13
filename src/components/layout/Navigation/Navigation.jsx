import css from './Navigation.module.css';
import UserMenu from '../UserMenu/UserMenu';
import AuthNav from '../AuthNav/AuthNav';

const Navigation = () => {
  return (
    <div className={css.navigation}>
      <UserMenu />
      <AuthNav />
    </div>
  );
};

export default Navigation;
