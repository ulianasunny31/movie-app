import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navigation from './components/layout/Navigation/Navigation';
import { Layout } from './components/layout/Layout';
import { lazy, useEffect } from 'react';
import NotFound from './components/layout/NotFound';
import PrivateRoute from './components/PrivateRoute';
import RestrictedRoute from './components/RestrictedRoute';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsRefreshing } from './redux/auth/selectors';
import { auth } from './services/firebase/firebase';
import { refreshUser } from './redux/auth/operations';
import Loader from './components/layout/Loader/Loader';

const HomePage = lazy(() => import('./pages/HomePage/HomePage'));
const Library = lazy(() => import('./pages/Library/Library'));
const SearchPage = lazy(() => import('./pages/SearchPage/SearchPage'));
const LoginPage = lazy(() => import('./pages/LoginPage/LoginPage'));
const RegistrationPage = lazy(() =>
  import('./pages/RegistrationPage/RegistrationPage')
);

function App() {
  const isRefreshing = useSelector(selectIsRefreshing);
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        dispatch(refreshUser());
      }
    });
    return () => unsubscribe();
  }, [dispatch]);

  return isRefreshing ? (
    <Loader />
  ) : (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route
            path="library"
            element={<PrivateRoute redirectTo="/login" element={<Library />} />}
          />
          <Route
            path="search-movies"
            element={
              <PrivateRoute redirectTo="/login" element={<SearchPage />} />
            }
          />{' '}
          <Route path="*" element={<NotFound />} />
          <Route
            path="login"
            element={<RestrictedRoute redirectTo="/" element={<LoginPage />} />}
          />
          <Route
            path="register"
            element={
              <RestrictedRoute redirectTo="/" element={<RegistrationPage />} />
            }
          />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
