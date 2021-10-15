import {
	IconButton as ChakraIconButton,
	IconButtonProps as ChakraIconButtonProps,
} from "@chakra-ui/button";
import NextLink from "next/link";
import React from "react";

interface IIconButtonLink {
	href: string;
}

const IconButtonLink = (props: IIconButtonLink & ChakraIconButtonProps) => {
	const { children, href, ...rest } = props;

	return (
		<NextLink href={href} passHref>
			<ChakraIconButton {...rest}>{children}</ChakraIconButton>
		</NextLink>
	);
};

export default IconButtonLink;
