import React from 'react';
import client from '../../apolloClient';
import { SimpleGrid } from '@chakra-ui/layout';
import FeaturedPost from '../../components/FeaturedPost';
import Layout from '../../components/Layout';
import {
    GetAllProjectsDocument,
    IGetAllProjectsQuery,
    IProject,
} from '../../generated/types';
import { GetStaticProps } from 'next';

interface Props {
    projects: IProject[];
}

const Projects = ({ projects }: Props) => {
    return (
        <Layout title="Projects">
            <SimpleGrid columns={[1, null, null, 2]}>
                {projects.map((project) => (
                    <FeaturedPost
                        key={project.id}
                        title={project.title}
                        type={'project'}
                        previewText={project.introduction}
                        direction="center"
                        tags={project.tags}
                        img={project.thumbnail.url}
                        slug={'/project/' + project.slug}
                    />
                ))}
            </SimpleGrid>
        </Layout>
    );
};

export const getStaticProps: GetStaticProps = async () => {
    const projectsData = await client.query<IGetAllProjectsQuery>({
        query: GetAllProjectsDocument,
    });

    return {
        props: {
            projects: projectsData.data.projects,
        },
        revalidate: 60,
    };
};

export default Projects;
