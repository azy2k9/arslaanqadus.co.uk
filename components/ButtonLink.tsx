import {
    Button as ChakraButton,
    ButtonProps as ChakraButtonProps,
} from '@chakra-ui/button';
import NextLink from 'next/link';
import React from 'react';

interface IButtonLink {
    href: string;
}

const ButtonLink = (props: IButtonLink & ChakraButtonProps) => {
    const { children, href, ...rest } = props;

    return (
        <NextLink href={href} passHref>
            <ChakraButton {...rest}>{children}</ChakraButton>
        </NextLink>
    );
};

export default ButtonLink;
