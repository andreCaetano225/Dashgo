import { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react'
import { theme } from '../styles/theme';
import { SideBarConstextProvider } from '../components/Contexts/SideBarContexts';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <SideBarConstextProvider>
        <Component {...pageProps} />
      </SideBarConstextProvider>
    </ChakraProvider>
  )
}

export default MyApp
