import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import ModalOrder from './ModalOrder';
import Typography from '@mui/material/Typography';

const PizzaCard: React.FC = ({ pizza }) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);

  const { name, price, toppings } = pizza;

  return (
    <>
      <Card
        sx={{
          maxWidth: 345,
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-around',
        }}
      >
        <CardMedia
          component="img"
          height="140"
          image="./pizza.jpg"
          alt="Pizza"
        />
        <CardContent sx={{ pb: 0 }}>
          <Typography gutterBottom variant="h6" component="div">
            {name}
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ pb: 1 }}>
            ${price}
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{ height: '60px' }}
          >
            {toppings.join(', ')}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" onClick={handleOpen}>
            Choose
          </Button>
        </CardActions>
      </Card>
      <ModalOrder open={open} setOpen={setOpen} pizza={pizza} />
    </>
  );
};

export default PizzaCard;
