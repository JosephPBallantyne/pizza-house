import React from 'react';
import { Pizza } from '../types/pizza';

const BasketContext = React.createContext<any>(null);

export const BasketContextProvider: React.FC<any> = ({
  children,
  value,
}: React.PropsWithChildren<{
  value: {
    basketItems: Pizza[];
    setBasketItems: React.Dispatch<React.SetStateAction<Pizza[]>>;
  };
}>) => {
  return (
    <BasketContext.Provider value={value}>{children}</BasketContext.Provider>
  );
};

export default BasketContext;
