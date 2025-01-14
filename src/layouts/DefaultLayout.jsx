import { Outlet } from 'react-router-dom';
import { useContext } from 'react';
import loaderContext from '../context/LoaderContext';
import Loader from '../components/Loader';
import Footer from './Footer';
import Header from './Header';

function DefaultLayout() {

  const { loading } = useContext(loaderContext);

  return <>
    <Header />
    <main className='grow'>
      <Outlet />
    </main>
    <Footer />
    {loading && <Loader />}
  </>
}

export default DefaultLayout;