import React from 'react'
import client from '../../apolloClient'
import { gql } from '@apollo/client';
import { SimpleGrid } from '@chakra-ui/layout';
import FeaturedPost from '../../components/FeaturedPost';
import Layout from '../../components/Layout';

interface Props {
    projects: ProjectPost[]
}

const Projects = ({ projects }: Props) => {
    return (
        <Layout title="Projects">
            <SimpleGrid columns={[1,2,3]}>
                {projects.map(project => (
                    <FeaturedPost
                        key={project.id}
                        title={project.title}
                        type={project.variant}
                        previewText={project.introduction}
                        direction="center"
                        tags={project.tags}
                        img={project.thumbnail.url}
                        slug={"/projects/" + project.slug}
                    />
                ))}
            </SimpleGrid>
        </Layout>
    )
}

export const getStaticProps = async () => {
    const projects = await client.query({
        query: gql`
            query allProjects{
                blogs(where: { variant: project }) {
                    id,
                    title,
                    slug,
                    featured,    
                    variant,
                    author,
                    readTime,
                    introduction,
                    content {
                        markdown
                    },
                    thumbnail {
                        id,
                        url
                    },
                    tags {
                        id,
                        value
                        colorScheme
                    },
                    createdAt
                }
            }
        `
    });

    return {
        props: {
            projects: projects.data.blogs
        }
    }
}

export default Projects
