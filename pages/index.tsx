import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Logo from '../public/Logo.png'

const Home: NextPage = () => {
  return (
    <div className='bg-black w-screen h-screen '>
      <Head>
        <title>hola</title>
      </Head>

      <Image src={Logo} alt='logo' />
    </div>
  )
}

export default Home
