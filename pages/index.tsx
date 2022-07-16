import type { NextPage } from 'next'
import Head from 'next/head'
import Header from './components/Header'

const Home: NextPage = () => {
  return (
    <div className='w-screen h-screen '>
      <Head>
        <title>ParraCode</title>
      </Head>
      <Header></Header>

    </div>
  )
}

export default Home
