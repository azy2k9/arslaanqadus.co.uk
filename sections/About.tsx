import { Center, Container, Heading, Text } from '@chakra-ui/layout';
import React from 'react';

const About = () => {
    return (
        <>
            <Container
                flexDir="column"
                className="about"
                mt={['2rem', '3rem']}
                maxW={['container.lg']}
            >
                <Heading textAlign="center">About</Heading>
                <Text textAlign="center" pt="1rem">
                    I'm a Full Stack JavaScript Developer, living and working in
                    Manchester. I've been working commercially since June 2019
                    where I started my journey as a Front End React Developer.
                    Along the way I have picked up some extra skills like Node,
                    TypeScript, MongoDB and GraphQL which now allows me to work
                    across the entire stack.
                </Text>
            </Container>

            {/* List out my resume here - places worked since uni and including that with accomplishments in timeline style */}
        </>
    );
};

export default About;
