import React from 'react';
import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Container, Center, Heading, Spinner, Slide } from '@chakra-ui/react';

interface ILayout {
    title: string;
    enableHeading?: boolean;
    children: React.ReactNode;
    isFallback?: boolean;
}

const Layout = ({
    title,
    enableHeading = true,
    children,
    isFallback = false,
}: ILayout) => {
    return (
        <>
            <Head>
                <title>{title}</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Slide direction="bottom" in={isFallback}>
                <Center h={'100vh'} alignItems="center">
                    <Spinner size="lg" />
                </Center>
            </Slide>
            <Slide
                direction="top"
                in={!isFallback}
                style={{ height: '100%', overflowY: 'scroll' }}
            >
                <Container maxW={['3xl', '4xl', null, '4xl', '8xl']}>
                    <Header />
                    {enableHeading && (
                        <Heading textAlign="center" py="16">
                            {title}
                        </Heading>
                    )}
                    {children}
                    <Footer />
                </Container>
            </Slide>
        </>
    );
};

export default Layout;
