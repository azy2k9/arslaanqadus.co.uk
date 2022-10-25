import { Avatar } from '@chakra-ui/avatar';
import { Center, Container, Flex, Heading, Text } from '@chakra-ui/layout';
import React from 'react';
import Layout from '../../components/Layout';

const About = () => {
    return (
        <Layout title="About">
            <Center pb="8" px="8">
                <Flex maxW="fit-content" alignSelf="center">
                    <Avatar
                        src="/me.png"
                        size="full"
                        name="Photo of Arslaan Qadus"
                    />
                </Flex>
            </Center>
            <Container maxWidth="2xl">
                <Text pb="8" textAlign="center">
                    I&quot;m a Manchester based Full Stack Developer who
                    specializes in orchestrating and building clean response UI.
                    I currently work at Evergreen Life, a health and wellbeing
                    app that also offers GP services.
                </Text>
                <Text py="4" textAlign="center">
                    My work tech stack comprises of React, Node, TypeScript,
                    Electron Cordova, MongoDB, React, Query, Material UI
                </Text>
                <Text py="4" textAlign="center">
                    My preferred personal stack comprises of React, Node,
                    TypeScript NextJS, GraphQL, MongoDB, React, Query, Chakra
                    UI, Material UI
                </Text>
                <Center pt="8" pb="4">
                    <Heading>Goals</Heading>
                </Center>
                <Text textAlign="center" py="2">
                    <s>Learn MongoDB</s> ✅
                </Text>
                <Text textAlign="center" py="2">
                    <s>Learn NextJS</s> ✅
                </Text>
                <Text textAlign="center" py="2">
                    <s>Learn GraphQL</s> ✅
                </Text>
                <Text textAlign="center" py="2">
                    <s>Type @ 40 wpm</s> ✅
                </Text>
                <Text textAlign="center" py="2">
                    <s>Type @ 50 wpm</s> ✅
                </Text>
                <Text textAlign="center" py="2">
                    Type @ 60 wpm
                </Text>
                <Text textAlign="center" py="2">
                    Give 1 Tech Talk in 2021
                </Text>
            </Container>
        </Layout>
    );
};

export default About;
