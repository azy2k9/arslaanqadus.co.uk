import { Avatar } from '@chakra-ui/avatar';
import { Container, Flex, Heading, Text } from '@chakra-ui/layout';
import React from 'react';
import ScrollDown from '../components/ScrollDown';
import Transition from '../components/Transitions';

const Intro = () => {
    return (
        <>
            <Flex flexDir="column" px="2rem" height={['82vh']} justify="center">
                <Flex maxW="fit-content" alignSelf="center">
                    <Avatar src="/me.png" size="full" />
                </Flex>
                <Container maxW="container.md" py="2rem">
                    <Heading
                        textAlign="center"
                        fontSize={['xx-large', 'xxx-large']}
                    >
                        Hi.
                    </Heading>
                    <Heading
                        fontSize={['lg', 'xl', 'xx-large']}
                        fontWeight="medium"
                        pt="4"
                        textAlign="center"
                    >
                        Im Arslaan. A Full Stack Web Developer. Im currently
                        working at Evergreen-Life developing health and
                        wellbeing apps for desktop and mobile.
                    </Heading>
                </Container>
                {/* <Transition /> */}
                {/* <Heading
                        textAlign="center"
                        fontSize={['xl', 'xx-large']}
                        fontWeight="medium"
                        pt="3rem"
                        pb="0.5rem"
                    >
                        My Technical Skills:
                    </Heading>
                    <Flex flexDir="column" alignItems="center">
                        <Text fontSize={['lg', 'xl', '2xl']}>React</Text>
                        <Text fontSize={['lg', 'xl', '2xl']}>Node</Text>
                        <Text fontSize={['lg', 'xl', '2xl']}>TypeScript</Text>
                        <Text fontSize={['lg', 'xl', '2xl']}>GraphQL</Text>
                        <Text fontSize={['lg', 'xl', '2xl']}>React Query</Text>
                        <Text fontSize={['lg', 'xl', '2xl']}>Material UI</Text>
                        <Text fontSize={['lg', 'xl', '2xl']}>Chakra UI</Text>
                    </Flex> 
                */}
            </Flex>
            <Flex justify="center">
                <ScrollDown />
            </Flex>
        </>
    );
};

export default Intro;
