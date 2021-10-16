import type { NextPage } from 'next';
import Head from 'next/head';
import Header from '../components/Header';
import Blog from '../sections/Blog';
import Intro from '../sections/Intro';

const Home: NextPage = () => {
    return (
        <>
            <Head>
                <title>Home</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header />
            <Intro />
            <Blog />
        </>
    );
};

export default Home;
