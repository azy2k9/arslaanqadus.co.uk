import { Heading, useBreakpointValue, Box, SimpleGrid } from '@chakra-ui/react';
import React from 'react';
import FeaturedPost from '../components/FeaturedPost';

const Projects = () => {
    const headingSize = useBreakpointValue({ base: 'md', md: 'lg' });

    return (
        <Box>
            <SimpleGrid columns={[1, null, null, 2]}>
                <FeaturedPost
                    title="Building My Website"
                    type="project"
                    previewText="Building my own personal website was kind of like marmite, at times it was great fun! And at times I just couldn't be bothered to finish it, in fact i've tried to do this 3 times before."
                    direction="center"
                    tags={[
                        { tag: 'React', colorScheme: 'cyan' },
                        { tag: 'Personal', colorScheme: 'pink' },
                        { tag: 'Project', colorScheme: 'orange' },
                    ]}
                />
                <FeaturedPost
                    title="JavaScript and Web Browsers"
                    type="project"
                    previewText="Web browsers are capable of running JavaScript outside the sandbox, with the privileges necessary to, for example, create or delete files. Such privileges are not intended to be granted to code from the Web. Incorrectly granting privileges to JavaScript from the Web has played a role in vulnerabilities in both Internet Explorer"
                    direction="center"
                    tags={[{ tag: 'New', colorScheme: 'green' }]}
                />
            </SimpleGrid>
        </Box>
    );
};

export default Projects;
