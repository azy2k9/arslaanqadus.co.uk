import type { NextPage } from 'next';
import Head from 'next/head';
import Header from '../components/Header';
import Intro from '../sections/Intro';
import Blog from '../sections/Blog';
import Projects from '../sections/Projects';

const Home: NextPage = () => {
    return (
        <>
            <Head>
                <title>Home</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header />
            <Intro />
            <Projects />
            <Blog />
        </>
    );
};

export default Home;
