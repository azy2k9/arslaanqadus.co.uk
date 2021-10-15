import type { NextPage } from 'next';
import Head from 'next/head';
import Header from '../components/Header';
import Hero from '../components/Hero';

const Home: NextPage = () => {
    return (
        <>
            <div>
                <Head>
                    <title>Homepage</title>
                    <link rel="icon" href="/favicon.ico" />
                </Head>
            </div>
            <Header />
            <Hero />
        </>
    );
};

export default Home;
