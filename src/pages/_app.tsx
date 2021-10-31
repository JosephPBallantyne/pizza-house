import '../../styles/globals.css';
import type { AppProps } from 'next/app';
import { BasketContextProvider } from '../context/basketProvider';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <BasketContextProvider>
      <Component {...pageProps} />;
    </BasketContextProvider>
  );
}

export default MyApp;
