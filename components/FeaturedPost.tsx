import Icon from '@chakra-ui/icon';
import { Badge, Flex, Heading, Text } from '@chakra-ui/layout';
import { ThemeTypings } from '@chakra-ui/styled-system';
import { FaArrowRight } from 'react-icons/fa';
import { IAsset } from '../generated/types';
import IconButtonLink from './IconButtonLink';
import NextImage from 'next/image';
import { useColorModeValue } from '@chakra-ui/react';

interface IProps {
    title: string;
    previewText: string;
    direction?: 'left' | 'right' | 'center';
    type?: 'blog' | 'project';
    img?: IAsset;
    slug: string;
    tags: Array<{
        id: string;
        value: string;
        colorScheme: ThemeTypings['colorSchemes'];
    }>;
}

const FeaturedPost = ({
    title,
    previewText,
    direction = 'left',
    type = 'blog',
    tags = [],
    img,
    slug,
}: IProps) => {
    const flexDirection =
        direction === 'left'
            ? 'start'
            : direction === 'center'
            ? 'center'
            : 'end';
    const bgColor = useColorModeValue('gray.200', 'gray.700');

    return (
        <Flex
            flexDir="column"
            m={'2'}
            px={type === 'blog' ? '1rem' : 'initial'}
            alignItems={['center', null, flexDirection]}
            bgColor={type === 'project' ? bgColor : 'inherit'}
            borderRadius={'lg'}
            boxShadow={type === 'project' ? 'lg' : 'inherit'}
        >
            {type === 'project' && img && (
                <Flex
                    h={['xs', null, 'md']}
                    w="full"
                    position={'relative'}
                    overflow="hidden"
                    borderTopRadius={'lg'}
                >
                    <NextImage
                        objectFit="cover"
                        layout="fill"
                        src={img.url}
                        alt={img.fileName}
                        priority
                    />
                </Flex>
            )}
            <Heading
                size={'lg'}
                textAlign={['center', null, direction]}
                fontWeight="bold"
                pt={type === 'project' ? '1rem' : 'initial'}
                px={['4']}
            >
                {title}
            </Heading>
            <Flex py="0.5rem">
                {tags.map(({ id, value, colorScheme }) => (
                    <Badge
                        key={id}
                        colorScheme={colorScheme}
                        py="0.3rem"
                        px="1rem"
                        borderRadius="lg"
                        mr="0.25rem"
                    >
                        <Text>{value}</Text>
                    </Badge>
                ))}
            </Flex>
            <Text
                py="2"
                px={['2', '4', '8']}
                textAlign={['center', null, flexDirection]}
            >
                {previewText}
            </Text>
            <Flex justify="center" pb="2">
                <IconButtonLink
                    href={slug}
                    aria-label="article"
                    borderRadius="full"
                    pt="1rem"
                    pb="1rem"
                >
                    <Icon as={FaArrowRight} boxSize="1.5rem" />
                </IconButtonLink>
            </Flex>
        </Flex>
    );
};

export default FeaturedPost;
