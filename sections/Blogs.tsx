import { Heading, Center, Box } from '@chakra-ui/react';
import React from 'react';
import FeaturedPost from '../components/FeaturedPost';
import { IBlog } from '../generated/types';
interface Props {
    blogs: IBlog[];
}

const Blogs = ({ blogs }: Props) => {
    return (
        <>
            <Center>
                <Heading pt="24" pb="8">Recent Blog Posts</Heading>
            </Center>
            <Box>
                {blogs.map((blog, index) => (
                    <FeaturedPost
                        key={blog.id}
                        title={blog.title}
                        type={'blog'}
                        previewText={blog.introduction}
                        direction={index % 2 === 0 ? 'right' : 'left'}
                        tags={blog.tags}
                        slug={'/blog/' + blog.slug}
                    />
                ))}
            </Box>
        </>
    );
};

export default Blogs;
