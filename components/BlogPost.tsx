import { Badge, Flex, Heading, Text } from '@chakra-ui/layout';
import React from 'react';
import ChakraNextImage from './Image';
import Link from 'next/link';

interface IProps {
    title: string;
    img: string;
    date: string;
    previewText: string;
}

const BlogPost = ({ title, img, date, previewText }: IProps) => {
    return (
        <Link href="#" passHref>
            <Flex
                flexDir="column"
                m="1rem"
                _hover={{ cursor: 'pointer' }}
                // border="1px"
                p="1rem"
                borderRadius="md"
            >
                <ChakraNextImage src={img} h="xs" />
                <Text textAlign="center" fontWeight="bold" py="0.5rem">
                    {date}
                </Text>
                <Flex justify="center" py="0.5rem">
                    <Badge
                        colorScheme="green"
                        py="0.25rem"
                        px="0.5rem"
                        borderRadius="lg"
                        mx="0.5"
                        size="sm"
                    >
                        <Text fontSize="xx-small">New</Text>
                    </Badge>
                    <Badge
                        colorScheme="pink"
                        py="0.25rem"
                        px="0.5rem"
                        borderRadius="lg"
                        mx="0.5"
                    >
                        <Text fontSize="xx-small">Tooling</Text>
                    </Badge>
                    <Badge
                        colorScheme="cyan"
                        py="0.25rem"
                        px="0.5rem"
                        borderRadius="lg"
                        mx="0.5"
                    >
                        <Text fontSize="xx-small">React</Text>
                    </Badge>
                </Flex>
                <Heading textAlign="center" size="lg">
                    {title}
                </Heading>
                <Text py="1rem" textAlign="center">
                    {previewText}
                </Text>
            </Flex>
        </Link>
    );
};

export default BlogPost;
