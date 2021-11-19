import { Link as ChakraLink, LinkProps } from '@chakra-ui/react';
import Link from 'next/link';
import React from 'react';

interface ChakraNextLinkProps extends LinkProps {
    children?: string | React.ReactNode;
    href: string;
    _hover?: LinkProps;
}

const ChakraNextLink = ({
    href,
    children,
    _hover,
    ...props
}: ChakraNextLinkProps) => {
    return (
        <Link passHref href={href}>
            <ChakraLink
                fontWeight="bold"
                color="teal.400"
                _hover={{ color: 'teal.600' }}
                {...props}
            >
                {children}
            </ChakraLink>
        </Link>
    );
};

export default ChakraNextLink;
