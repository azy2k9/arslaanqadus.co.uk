import IntroSection from '../sections/Intro';
import BlogSection from '../sections/Blogs';
import ProjectsSection from '../sections/Projects';
import AboutSection from '../sections/About';
import SkillsSection from '../sections/Skills';
import client from '../apolloClient';
import Layout from '../components/Layout';
import {
    Blog,
    Project,
    GetFeaturedBlogsQuery,
    GetFeaturedProjectsQuery,
    GetFeaturedBlogsDocument,
    GetFeaturedProjectsDocument,
} from '../generated/types';
import { GetStaticProps } from 'next';

const Home = ({ blogs, projects }: { blogs: Blog[]; projects: Project[] }) => {
    return (
        <Layout title="Homepage" enableHeading={false}>
            <IntroSection />
            <AboutSection />
            <SkillsSection />
            <ProjectsSection projects={projects} />
            <BlogSection blogs={blogs} />
        </Layout>
    );
};

export const getStaticProps: GetStaticProps = async () => {
    const blogsData = await client.query<GetFeaturedBlogsQuery>({
        query: GetFeaturedBlogsDocument,
    });

    const projectsData = await client.query<GetFeaturedProjectsQuery>({
        query: GetFeaturedProjectsDocument,
    });

    return {
        props: {
            blogs: blogsData.data.blogs,
            projects: projectsData.data.projects,
        },
    };
};

export default Home;
