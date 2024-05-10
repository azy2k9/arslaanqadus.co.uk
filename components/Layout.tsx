import React from 'react';
import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import {
    Container,
    Center,
    Heading,
    Spinner,
    Slide,
    useToast,
} from '@chakra-ui/react';
import { useRouter } from 'next/router';

interface ILayout {
    title: string;
    enableHeading?: boolean;
    children?: React.ReactNode;
    isFallback?: boolean;
}

const Layout = ({
    title,
    enableHeading = true,
    children,
    isFallback = false,
}: ILayout) => {
    const toast = useToast();
    const router = useRouter();

    if (router.query.errorMessage) {
        toast({
            title: 'Error!',
            description: router.query.errorMessage,
            status: 'error',
            isClosable: true,
            position: 'bottom-right',
        });
    }

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
                <Header />
                <Container minW={{ lg: 'container.lg' }}>
                    {enableHeading && (
                        <Heading textAlign="center" py={['8', '16']}>
                            {title}
                        </Heading>
                    )}
                    {children}
                </Container>
                <Footer />
            </Slide>
        </>
    );
};

export default Layout;
