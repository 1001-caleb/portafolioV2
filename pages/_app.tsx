import '../styles/globals.css'
import '../styles/screen.css';
import '../styles/balls.css';

import type { AppProps } from 'next/app'
import { useEffect, useState } from 'react'
import LoadingScreen from '../components/LoadingScreen';
import Router, { useRouter } from 'next/router';


function MyApp({ Component, pageProps }: AppProps) {
  const [loading, setLoading] = useState<boolean>(true);
  const router = useRouter();

  useEffect(() => {
    router.push('/');
  }, [router.events]);

  useEffect(() => {
    router.events.on('routeChangeStart', () => {
      setLoading(true);
    });
    router.events.on('routeChangeComplete', () => {
      setLoading(false);
    });
    router.events.on('routeChangeError', () => {
      setLoading(false);
    });

    return () => {
     router.events.off('routeChangeStart', () => {
      setLoading(true);
      });
      router.events.off('routeChangeComplete', () => {
        setLoading(false);
      });
      router.events.off('routeChangeError', () => {
        setLoading(false);
      });
    }
  }, [router.events]);

  return (
    <>
      {!loading ? (<Component {...pageProps} />) : (<LoadingScreen />)}
    </>

  )
}

export default MyApp
