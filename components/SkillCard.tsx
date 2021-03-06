import { useDisclosure } from '@chakra-ui/hooks';
import { Flex, Heading, Text } from '@chakra-ui/layout';
import { ThemeTypings } from '@chakra-ui/styled-system';
import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Theme } from '../theme';

interface IProps {
    title: string;
    skills: Array<string>;
    color: ThemeTypings['colors'];
}

const SkillCard = ({ title, skills, color }: IProps) => {
    const {
        isOpen: isHovering,
        onOpen: onHover,
        onClose: offHover,
    } = useDisclosure();

    return (
        <Flex
            flexDir="column"
            alignItems="center"
            bgColor={color}
            borderRadius="xl"
            color="white"
            py="2rem"
            px="1rem"
            my="1rem"
            mx={isHovering ? "0.25rem" : "0.5rem"}
            transition="0.2s linear"
            onMouseEnter={onHover}
            onMouseLeave={offHover}
        >
            <Heading textAlign="center" size={"lg"}>{title}</Heading>
            <Flex flexDir="column" pt="2rem" flex="1" placeContent="center">
                {skills.map((skill) => (
                    <Text
                        textAlign="center"
                        key={uuidv4()}
                        py="0.25rem"
                        fontWeight="semibold"
                    >
                        {skill}
                    </Text>
                ))}
            </Flex>
        </Flex>
    );
};

export default SkillCard;
