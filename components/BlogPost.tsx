import { Flex, Heading, Text } from '@chakra-ui/layout';
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
                border="1px"
                p="1rem"
                borderRadius="md"
            >
                <ChakraNextImage src={img} h="xs" />
                <Text textAlign="center" fontWeight="bold" py="0.5rem">
                    {date}
                </Text>
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
