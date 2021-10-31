import { useDisclosure } from '@chakra-ui/hooks';
import { Box, Flex, Heading, Text } from '@chakra-ui/layout';
import { ThemeTypings } from '@chakra-ui/styled-system';
import { ScaleFade } from '@chakra-ui/transition';
import React from 'react';
import { v4 as uuidv4 } from 'uuid';

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
            py="2rem"
            m={isHovering ? '1.5rem' : '2rem'}
            transition="0.2s linear"
            onMouseEnter={onHover}
            onMouseLeave={offHover}
        >
            <Heading>{title}</Heading>
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
