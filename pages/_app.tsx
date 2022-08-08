
import type { AppProps } from 'next/app'
import { useEffect, useState } from 'react'
import LoadingScreen from '../components/LoadingScreen';
import '../styles/globals.css'


function MyApp({ Component, pageProps }: AppProps) {
  const [loading, setLoading] = useState<boolean>(true);
 
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000); 
  }, []);


  return (
    <>
      {loading ? (<LoadingScreen />) : (<Component {...pageProps} />)}
    </>

  )
}

export default MyApp
