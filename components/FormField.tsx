import EyeIcon from '@heroicons/react/solid/EyeIcon';
import EyeOffIcon from '@heroicons/react/solid/EyeOffIcon';
import { FormControl, FormErrorMessage } from '@chakra-ui/form-control';
import {
    Input,
    InputGroup,
    InputRightElement,
    InputProps as ChakraInputProps,
    InputLeftAddon,
    InputRightAddon,
} from '@chakra-ui/input';
import React, { useState } from 'react';
import Icon from '@chakra-ui/icon';
import {
    FormLabel,
    Select,
    SelectProps as ChakraSelectProps,
    Textarea,
    TextareaProps as ChakraTextareaProps,
} from '@chakra-ui/react';

interface FormFieldProps extends ChakraInputProps {
    isInvalid: boolean;
    name: string;
    placeholder?: string;
    onChange: React.ChangeEventHandler;
    value: string | ReadonlyArray<string> | number;
    error?: string;
    type?: 'text' | 'select' | 'password' | 'number' | 'date' | 'textarea';
    children?: React.ReactNodeArray;
    label?: string;
    leftAddon?: React.ReactNode;
    rightAddon?: React.ReactNode;
}

const FormField = (props: FormFieldProps) => {
    const {
        isInvalid,
        name,
        placeholder,
        error,
        type = 'text',
        children,
        label,
        leftAddon,
        rightAddon,
    } = props;

    const [showPassword, setShowPassword] = useState(false);

    if (type === 'select') {
        return (
            <FormControl mb={{ base: 3 }} isInvalid={isInvalid}>
                <FormLabel htmlFor={name}>{label}</FormLabel>
                <Select
                    placeholder={placeholder}
                    size={'lg'}
                    _focus={{
                        borderWidth: 2,
                        borderColor: isInvalid ? 'red' : 'green.500',
                    }}
                    {...(props as ChakraSelectProps)}
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
                {type === 'textarea' ? (
                    <Textarea
                        placeholder={placeholder}
                        type={showPassword ? 'text' : type}
                        size={'lg'}
                        _focus={{
                            borderWidth: 2,
                            borderColor: isInvalid ? 'red' : 'green.500',
                        }}
                        autoComplete="off"
                        {...(props as ChakraTextareaProps)}
                    >
                        {children}
                    </Textarea>
                ) : (
                    <Input
                        placeholder={placeholder}
                        type={showPassword ? 'text' : type}
                        size={'lg'}
                        _focus={{
                            borderWidth: 2,
                            borderColor: isInvalid ? 'red' : 'green.500',
                        }}
                        autoComplete="off"
                        {...props}
                    >
                        {children}
                    </Input>
                )}
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
