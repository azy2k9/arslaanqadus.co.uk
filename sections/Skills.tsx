import React from 'react';
import { Center, Flex, Heading, SimpleGrid, Text } from '@chakra-ui/layout';
import SkillCard from '../components/SkillCard';

const Skills = () => {
    return (
        <>
            <Flex justifyContent="center" pt="2rem">
                <Heading>My Skills</Heading>
            </Flex>
            <SimpleGrid columns={[1, 2, 3]} gap="4">
                <SkillCard
                    title="Front End"
                    skills={[
                        'React',
                        'Redux',
                        'React Query',
                        'TypeScript',
                        'Material UI',
                        'Chakra UI',
                    ]}
                    color="blue.300"
                />
                <SkillCard
                    title="Back End"
                    skills={[
                        'Node',
                        'NextJS',
                        'GraphQL',
                        'Express',
                        'MongoDB',
                        'MySQL',
                    ]}
                    color="purple.400"
                />
                <SkillCard
                    title="Other"
                    skills={[
                        'Git',
                        'Docker',
                        'Cordova (Mobile Apps)',
                        'VS Code',
                    ]}
                    color="green.400"
                />
            </SimpleGrid>
        </>
    );
};


// React, Node, TypeScript, AWS Experience, Testing (Jest Testing, E2E), 
// Pair programming, Mob programming, CI/CD (Jenkins)
// Things we built together and things I have achieved 
// AWS Certfications

export default Skills;
