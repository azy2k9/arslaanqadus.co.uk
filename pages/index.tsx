import type { NextPage } from 'next';
import Head from 'next/head';
import Header from '../components/Header';
import Intro from '../sections/Intro';
import Blog from '../sections/Blog';
import Projects from '../sections/Projects';
import { Container } from '@chakra-ui/react';

const Home: NextPage = () => {
    return (
        <>
            <Head>
                <title>Home</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header />
            <Intro />
            <Container maxW={['3xl', '4xl', null, '4xl', '8xl']}>
                <Projects />
                <Blog />
            </Container>
        </>
    );
};

export default Home;
