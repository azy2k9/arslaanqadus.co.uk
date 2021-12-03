import { Badge, Box, Flex, Heading, Stack, Text } from '@chakra-ui/layout';
import React from 'react';
import ChakraNextImage from './Image';
import Link from 'next/link';
import { Avatar } from '@chakra-ui/avatar';
import { dateFormatter } from '../helpers';
import { IBlog } from '../generated/types';

const BlogPost = ({
    thumbnail,
    tags,
    title,
    introduction,
    readTime,
    slug,
    createdAt,
}: IBlog) => {
    return (
        <Link href={slug} passHref>
            <Flex
                flexDir="column"
                m={['1rem', '0.5rem']}
                _hover={{ cursor: 'pointer' }}
                boxShadow={'2xl'}
                borderRadius="md"
            >
                <ChakraNextImage src={thumbnail.url} h="250px" />
                <Box p="0.5rem">
                    {tags.map(({ id, value, colorScheme }) => (
                        <Badge
                            key={id}
                            colorScheme={colorScheme}
                            py="0.25rem"
                            px="0.5rem"
                            m="0.5"
                            borderRadius="lg"
                            size="sm"
                        >
                            <Text fontSize="xs">{value}</Text>
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
                    {introduction}
                </Text>
                <Stack direction={'row'} align={'center'} p="1rem">
                    <Avatar src="/me.png" alt="Author" />
                    <Stack direction={'column'} spacing={0} fontSize={'sm'}>
                        <Text fontWeight={600}>Arslaan Qadus</Text>
                        <Text color={'gray.500'}>
                            {dateFormatter(createdAt)} · {readTime} read
                        </Text>
                    </Stack>
                </Stack>
            </Flex>
        </Link>
    );
};

export default BlogPost;
