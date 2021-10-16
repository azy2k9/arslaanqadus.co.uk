import { Avatar } from '@chakra-ui/avatar';
import { Container, Flex, Heading, Text } from '@chakra-ui/layout';
import React from 'react';
import ScrollDown from '../components/ScrollDown';

const Intro = () => {
    return (
        <>
            <Flex
                flexDir="column"
                px="2rem"
                height={['83vh', '84vh']}
                justify="center"
            >
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
                        fontSize={['lg', 'xl', '1.75rem']}
                        fontWeight="medium"
                        pt="4"
                        textAlign="center"
                    >
                        Im Arslaan. A Full Stack Web Developer. Im currently
                        working at Evergreen-Life developing health and
                        wellbeing apps for desktop and mobile.
                    </Heading>
                </Container>
            </Flex>
            <Flex justify="center">
                <ScrollDown
                    onClick={() =>
                        // @ts-ignore
                        // TODO: SPECIFY THE CORRECT SCROLL SECTION HERE.
                        document
                            .querySelector('.projects')
                            .scrollIntoView({ behavior: 'smooth' })
                    }
                />
            </Flex>
        </>
    );
};

export default Intro;
