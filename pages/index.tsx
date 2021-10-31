import type { NextPage } from 'next';
import Head from 'next/head';
import Header from '../components/Header';
import Intro from '../sections/Intro';
import Blog from '../sections/Blog';
import Projects from '../sections/Projects';
import About from '../sections/About';
import Footer from '../components/Footer';
import { Container } from '@chakra-ui/react';
import Skills from '../sections/Skills';

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
                <About />
                <Skills />
                <Projects />
                <Blog />
            </Container>
            <Footer />
        </>
    );
};

export default Home;
