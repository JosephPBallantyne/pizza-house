import React, { useState } from 'react';
import { Pizza } from '../types/pizza';

const BasketContext = React.createContext<any>(null);

export const BasketContextProvider: React.FC = ({
  children,
}: React.PropsWithChildren<unknown>) => {
  const [basketItems, setBasketItems] = useState<Pizza[]>([]);
  return (
    <BasketContext.Provider value={{ basketItems, setBasketItems }}>
      {children}
    </BasketContext.Provider>
  );
};

export default BasketContext;
