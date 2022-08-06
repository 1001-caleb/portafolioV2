import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { useEffect, useState } from 'react'
import LoadingScreen from '../components/LoadingScreen';

function MyApp({ Component, pageProps }: AppProps) {
  const  [loading, setLoading]  = useState<boolean>(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  return(
    <>
      {!loading ? (<Component {...pageProps} />) : (<LoadingScreen /> )}
    </>
   
  ) 
}

export default MyApp
