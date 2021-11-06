import { Heading, Center, Box } from '@chakra-ui/react';
import React from 'react';
import FeaturedPost from '../components/FeaturedPost';
import { IBlog } from '../pages';

interface Props {
    blogs: IBlog[]
}

const Blog = ({ blogs }: Props) => {
    return (
        <>
            <Center>
                <Heading py="16">Recent Blog Posts</Heading>
            </Center>
            <Box>
                {blogs.map((blog, index) => (
                    <FeaturedPost
                        key={blog.id}
                        title={blog.title}
                        type={blog.variant}
                        previewText={blog.introduction}
                        direction={index % 2 === 0 ? "right" : "left"}
                        tags={blog.tags}
                    />
                ))}
            </Box>
        </>
    );
};

export default Blog;
