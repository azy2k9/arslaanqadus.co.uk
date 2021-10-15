import Icon from '@chakra-ui/icon';
import { Badge, Flex, Heading, Text } from '@chakra-ui/layout';
import { useBreakpointValue } from '@chakra-ui/media-query';
import { ThemeTypings } from '@chakra-ui/styled-system';
import { FaArrowRight } from 'react-icons/fa';
import IconButtonLink from './IconButtonLink';

interface IProps {
    title: string;
    previewText: string;
    direction?: 'left' | 'right';
    tags?: Array<{
        tag: string;
        colorScheme: ThemeTypings['colorSchemes'];
    }>;
}
const FeaturedBlog = ({
    title,
    previewText,
    direction = 'left',
    tags = [],
}: IProps) => {
    const headingSize = useBreakpointValue({ base: 'xl', lg: '2xl' });
    const flexDirection = direction === 'left' ? 'flex-start' : 'flex-end';

    return (
        <Flex
            px="3rem"
            py="1rem"
            flexDir="column"
            alignItems={['center', null, flexDirection]}
        >
            <Flex>
                {tags.map(({ tag, colorScheme }) => (
                    <Badge
                        key={tag}
                        colorScheme={colorScheme}
                        py="0.3rem"
                        px="1rem"
                        borderRadius="lg"
                        mr="0.25rem"
                    >
                        {tag}
                    </Badge>
                ))}
            </Flex>
            <Heading
                size={headingSize}
                textAlign={['center', null, direction]}
                fontWeight="bold"
                pt="4"
            >
                {title}
            </Heading>
            <Text
                pt="2rem"
                pb="1rem"
                textAlign={['center', null, direction]}
                maxW={['container.md', null, null, 'container.lg']}
            >
                {previewText}
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
