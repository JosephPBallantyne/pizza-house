import type { NextPage } from 'next';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Navbar from '../components/Navbar';
import PizzaList from '../components/PizzaList';
import Basket from '../components/Basket';

const Home: NextPage = () => {
  return (
    <>
      <Navbar />
      <Container maxWidth="xl" fixed sx={{ pt: 5 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={9}>
            <PizzaList />
          </Grid>
          <Grid item md={3}>
            <Basket />
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Home;
