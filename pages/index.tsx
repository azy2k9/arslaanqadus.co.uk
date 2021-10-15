import type { NextPage } from 'next';
import Head from 'next/head';
import Header from '../components/Header';
import Blog from '../sections/Blog';

const Home: NextPage = () => {
    return (
        <>
            <Head>
                <title>Home</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header />
            <Blog />
        </>
    );
};

export default Home;
