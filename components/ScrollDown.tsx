import React from 'react';
import { Box } from '@chakra-ui/react';
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

const ScrollDown = () => {
    const animation = `${bounce} infinite 2s linear`;
    return (
        <Box animation={animation}>
            <Icon
                as={FaArrowDown}
                fontSize={['xl', null, 'xx-large', 'xxx-large']}
            />
        </Box>
    );
};

export default ScrollDown;
