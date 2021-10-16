import React, { MouseEventHandler } from 'react';
import { IconButton } from '@chakra-ui/react';
import Icon from '@chakra-ui/icon';
import { FaArrowDown } from 'react-icons/fa';
import { keyframes } from '@emotion/react';

const bounce = keyframes`
    0%, 20%, 50%, 80%, 100% {
        transform: translateY(0);
    }
    40% {
        transform: translateY(-30px);
    }
    60% {
        transform: translateY(-15px);
    }
`;

interface IProps {
    onClick: MouseEventHandler<HTMLButtonElement>;
}

const ScrollDown = ({ onClick }: IProps) => {
    const animation = `${bounce} infinite 2s linear`;
    return (
        <IconButton
            animation={animation}
            aria-label="scroll-down"
            variant="ghost"
            onClick={onClick}
        >
            <Icon as={FaArrowDown} fontSize={['xl', 'xx-large']} />
        </IconButton>
    );
};

export default ScrollDown;
