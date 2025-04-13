import { Suspense } from 'react';
import Loader from './Loader/Loader';
import { Footer } from './Footer/Footer';
import Navigation from './Navigation/Navigation';
import { Outlet } from 'react-router-dom';

export const Layout = () => {
  return (
    <div className="">
      <Suspense fallback={<Loader />}>
        <Navigation />
        <main>
          <Outlet />
        </main>
        <Footer />
      </Suspense>
    </div>
  );
};
