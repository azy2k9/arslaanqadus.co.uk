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
import client from '../apolloClient';
import { gql } from '@apollo/client';

export interface IBlog {
    __typename: string,
    id: string,
    title: string,
    slug: string,
    introduction: string,
    featured: boolean,
    variant: "blog" | "project",
    tags: [{
        value: string,
        color: string
    }]
}

export interface IProject {
    __typename: string,
    id: string,
    title: string,
    slug: string,
    introduction: string,
    featured: boolean,
    thumbnail: {
        id: string,
        url: string
    }
    variant: "blog" | "project",
    tags: [{
        value: string,
        color: string
    }]
}

const Home = ({ blogs, projects }: { blogs: IBlog[], projects: IProject[] }) => {
    console.log(projects);

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
                <Projects projects={projects} />
                <Blog blogs={blogs} />
            </Container>
            <Footer />
        </>
    );
};

export const getStaticProps = async () => {
    const blogsData = await client.query({
        query: gql`
            query featuredBlogs{
                blogs(where: { variant: blog, featured: true }) {
                    id,
                    title,
                    slug,
                    introduction,
                    variant,
                    tags {
                        value,
                        color
                    }
                }
            }
    `
    });

    const projectsData = await client.query({
        query: gql`
            query featuredProjects {
                blogs (where: { variant: project, featured: true }) {
                    id,
                    title, 
                    slug,
                    thumbnail {
                        id,
                        url
                    },
                    introduction,
                    variant,
                    tags {
                        color,
                        value
                    }
                }
            }
    `
    });
    
    return {
        props: {
            blogs: blogsData.data.blogs,
            projects: projectsData.data.blogs,
        },
    }
}

export default Home;
