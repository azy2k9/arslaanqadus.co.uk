import React from 'react'
import Head from 'next/head';
import Header from '../components/Header';
import Intro from '../sections/Intro';
import Footer from '../components/Footer';
import { Container, Heading } from '@chakra-ui/react';

interface ILayout {
    title: string;
    enableHeading?: boolean;
    children: React.ReactNode
}

const Layout = ({ title, enableHeading = true, children }: ILayout) => {
    return (
            <>
                <Head>
                    <title>{title}</title>
                    <link rel="icon" href="/favicon.ico" />
                </Head>
                <Header />
                <Container maxW={['3xl', '4xl', null, '4xl', '8xl']}>
                    {enableHeading && <Heading textAlign="center" py="16">{title}</Heading>}
                    {children}
                </Container>
                <Footer />
            </>
        );
}

export default Layout
