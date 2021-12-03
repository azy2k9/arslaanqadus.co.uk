import React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import {
    solarizedDark,
    solarizedLight,
} from 'react-syntax-highlighter/dist/cjs/styles/hljs';
import { useColorMode, useColorModeValue } from '@chakra-ui/color-mode';
import ChakraNextLink from '../components/ChakraNextLink';
import { RichText } from '@graphcms/rich-text-react-renderer';
import { Box, Code, Container, Heading, Text } from '@chakra-ui/layout';
import { RichTextContent } from '@graphcms/rich-text-types';
import ChakraNextImage from '../components/Image';

const ChakraRichTextRenderer: React.FC<{ content: RichTextContent }> = ({
    content,
}) => {
    const { colorMode } = useColorMode();
    const bgColor = useColorModeValue('gray.300', 'gray.700');
    return (
        <RichText
            content={content}
            renderers={{
                a: ({
                    children,
                    openInNewTab,
                    href = '',
                    title,
                    rel,
                    ...rest
                }) => {
                    if (href.match(/^https?:\/\/|^\/\//i)) {
                        return (
                            <ChakraNextLink
                                href={href}
                                target={openInNewTab ? '_blank' : '_self'}
                                rel={rel || 'noopener noreferrer'}
                                {...rest}
                            >
                                {children}
                            </ChakraNextLink>
                        );
                    }

                    return (
                        <ChakraNextLink
                            href={href as string}
                            target={openInNewTab ? '_blank' : '_self'}
                        >
                            {title}
                        </ChakraNextLink>
                    );
                },
                blockquote: ({ children }) => {
                    return (
                        <Container
                            px="6"
                            pt="3"
                            pb="6"
                            my="8"
                            mx="0"
                            bgColor={bgColor}
                            borderRadius="md"
                            width="fit-content"
                        >
                            <Text as="span" fontSize="3xl">
                                &ldquo;
                            </Text>
                            <Text as="span"> {children} </Text>
                            <Text as="span" fontSize="3xl">
                                &rdquo;
                            </Text>
                        </Container>
                    );
                },
                code: ({ children }) => {
                    return (
                        <Code variant="solid" p="1.5">
                            {children}
                        </Code>
                    );
                },
                code_block: ({ children }) => {
                    return (
                        <Box py="8">
                            <SyntaxHighlighter
                                style={
                                    colorMode === 'light'
                                        ? solarizedLight
                                        : solarizedDark
                                }
                                showLineNumbers
                                language="javascript"
                                wrapLongLines
                            >
                                {/* @ts-ignore: This should just be valid every single time... */}
                                {children?.props.content[0].text}
                            </SyntaxHighlighter>
                        </Box>
                    );
                },
                h1: ({ children }) => {
                    return (
                        <Heading py="4" as="h1" size="2xl">
                            {children}
                        </Heading>
                    );
                },
                h2: ({ children }) => {
                    return (
                        <Heading py="4" as="h2" size="xl">
                            {children}
                        </Heading>
                    );
                },
                h3: ({ children }) => {
                    return (
                        <Heading py="4" as="h3" size="lg">
                            {children}
                        </Heading>
                    );
                },
                h4: ({ children }) => {
                    return (
                        <Heading py="4" as="h4" size="md">
                            {children}
                        </Heading>
                    );
                },
                h5: ({ children }) => {
                    return (
                        <Heading py="4" as="h5" size="sm">
                            {children}
                        </Heading>
                    );
                },
                h6: ({ children }) => {
                    return (
                        <Heading py="4" as="h6" size="xs">
                            {children}
                        </Heading>
                    );
                },
                img: (props) => {
                    const {
                        src,
                        altText,
                        width,
                        height,
                        title,
                        handle,
                        mimeType,
                    } = props;

                    return (
                        <Box p="4">
                            <ChakraNextImage
                                src={src as string}
                                width={width}
                                height={height}
                                title={title}
                                alt={altText}
                            />
                        </Box>
                    );
                },
            }}
        />
    );
};

export default ChakraRichTextRenderer;