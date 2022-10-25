import React from 'react';
import { Center, Flex, Heading, SimpleGrid } from '@chakra-ui/layout';
import SkillCard from '../components/SkillCard';
import { useColorMode } from '@chakra-ui/color-mode';

const Skills = () => {
    const { colorMode } = useColorMode();
    return (
        <>
            <Center>
                <Heading p="8">My Skills</Heading>
            </Center>
            <SimpleGrid columns={[1, null, 3]}>
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
                    color={'blue.600'}
                />
                <SkillCard
                    title="Back End"
                    skills={[
                        'Node',
                        'NextJS',
                        'GraphQL',
                        'tRPC',
                        'Express',
                        'MongoDB',
                        'MySQL',
                    ]}
                    color={'purple.600'}
                />
                <SkillCard
                    title="Other"
                    skills={[
                        'Git',
                        'Docker',
                        'GraphCMS',
                        'Electron',
                        'Vim (Beginner)',
                        'VS Code',
                    ]}
                    color={'green.600'}
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
