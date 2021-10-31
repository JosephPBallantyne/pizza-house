import Grid from '@mui/material/Grid';
import PizzaCard from './PizzaCard';
import { PIZZAS } from '../lib/pizzaMenu';

const PizzaList: React.FC = () => {
  return (
    <Grid container spacing={2}>
      {PIZZAS.map((item) => {
        return (
          <Grid item xs={12} sm={6} md={4} key={item.price}>
            <PizzaCard key={item.name} pizza={item} />
          </Grid>
        );
      })}
    </Grid>
  );
};

export default PizzaList;
