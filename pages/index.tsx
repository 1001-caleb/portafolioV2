import type { NextPage } from "next";
import Head from "next/head";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import Work from "../components/Work";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>ParraCode</title>
        <link rel="icon" href="/PC1.png"></link>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Navbar />
      <Header />
      <Work />
    </div>
  );
};

export default Home;
