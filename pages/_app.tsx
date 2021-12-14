import '../css/index.css';
import type { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';
// import smoothscroll from 'smoothscroll-polyfill';
// import { useEffect } from 'react';

function MyApp({ Component, pageProps }: AppProps) {
    // useEffect(() => {        
    //     // Polyfill the smooth scrolling behavior on iOS
    //     smoothscroll.polyfill();
    // }, []);
    
    return (
        <ChakraProvider>
            <Component {...pageProps} />
        </ChakraProvider>
    );
}
export default MyApp;
