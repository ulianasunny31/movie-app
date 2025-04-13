import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navigation from './components/layout/Navigation';
import { Layout } from './components/layout/Layout';
import { lazy } from 'react';
import NotFound from './components/layout/NotFound';
import PrivateRoute from './components/PrivateRoute';
import RestrictedRoute from './components/RestrictedRoute';

const HomePage = lazy(() => import('./pages/HomePage/HomePage'));
const Library = lazy(() => import('./pages/Library/Library'));
const SearchPage = lazy(() => import('./pages/SearchPage/SearchPage'));
const LoginPage = lazy(() => import('./pages/LoginPage/LoginPage'));
const RegistrationPage = lazy(() =>
  import('./pages/RegistrationPage/RegistrationPage')
);

function App() {
  return (
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
