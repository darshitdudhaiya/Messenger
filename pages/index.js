import Pricing from "./components/Feature";
import Hero from "./components/Hero";
import Head from 'next/head';
import About from "./components/About";
import Header from "./components/Header";
import Footer from './components/Footer';
export default function Home() {
  return (
    <>
      <Head>
        <title>Messenger</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Hero />
      <Pricing />
      <About />
      <Footer />
    </>
  );
}
