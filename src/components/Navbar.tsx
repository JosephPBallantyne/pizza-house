import { useContext } from 'react';
import type { NextPage } from 'next';
import AppBar from '@mui/material/AppBar';
import Badge from '@mui/material/Badge';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import LocalPizzaIcon from '@mui/icons-material/LocalPizza';
import BasketContext from '../context/basketProvider';

const Navbar: NextPage = () => {
  const { basketItems } = useContext(BasketContext);
  return (
    <AppBar position="static" color="secondary" sx={{ pt: 0.5 }}>
      <Container maxWidth="xl" fixed>
        <Grid container spacing={2}>
          <Grid item xs={4} />
          <Grid
            item
            xs={4}
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            Pizza
            <LocalPizzaIcon />
            House
          </Grid>
          <Grid item xs={4}>
            <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="basket"
                sx={{ mr: 2 }}
              >
                <Badge badgeContent={basketItems.length} color="primary">
                  <ShoppingBasketIcon />
                </Badge>
              </IconButton>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </AppBar>
  );
};

export default Navbar;
