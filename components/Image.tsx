import { Box, BoxProps, useColorModeValue } from '@chakra-ui/react';
import * as React from 'react';
import NextImage, { ImageProps } from 'next/image';

export type NextChakraImageProps = Omit<BoxProps, 'as'> & ImageProps;

const ChakraNextImage = (props: NextChakraImageProps) => {
    const { src, alt, ...rest } = props;
    return (
        <Box rounded={'md'} overflow={'hidden'}>
            <Box position="relative" {...rest} mt={-6} mx={-6}>
                <NextImage
                    objectFit="cover"
                    layout="fill"
                    src={src}
                    alt={alt}
                />
            </Box>
        </Box>
    );
};

export default ChakraNextImage;
