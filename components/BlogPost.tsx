import { Badge, Box, Flex, Heading, Stack, Text } from '@chakra-ui/layout';
import React from 'react';
import ChakraNextImage from './Image';
import Link from 'next/link';
import { ThemeTypings } from '@chakra-ui/styled-system';
import { Avatar } from '@chakra-ui/avatar';

interface IProps {
    img: string;
    tags?: Array<{
        tag: string;
        colorScheme: ThemeTypings['colorSchemes'];
    }>;
    title: string;
    previewText: string;
    avatarImg: string;
    date: string;
    readTime: string;
    author: string;
}

const BlogPost = ({
    img,
    tags = [],
    title,
    previewText,
    avatarImg,
    author,
    date,
    readTime,
}: IProps) => {
    return (
        <Link href="#" passHref>
            <Flex
                flexDir="column"
                m={['1rem', '0.5rem']}
                _hover={{ cursor: 'pointer' }}
                boxShadow={'2xl'}
                borderRadius="md"
            >
                <ChakraNextImage src={img} h="250px" />
                <Box p="0.5rem">
                    {tags.map(({ tag, colorScheme }) => (
                        <Badge
                            key={tag}
                            colorScheme={colorScheme}
                            py="0.25rem"
                            px="0.5rem"
                            m="0.5"
                            borderRadius="lg"
                            size="sm"
                        >
                            <Text fontSize="xs">{tag}</Text>
                        </Badge>
                    ))}
                </Box>
                <Heading
                    display="flex"
                    flex="1"
                    size={'lg'}
                    alignItems="center"
                    px="1rem"
                >
                    {title}
                </Heading>
                <Text flex="2" m="1rem" noOfLines={3}>
                    {previewText}
                </Text>
                <Stack direction={'row'} align={'center'} p="1rem">
                    <Avatar src={avatarImg} alt={'Author'} />
                    <Stack direction={'column'} spacing={0} fontSize={'sm'}>
                        <Text fontWeight={600}>{author}</Text>
                        <Text color={'gray.500'}>
                            {date} · {readTime} read
                        </Text>
                    </Stack>
                </Stack>
            </Flex>
        </Link>
    );
};

export default BlogPost;
