import type { NextPage } from "next";
import Head from "next/head";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import Work from "../components/Work";
import Services from '../components/Services'
import Contact from "../components/Contact";
import Particless from '../components/Particless';

const Home: NextPage = () => {
  return (
    <div className="overflow-hidden scroll-smooth ">
      <Head>
        <title>ParraCode</title>
        <link rel="icon" href="/PC1.png"></link>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Navbar />
      <Header />
      <Work />
      <Services />
      <Contact />
      <Particless />
    </div>
  );
};

export default Home;
