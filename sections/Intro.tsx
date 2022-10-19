import { Avatar } from '@chakra-ui/avatar';
import { Container, Flex, Heading, VStack } from '@chakra-ui/layout';
import { useBreakpointValue } from '@chakra-ui/media-query';
import React from 'react';
import ScrollDown from '../components/ScrollDown';

const Intro = () => {
    return (
        <>
            <VStack
                h={['100vh', '85vh', '90vh']}
                justifyContent={{ base: 'space-around', lg: 'space-evenly' }}
            >
                <Container
                    maxW="container.md"
                    centerContent
                    flex={2}
                    justifyContent="flex-end"
                >
                    <Flex maxW={['fit-content']} justifyContent="center">
                        <Avatar src="/me.png" size={'full'} />
                    </Flex>
                    <Heading
                        py={['2', '4']}
                        textAlign="center"
                        fontSize={['xx-large', 'xxx-large']}
                    >
                        Hi.
                    </Heading>
                    <Heading
                        fontWeight="medium"
                        textAlign="center"
                        fontSize={{ base: 'md', sm: 'lg', md: '2xl' }}
                        maxW={['md', 'lg', 'xl']}
                    >
                        Im Arslaan. A Full Stack Web Developer. Im currently
                        working at Tes Global developing eLearning platforms for
                        the education sector.
                    </Heading>
                </Container>
                <Flex
                    alignItems={['flex-start', 'center']}
                    flex={1}
                    pt={[8, 0]}
                    marginTop="0"
                >
                    <ScrollDown
                        onClick={() =>
                            // @ts-ignore
                            // TODO: SPECIFY THE CORRECT SCROLL SECTION HERE.
                            document
                                .querySelector('.about')
                                .scrollIntoView({ behavior: 'smooth' })
                        }
                    />
                </Flex>
            </VStack>
        </>
    );
};

export default Intro;
