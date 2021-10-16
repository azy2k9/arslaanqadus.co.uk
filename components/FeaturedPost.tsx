import Icon from '@chakra-ui/icon';
import { Badge, Flex, Heading, Text } from '@chakra-ui/layout';
import { useBreakpointValue } from '@chakra-ui/media-query';
import { ThemeTypings } from '@chakra-ui/styled-system';
import { FaArrowRight } from 'react-icons/fa';
import IconButtonLink from './IconButtonLink';
import ChakraNextImage from './Image';
interface IProps {
    title: string;
    previewText: string;
    direction?: 'left' | 'right' | 'center';
    type?: 'blog' | 'project';
    tags?: Array<{
        tag: string;
        colorScheme: ThemeTypings['colorSchemes'];
    }>;
}
const FeaturedPost = ({
    title,
    previewText,
    direction = 'left',
    type = 'blog',
    tags = [],
}: IProps) => {
    const headingSize = useBreakpointValue({ base: 'xl', lg: '2xl' });
    const imageSize = useBreakpointValue(['sm', 'lg', '2xl', '5xl']);
    const flexDirection =
        direction === 'left'
            ? 'flex-start'
            : direction === 'center'
            ? 'center'
            : 'flex-end';

    return (
        <Flex
            flexDir="column"
            m="1rem"
            px={type === 'blog' ? '1rem' : 'initial'}
            borderRadius="md"
            alignItems={['center', null, flexDirection]}
        >
            {type === 'project' && (
                <Flex w="full" justify="center">
                    <ChakraNextImage
                        src="https://picsum.photos/801/1200"
                        h={['250px', '300px', 'sm', 'lg']}
                        width={imageSize}
                    />
                </Flex>
            )}
            <Flex py="0.5rem">
                {tags.map(({ tag, colorScheme }) => (
                    <Badge
                        key={tag}
                        colorScheme={colorScheme}
                        py="0.3rem"
                        px="1rem"
                        borderRadius="lg"
                        mr="0.25rem"
                    >
                        <Text>{tag}</Text>
                    </Badge>
                ))}
            </Flex>
            <Heading
                size={headingSize}
                textAlign={['center', null, direction]}
                fontWeight="bold"
                pt={type === 'project' ? '0.5rem' : 'initial'}
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

export default FeaturedPost;
