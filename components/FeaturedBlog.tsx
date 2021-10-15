import Icon from '@chakra-ui/icon';
import { Badge, Flex, Heading, Text } from '@chakra-ui/layout';
import { useBreakpointValue } from '@chakra-ui/media-query';
import { FaArrowRight } from 'react-icons/fa';
import IconButtonLink from './IconButtonLink';

const FeaturedBlog = () => {
    const headingSize = useBreakpointValue({ base: 'xl', lg: '2xl' });

    return (
        <Flex
            px="3rem"
            py="4rem"
            flexDir="column"
            alignItems={['center', null, 'flex-start']}
        >
            <Badge
                colorScheme="linkedin"
                py="0.3rem"
                px="1rem"
                borderRadius="lg"
            >
                Featured
            </Badge>
            <Heading
                size={headingSize}
                textAlign="center"
                fontWeight="bold"
                pt="4"
            >
                Travelling in style, learning along the way...
            </Heading>
            <Text
                pt="2rem"
                pb="1rem"
                textAlign={['center', null, 'left']}
                maxW={['container.md', null, null, 'container.lg']}
            >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
                soluta vel doloribus libero quisquam? Ab eveniet alias ipsum
                impedit sunt inventore excepturi nostrum iure.
            </Text>
            <Flex justify="center">
                <IconButtonLink
                    href="#"
                    aria-label="article"
                    borderRadius="full"
                    pt="2rem"
                    pb="2rem"
                    pl="1.25rem"
                    pr="1.25rem"
                >
                    <Icon as={FaArrowRight} boxSize="1.5rem" />
                </IconButtonLink>
            </Flex>
        </Flex>
    );
};

export default FeaturedBlog;
