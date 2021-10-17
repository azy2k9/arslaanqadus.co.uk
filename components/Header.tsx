import React from 'react';

import { Flex, Heading, Link } from '@chakra-ui/layout';
import {
    IconButton,
    useColorMode,
    useDisclosure,
    useBreakpointValue,
    Drawer,
    DrawerOverlay,
    DrawerHeader,
    DrawerBody,
    DrawerContent,
    DrawerCloseButton,
    Icon,
} from '@chakra-ui/react';
import {
    BsTwitter,
    BsLinkedin,
    BsGithub,
    BsMoonStarsFill,
    BsSunFill,
} from 'react-icons/bs';
import { HiMenu } from 'react-icons/hi';
import { CgClose } from 'react-icons/cg';
import ButtonLink from './ButtonLink';

const Header = () => {
    const { colorMode, toggleColorMode } = useColorMode();
    const { isOpen, onOpen, onClose } = useDisclosure();
    const drawerSize = useBreakpointValue({ base: 'full', md: 'sm' });
    const headingSize = useBreakpointValue({
        base: 'sm',
        sm: 'md',
        md: 'lg',
        lg: 'xl',
    });
    const buttonSize = useBreakpointValue({
        base: 'sm',
        sm: 'md',
        md: 'lg',
    });

    return (
        <Flex justify="space-between" alignItems="center" h="10vh">
            <Flex w="xs">
                <Link target="_blank" href="https://twitter.com/reactdevjnr">
                    <IconButton
                        aria-label="Twitter"
                        variant="ghost"
                        ml={['2', '4']}
                        size={buttonSize}
                    >
                        <BsTwitter />
                    </IconButton>
                </Link>
                <Link
                    target="_blank"
                    href="https://www.linkedin.com/in/arslaan-qadus/"
                >
                    <IconButton
                        aria-label="Linkedin"
                        variant="ghost"
                        mx="1"
                        size={buttonSize}
                    >
                        <BsLinkedin />
                    </IconButton>
                </Link>
                <Link target="_blank" href="https://github.com/azy2k9">
                    <IconButton
                        aria-label="Github"
                        variant="ghost"
                        mx="1"
                        size={buttonSize}
                    >
                        <BsGithub />
                    </IconButton>
                </Link>
            </Flex>
            <Flex w="md" justify="center">
                <Heading size={headingSize}>Arslaan Qadus</Heading>
            </Flex>
            <Flex w="xs" justify="flex-end" mr="4" alignItems="center">
                <IconButton
                    aria-label="Github"
                    variant="ghost"
                    onClick={toggleColorMode}
                    size={buttonSize}
                >
                    {colorMode === 'light' ? (
                        <BsMoonStarsFill />
                    ) : (
                        <BsSunFill />
                    )}
                </IconButton>
                <IconButton
                    aria-label="menu"
                    variant="ghost"
                    onClick={onOpen}
                    size={buttonSize}
                >
                    {isOpen ? (
                        <Icon as={CgClose} />
                    ) : (
                        <Icon as={HiMenu} fontSize="xl" />
                    )}
                </IconButton>
                <Drawer
                    isOpen={isOpen}
                    placement="right"
                    onClose={onClose}
                    size={drawerSize}
                >
                    <DrawerOverlay />
                    <DrawerContent>
                        <DrawerCloseButton />
                        <DrawerHeader />
                        <DrawerBody>
                            <Flex
                                justifyContent="center"
                                py={{ base: 2 }}
                                flexDir="column"
                                height="100%"
                                alignItems="normal"
                            >
                                <ButtonLink variant="ghost" href="/" py="20">
                                    Home
                                </ButtonLink>
                                <ButtonLink
                                    variant="ghost"
                                    href="/projects"
                                    py="20"
                                >
                                    Projects
                                </ButtonLink>
                                <ButtonLink
                                    variant="ghost"
                                    href="/blog"
                                    py="20"
                                >
                                    Blog
                                </ButtonLink>
                                <ButtonLink
                                    variant="ghost"
                                    href="/about"
                                    py="20"
                                >
                                    About Me
                                </ButtonLink>
                                <ButtonLink
                                    variant="ghost"
                                    href="/contact"
                                    py="20"
                                >
                                    Contact
                                </ButtonLink>
                            </Flex>
                        </DrawerBody>
                    </DrawerContent>
                </Drawer>
            </Flex>
        </Flex>
    );
};

export default Header;
