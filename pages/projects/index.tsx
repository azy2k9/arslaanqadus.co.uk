import React from 'react';
import client from '../../apolloClient';
import { gql } from '@apollo/client';
import { SimpleGrid } from '@chakra-ui/layout';
import FeaturedPost from '../../components/FeaturedPost';
import Layout from '../../components/Layout';
import {
    GetAllProjectsDocument,
    GetAllProjectsQuery,
    Project,
} from '../../generated/types';

interface Props {
    projects: Project[];
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
                        slug={'/projects/' + project.slug}
                    />
                ))}
            </SimpleGrid>
        </Layout>
    );
};

export const getStaticProps = async () => {
    const projectsData = await client.query<GetAllProjectsQuery>({
        query: GetAllProjectsDocument,
    });

    return {
        props: {
            projects: projectsData.data.projects,
        },
    };
};

export default Projects;
