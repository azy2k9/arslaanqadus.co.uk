import Intro from '../sections/Intro';
import Blog from '../sections/Blog';
import Projects from '../sections/Projects';
import About from '../sections/About';
import Skills from '../sections/Skills';
import client from '../apolloClient';
import { gql } from '@apollo/client';
import Layout from '../components/Layout';

const Home = ({ blogs, projects }: { blogs: PartialBlogPost[], projects: PartialProjectPost[] }) => {
    return (
        <Layout title="Homepage" enableHeading={false}>
            <Intro />
            <About />
            <Skills />
            <Projects projects={projects} />
            <Blog blogs={blogs} />
        </Layout>
    );
};

export const getStaticProps = async () => {
    const blogsData = await client.query({
        query: gql`
            query featuredBlogs{
                blogs(where: { variant: blog, featured: true }, first: 5) {
                    id,
                    title,
                    slug,
                    introduction,
                    featured,
                    variant,
                    tags {
                        value,
                        colorScheme
                    },
                    thumbnail {
                        id,
                        url
                    },
                }
            }
    `
    });

    const projectsData = await client.query({
        query: gql`
            query featuredProjects {
                blogs (where: { variant: project, featured: true }, first: 3) {
                    id,
                    title, 
                    slug,
                    introduction,
                    featured,
                    variant,
                    tags {
                        value,
                        colorScheme
                    },
                    thumbnail {
                        id,
                        url
                    },
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
