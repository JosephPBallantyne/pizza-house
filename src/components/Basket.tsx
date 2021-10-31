import { useContext, useEffect, useState } from 'react';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import Dialog from '@mui/material/Dialog';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import BasketContext from '../context/basketProvider';
import { Pizza } from '../types/pizza';

const Basket: React.FC = () => {
  const extraToppingCost = 10;
  const { basketItems, setBasketItems } = useContext(BasketContext);
  const [basketChanged, setBasketChanged] = useState(false);
  const [checkout, setCheckout] = useState(false);
  let totalPrice = 0;
  basketItems.forEach((pizza: Pizza) => {
    totalPrice += pizza.price + pizza.extraToppings.length * extraToppingCost;
  });

  // useEffect(() => {
  //   const existingBasket = localStorage.getItem('basketItems');
  //   console.log(existingBasket);
  // }, []);

  const handleCheckout = () => {
    setCheckout(!checkout);
  };

  const handleRemovePizza = (i: number) => {
    basketItems.splice(i, 1);
    setBasketItems(basketItems);
    setBasketChanged(!basketChanged);
    localStorage.setItem('basketItems', JSON.stringify(basketItems));
  };

  return (
    <Card
      sx={{ maxWidth: 345, padding: 1, ml: 2, bgcolor: '#F3F6F9' }}
      variant="outlined"
    >
      <CardContent>
        <Typography gutterBottom variant="h6" component="div" sx={{ pb: 3 }}>
          Your Basket
        </Typography>
        {basketItems.length < 1 && (
          <Typography variant="body1" color="text.secondary" sx={{ pb: 1 }}>
            Your basket is empty
          </Typography>
        )}
        {basketItems.map((pizza, i) => {
          return (
            <Grid key={'basket' + i} container spacing={0}>
              <Grid key={i} xs={2} item>
                <IconButton
                  size="small"
                  edge="end"
                  color="inherit"
                  aria-label="delete"
                  sx={{ p: 0, m: 0 }}
                  onClick={() => handleRemovePizza(i)}
                >
                  <DeleteForeverIcon />
                </IconButton>
              </Grid>
              <Grid key={i} xs={8} item>
                <Typography variant="body1" color="text.primary">
                  {pizza.name} {pizza.size}&quot;
                </Typography>
              </Grid>
              <Grid
                key={'price' + i}
                xs={2}
                item
                sx={{ display: 'flex', justifyContent: 'flex-end' }}
              >
                ${pizza.price}
              </Grid>

              <Grid key={'extra' + i} xs={2} item></Grid>
              <Grid key={'extra' + i} xs={8} item>
                {pizza.extraToppings.length > 0 && (
                  <Typography variant="body2" color="text.secondary">
                    {pizza.extraToppings.length}x extra topping(s)
                  </Typography>
                )}
              </Grid>
              <Grid key={'priceExtra' + i} xs={2} item sx={{ pb: 3 }}>
                {pizza.extraToppings.length > 0 && (
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ display: 'flex', justifyContent: 'flex-end' }}
                  >
                    + ${pizza.extraToppings.length * extraToppingCost}
                  </Typography>
                )}
              </Grid>
            </Grid>
          );
        })}
        <Divider sx={{ py: 1 }} />
        <Typography variant="subtitle1" color="text.primary">
          <Grid
            container
            spacing={2}
            sx={{ display: 'flex', justifyContent: 'space-between', pt: 1 }}
          >
            <Grid item>Total</Grid>
            <Grid item>${totalPrice}</Grid>
          </Grid>
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          size="small"
          variant="contained"
          disabled={basketItems.length < 1}
          onClick={handleCheckout}
        >
          Checkout
        </Button>
        <Dialog open={checkout} onBackdropClick={handleCheckout}>
          <Alert severity="success">
            <AlertTitle>Order Success</AlertTitle>
            Your pizza will be with you soon — <strong>sit tight!</strong>
          </Alert>
        </Dialog>
      </CardActions>
    </Card>
  );
};

export default Basket;
