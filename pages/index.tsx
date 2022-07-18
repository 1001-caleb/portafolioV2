import type { NextPage } from 'next'
import Head from 'next/head'
import Header from '../components/Navbar'


const Home: NextPage = () => {
  return (
    <div className=''>
      <Head>
        <title>ParraCode</title>
        <link rel='icon' href='../public/PC.png'></link>
      </Head>
      <Header />

    </div>
  )
}

export default Home
