export const TOPPINGS = [
  'Mozzarella Cheese',
  'Tomato Sauce',
  'Basil',
  'Pepperoni',
  'Ham',
  'Pineapple',
  'Chicken',
  'Mushroom',
  'Beef',
  'Sausage',
  'Meatballs',
  'Bell Peppers',
  'Sweetcorn',
  'BBQ Sauce',
  'Black Olives',
  'Red Onion',
];

export const PIZZAS = [
  {
    name: 'Margherita',
    toppings: [TOPPINGS[0], TOPPINGS[1], TOPPINGS[2]],
    price: 78,
    extraToppings: [],
  },
  {
    name: 'Pepperoni',
    toppings: [TOPPINGS[0], TOPPINGS[1], TOPPINGS[3]],
    price: 88,
    extraToppings: [],
  },
  {
    name: 'BBQ Chicken',
    toppings: [
      TOPPINGS[0],
      TOPPINGS[6],
      TOPPINGS[12],
      TOPPINGS[13],
      TOPPINGS[15],
    ],
    price: 98,
    extraToppings: [],
  },
  {
    name: 'Hawaiian',
    toppings: [TOPPINGS[0], TOPPINGS[1], TOPPINGS[4], TOPPINGS[5]],
    price: 84,
    extraToppings: [],
  },
  {
    name: 'Meat Lovers',
    toppings: [
      TOPPINGS[0],
      TOPPINGS[1],
      TOPPINGS[8],
      TOPPINGS[9],
      TOPPINGS[10],
    ],
    price: 118,
    extraToppings: [],
  },
  {
    name: 'Veggie Garden',
    toppings: [
      TOPPINGS[0],
      TOPPINGS[1],
      TOPPINGS[7],
      TOPPINGS[11],
      TOPPINGS[12],
      TOPPINGS[14],
    ],
    price: 108,
    extraToppings: [],
  },
];
