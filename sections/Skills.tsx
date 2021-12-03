import React from 'react';
import { Flex, Heading, SimpleGrid } from '@chakra-ui/layout';
import SkillCard from '../components/SkillCard';
import { useColorMode } from '@chakra-ui/color-mode';

const Skills = () => {
    const { colorMode } = useColorMode();
    return (
        <>
            <Flex justifyContent="center" p="16">
                <Heading>My Skills</Heading>
            </Flex>
            <SimpleGrid columns={[1, 2, 3]}>
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
                    color={colorMode === 'dark' ? 'blue.300' : 'blue.600'}
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
                    color={colorMode === 'dark' ? 'purple.400' : 'purple.600'}
                />
                <SkillCard
                    title="Other"
                    skills={[
                        'Git',
                        'Docker',
                        'Cordova (Mobile Apps)',
                        'VS Code',
                    ]}
                    color={colorMode === 'dark' ? 'green.400' : 'green.600'}
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
