import { Flex, Text } from '@chakra-ui/layout';
import { Box, IconButton, useColorMode } from '@chakra-ui/react';
import type { NextPage } from 'next';
import Head from 'next/head';
import { BsTwitter, BsLinkedin, BsGithub } from 'react-icons/bs';
import Header from '../components/Header';

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
        </>
    );
};

export default Home;
