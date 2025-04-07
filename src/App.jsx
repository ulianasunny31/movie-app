import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navigation from './components/layout/Navigation';
import HomePage from './pages/HomePage/HomePage';
import Library from './pages/Library/Library';
import SearchPage from './pages/SearchPage/SearchPage';
import LoginPage from './pages/LoginPage/LoginPage';
import RegistrationPage from './pages/RegistrationPage/RegistrationPage';

function App() {
  return (
    <div>
      <Navigation />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/library" element={<Library />} />
        <Route path="/search-movies" element={<SearchPage />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="register" element={<RegistrationPage />} />

        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </div>
  );
}

export default App;
