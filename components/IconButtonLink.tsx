import {
    IconButton as ChakraIconButton,
    IconButtonProps as ChakraIconButtonProps,
} from '@chakra-ui/button';
import { LinkProps as ChakraLinkProps } from '@chakra-ui/react';
import NextLink from 'next/link';
import React from 'react';

interface IIconButtonLink {
    href: string;
}

const IconButtonLink = (
    props: IIconButtonLink & ChakraIconButtonProps & ChakraLinkProps
) => {
    const { children, href, target, ...rest } = props;

    if (target) {
        return (
            <NextLink href={href} passHref>
                <a target={target}>
                    <ChakraIconButton {...rest}>{children}</ChakraIconButton>
                </a>
            </NextLink>
        );
    }

    return (
        <NextLink href={href} passHref>
            <ChakraIconButton {...rest}>{children}</ChakraIconButton>
        </NextLink>
    );
};

export default IconButtonLink;
