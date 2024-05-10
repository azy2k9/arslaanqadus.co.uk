import React from 'react';
import { Flex, Heading } from '@chakra-ui/layout';
import {
    IconButton,
    useColorMode,
    useBreakpointValue,
    Drawer,
    DrawerOverlay,
    DrawerHeader,
    DrawerBody,
    DrawerContent,
    DrawerCloseButton,
    Icon,
} from '@chakra-ui/react';
import { useDisclosure } from '@chakra-ui/hooks';
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
import IconButtonLink from './IconButtonLink';

const Header = () => {
    const { colorMode, toggleColorMode } = useColorMode();
    const { isOpen, onOpen, onClose } = useDisclosure();
    const drawerSize = useBreakpointValue({ base: 'full', md: 'sm' });
    const headingSize = useBreakpointValue({
        base: 'md',
        sm: 'lg',
    });
    const buttonSize = useBreakpointValue({
        base: '1rem',
        md: '1.25rem',
    });

    const containers = useBreakpointValue({
        base: '7rem',
        xs: '7rem',
        sm: '12rem',
        md: '16rem',
    });

    return (
        <Flex alignItems="center" pt={['2', '4']}>
            <Flex w={containers} justifyContent="space-evenly">
                <IconButtonLink
                    aria-label="Twitter"
                    target="_blank"
                    href="https://twitter.com/reactdevjnr"
                    variant="ghost"
                    fontSize={buttonSize}
                    px={['0', '0', '2', '4']}
                    py={['0', '0', '3', '6']}
                >
                    <BsTwitter />
                </IconButtonLink>
                <IconButtonLink
                    aria-label="Linkedin"
                    target="_blank"
                    href="https://www.linkedin.com/in/arslaan-qadus/"
                    variant="ghost"
                    fontSize={buttonSize}
                    px={['0', '0', '2', '4']}
                    py={['0', '0', '3', '6']}
                >
                    <BsLinkedin />
                </IconButtonLink>
                <IconButtonLink
                    aria-label="Github"
                    target="_blank"
                    href="https://github.com/azy2k9"
                    variant="ghost"
                    fontSize={buttonSize}
                    px={['0', '0', '2', '4']}
                    py={['0', '0', '3', '6']}
                >
                    <BsGithub />
                </IconButtonLink>
            </Flex>
            <Flex w="full" justify="center">
                <IconButtonLink
                    aria-label="Home"
                    href="/"
                    variant="ghost"
                    p={['4', '8']}
                >
                    <Heading size={headingSize} _hover={{ cursor: 'pointer' }}>
                        Arslaan Qadus
                    </Heading>
                </IconButtonLink>
            </Flex>
            <Flex w={containers} justifyContent="flex-end" alignItems="center">
                <IconButton
                    aria-label="Github"
                    variant="ghost"
                    onClick={toggleColorMode}
                    fontSize={buttonSize}
                    px={['0', '0', '2', '4']}
                    py={['0', '0', '3', '6']}
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
                    fontSize={buttonSize}
                    px={['0', '0', '2', '4']}
                    py={['0', '0', '3', '6']}
                >
                    {isOpen ? (
                        <Icon as={CgClose} />
                    ) : (
                        <Icon as={HiMenu} fontSize={buttonSize} />
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
                                flexDir="column"
                                height="90vh"
                                alignItems="normal"
                            >
                                <ButtonLink variant="ghost" href="/" py="3rem">
                                    Home
                                </ButtonLink>
                                <ButtonLink
                                    variant="ghost"
                                    href="/project"
                                    py="3rem"
                                >
                                    Projects
                                </ButtonLink>
                                <ButtonLink
                                    variant="ghost"
                                    href="/blog"
                                    py="3rem"
                                >
                                    Blog
                                </ButtonLink>
                                <ButtonLink
                                    variant="ghost"
                                    href="/about"
                                    py="3rem"
                                >
                                    About Me
                                </ButtonLink>
                                <ButtonLink
                                    variant="ghost"
                                    href="/contact"
                                    py="3rem"
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
