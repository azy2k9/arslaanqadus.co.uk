import { ThemeConfig } from '@chakra-ui/theme';

const config: ThemeConfig = {
    initialColorMode: 'dark',
    useSystemColorMode: false,
};
const Theme = {
    colors: {
        primary: '#200065',
    },
    config,
    fonts: {
        body: 'Roboto, sans-serif',
        heading: 'Georgia, serif',
        mono: 'Menlo, monospace',
    },
    fontSizes: {
        xs: '0.75rem',
        sm: '0.875rem',
        md: '1rem',
        lg: '1.125rem',
        xl: '1.25rem',
        '2xl': '1.5rem',
        '3xl': '1.875rem',
        '4xl': '2.25rem',
        '5xl': '3rem',
        '6xl': '3.75rem',
        '7xl': '4.5rem',
        '8xl': '6rem',
        '9xl': '8rem',
    },
};

export { Theme };
