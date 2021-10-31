import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Basket from './Basket';
import '@testing-library/jest-dom/extend-expect';
import { BasketContextProvider } from '../context/basketProvider';

const BASKET =
  '[{"name":"Margherita","toppings":["Mozzarella Cheese","Tomato Sauce","Basil"],"price":78,"size":12,"extraToppings":[]}]';

describe('Basket component', () => {
  it('should render an empty basket', () => {
    expect.assertions(3);
    const { container } = render(
      <BasketContextProvider value={{ basketItems: [] }}>
        <Basket />
      </BasketContextProvider>,
      {}
    );
    expect(container).toHaveTextContent('Your basket is empty');
    expect(screen.getByRole('button', { name: /Checkout/i })).toBeDisabled();
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render a pizza in basket', () => {
    expect.assertions(4);
    const { container } = render(
      <BasketContextProvider value={{ basketItems: JSON.parse(BASKET) }}>
        <Basket />
      </BasketContextProvider>,
      {}
    );
    expect(container).not.toHaveTextContent('Your basket is empty');
    expect(container).toHaveTextContent('Margherita');
    expect(screen.getByRole('button', { name: /Checkout/i })).toBeEnabled();
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should remove a pizza from the basket', async () => {
    expect.assertions(2);
    const { container } = render(
      <BasketContextProvider
        value={{ basketItems: JSON.parse(BASKET), setBasketItems: jest.fn() }}
      >
        <Basket />
      </BasketContextProvider>,
      {}
    );
    userEvent.click(screen.getByTestId('DeleteForeverIcon'));
    expect(screen.getByRole('button', { name: /Checkout/i })).toBeDisabled();
    expect(container).toHaveTextContent('Your basket is empty');
  });
});
