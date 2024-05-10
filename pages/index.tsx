import IntroSection from '../sections/Intro';
import BlogSection from '../sections/Blogs';
import ProjectsSection from '../sections/Projects';
import AboutSection from '../sections/About';
import SkillsSection from '../sections/Skills';
import client from '../apolloClient';
import Layout from '../components/Layout';
import {
    IBlog,
    IProject,
    IGetFeaturedBlogsQuery,
    IGetFeaturedProjectsQuery,
    GetFeaturedBlogsDocument,
    GetFeaturedProjectsDocument,
} from '../generated/types';
import { GetStaticProps } from 'next';

const Home = ({
    blogs,
    projects,
}: {
    blogs: IBlog[];
    projects: IProject[];
}) => {
    const hasProjectPosts = Boolean(projects.length);
    const hasBlogPosts = Boolean(blogs.length);

    return (
        <Layout title="Homepage" enableHeading={false}>
            <IntroSection />
            <AboutSection />
            <SkillsSection />
            {hasProjectPosts && <ProjectsSection projects={projects} />}
            {hasBlogPosts && <BlogSection blogs={blogs} />}
        </Layout>
    );
};

export const getStaticProps: GetStaticProps = async () => {
    const blogsData = await client.query<IGetFeaturedBlogsQuery>({
        query: GetFeaturedBlogsDocument,
    });

    const projectsData = await client.query<IGetFeaturedProjectsQuery>({
        query: GetFeaturedProjectsDocument,
    });

    return {
        props: {
            blogs: blogsData.data.blogs,
            projects: projectsData.data.projects,
        },
        revalidate: 60,
    };
};

export default Home;
