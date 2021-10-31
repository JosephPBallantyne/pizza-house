export interface Pizza {
  name: string;
  price: number;
  toppings: string[];
  size?: 12 | 14 | 16;
  extraToppings: string[];
}
