import { Heading, Center, Box } from '@chakra-ui/react';
import React from 'react';
import FeaturedPost from '../components/FeaturedPost';
interface Props {
    blogs: PartialBlogPost[]
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
                        slug={"/blog/" + blog.slug}
                    />
                ))}
            </Box>
        </>
    );
};

export default Blog;
