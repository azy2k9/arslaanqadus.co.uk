import { Heading, Box, SimpleGrid, Center } from '@chakra-ui/react';
import React from 'react';
import FeaturedPost from '../components/FeaturedPost';
import { IProject } from '../generated/types';

interface Props {
    projects: IProject[];
}

const Projects = ({ projects }: Props) => {
    return (
        <>
            <Center>
                <Heading py="16">Recent Projects</Heading>
            </Center>
            <Box>
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
            </Box>
        </>
    );
};

export default Projects;
