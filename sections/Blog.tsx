import { Heading, useBreakpointValue, Box } from '@chakra-ui/react';
import React from 'react';
import BlogPostList from '../components/BlogPostList';
import FeaturedPost from '../components/FeaturedPost';

const Blog = () => {
    const headingSize = useBreakpointValue({ base: 'md', md: 'lg' });

    return (
        <Box className="blog">
            <FeaturedPost
                title="What is React?"
                type="blog"
                previewText="React does not attempt to provide a complete 'application library'. It is designed specifically for building user interfaces and therefore does not include many of the tools some developers might consider necessary to build an application. This allows the choice of whichever libraries the developer prefers to accomplish tasks such as performing network access or local data storage. Common patterns of usage have emerged as the library matures."
                direction="right"
                tags={[{ tag: 'React', colorScheme: 'cyan' }]}
            />
            <FeaturedPost
                title="JavaScript and Web Browsers"
                type="blog"
                previewText="Web browsers are capable of running JavaScript outside the sandbox, with the privileges necessary to, for example, create or delete files. Such privileges are not intended to be granted to code from the Web. Incorrectly granting privileges to JavaScript from the Web has played a role in vulnerabilities in both Internet Explorer"
                tags={[
                    { tag: 'New', colorScheme: 'green' },
                    { tag: 'Featured', colorScheme: 'pink' },
                ]}
            />
            <Heading textAlign="center" size={headingSize}>
                Some other blog posts...
            </Heading>
            <BlogPostList />
        </Box>
    );
};

export default Blog;
