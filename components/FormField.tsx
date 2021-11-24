import { EyeIcon, EyeOffIcon } from '@heroicons/react/solid';
import { FormControl, FormErrorMessage } from '@chakra-ui/form-control';
import {
    Input,
    InputGroup,
    InputRightElement,
    InputProps as ChakraInputProps,
} from '@chakra-ui/input';
import React, { useState } from 'react';

import Icon from '@chakra-ui/icon';
import {
    FormLabel,
    InputLeftAddon,
    InputRightAddon,
    Select,
} from '@chakra-ui/react';

interface FormFieldProps extends ChakraInputProps {
    isInvalid: boolean;
    name: string;
    placeholder?: string;
    onChange: React.ChangeEventHandler;
    value: string | ReadonlyArray<string> | number;
    error?: string;
    type?: 'text' | 'select' | 'password' | 'number' | 'date';
    children?: React.ReactNodeArray;
    label?: string;
    leftAddon?: React.ReactNode;
    rightAddon?: React.ReactNode;
}

const FormField = ({
    isInvalid,
    name,
    placeholder,
    onChange,
    value,
    error,
    type = 'text',
    children,
    label,
    leftAddon,
    rightAddon,
}: FormFieldProps) => {
    const [showPassword, setShowPassword] = useState(false);

    if (type === 'select') {
        return (
            <FormControl mb={{ base: 3 }} isInvalid={isInvalid}>
                <FormLabel htmlFor={name}>{label}</FormLabel>
                <Select
                    placeholder={placeholder}
                    onChange={onChange}
                    value={value}
                    name={name}
                    size={'lg'}
                    _focus={{
                        borderWidth: 2,
                        borderColor: isInvalid ? 'red' : 'green.500',
                    }}
                >
                    {children}
                </Select>
                <FormErrorMessage>{error}</FormErrorMessage>
            </FormControl>
        );
    }

    return (
        <FormControl mb={{ base: 3 }} isInvalid={isInvalid}>
            <FormLabel htmlFor={name}>{label}</FormLabel>
            <InputGroup>
                {leftAddon && <InputLeftAddon>{leftAddon}</InputLeftAddon>}
                <Input
                    name={name}
                    placeholder={placeholder}
                    onChange={onChange}
                    value={value}
                    type={showPassword ? 'text' : type}
                    size={'lg'}
                    _focus={{
                        borderWidth: 2,
                        borderColor: isInvalid ? 'red' : 'green.500',
                    }}
                    // _hover={{}}
                    autoComplete="off"
                >
                    {children}
                </Input>
                {type === 'password' && (
                    <InputRightElement
                        pointerEvents="none"
                        pr="4"
                        onClick={() => setShowPassword(!showPassword)}
                    >
                        {showPassword ? (
                            <Icon
                                as={EyeIcon}
                                color="gray.400"
                                _hover={{
                                    color: 'gray.600',
                                }}
                                boxSize={6}
                            />
                        ) : (
                            <Icon
                                as={EyeOffIcon}
                                color="gray.400"
                                _hover={{
                                    color: 'gray.600',
                                }}
                                boxSize={6}
                            />
                        )}
                    </InputRightElement>
                )}
                {rightAddon && <InputRightAddon>{rightAddon}</InputRightAddon>}
            </InputGroup>
            <FormErrorMessage>{error}</FormErrorMessage>
        </FormControl>
    );
};

export default FormField;
