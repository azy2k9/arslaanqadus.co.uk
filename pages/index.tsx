import { Heading, SimpleGrid, useBreakpointValue } from '@chakra-ui/react';
import type { NextPage } from 'next';
import Head from 'next/head';
import BlogPost from '../components/BlogPost';
import BlogPostList from '../components/BlogPostList';
import Header from '../components/Header';
import FeaturedBlog from '../components/FeaturedBlog';

const Home: NextPage = () => {
    const headingSize = useBreakpointValue({ base: 'md', md: 'lg' });
    return (
        <>
            <div>
                <Head>
                    <title>Homepage</title>
                    <link rel="icon" href="/favicon.ico" />
                </Head>
            </div>
            <Header />
            <FeaturedBlog />
            <Heading textAlign="center" size={headingSize}>
                Some other blog posts...
            </Heading>
            <BlogPostList />
        </>
    );
};

export default Home;
