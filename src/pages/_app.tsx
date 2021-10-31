import '../../styles/globals.css';
import type { AppProps } from 'next/app';
import { BasketContextProvider } from '../context/basketProvider';
import { Pizza } from '../types/pizza';
import React, { useState } from 'react';

function MyApp({ Component, pageProps }: AppProps) {
  const [basketItems, setBasketItems] = useState<Pizza[]>([]);
  return (
    <BasketContextProvider value={{ basketItems, setBasketItems }}>
      <Component {...pageProps} />;
    </BasketContextProvider>
  );
}

export default MyApp;
