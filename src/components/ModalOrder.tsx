import React, { useContext, useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormGroup from '@mui/material/FormGroup';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import Checkbox from '@mui/material/Checkbox';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import { TOPPINGS } from '../lib/pizzaMenu';
import BasketContext from '../context/basketProvider';
import { Pizza } from '../types/pizza';

const style = {
  maxWidth: 1000,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  px: 4,
  pt: 4,
  pb: 8,
  m: 10,
};

const ModalOrder: React.FC = ({ open, setOpen, pizza }) => {
  const handleClose = () => setOpen(false);
  const [initial, setInitial] = useState(true);
  const [size, setSize] = useState<12 | 14 | 16>(12);
  const [extraToppings, setExtraToppings] = useState<any[]>([]);
  const {
    basketItems,
    setBasketItems,
  }: { basketItems: Pizza[]; setBasketItems: any } = useContext(BasketContext);

  const handleToppings = (topping: string) => {
    if (!pizza.toppings.includes(topping) && !extraToppings.includes(topping)) {
      setExtraToppings((extraToppings) => [...extraToppings, topping]);
    }
    if (extraToppings.includes(topping)) {
      const removeTopping = extraToppings.filter((item) => item !== topping);
      setExtraToppings(removeTopping);
    }
  };

  const handleAddToBasket = () => {
    const newPizza: Pizza = { ...pizza };
    newPizza.size = size;
    newPizza.extraToppings = extraToppings;
    if (size === 14) {
      newPizza.price += 20;
    }
    if (size === 16) {
      newPizza.price += 30;
    }
    setBasketItems((basketItems: Pizza[]) => [...basketItems, newPizza]);
    setExtraToppings([]);
    setOpen(false);
  };

  useEffect(() => {
    if (initial) {
      const existingBasket: string = localStorage.getItem('basketItems');
      setBasketItems(JSON.parse(existingBasket));
    } else {
      localStorage.setItem('basketItems', JSON.stringify(basketItems));
    }
    setInitial(false);
  }, [basketItems, initial, setBasketItems]);

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      sx={{
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'center',
      }}
    >
      <Box sx={style}>
        <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="close"
            sx={{ mr: 2 }}
            onClick={() => setOpen(false)}
          >
            <CloseIcon />
          </IconButton>
        </Box>
        <Typography variant="h5" sx={{ pb: 3 }}>
          {pizza.name}
        </Typography>
        <FormLabel component="legend">Ingredients:</FormLabel>
        <FormGroup row sx={{ pb: 3 }}>
          {TOPPINGS.map((topping, i) => {
            return (
              <FormControlLabel
                key={i}
                control={
                  <Checkbox
                    checked={
                      pizza.toppings.includes(topping) ||
                      extraToppings.includes(topping)
                    }
                  />
                }
                label={topping}
                onChange={() => handleToppings(topping)}
              />
            );
          })}
        </FormGroup>
        <FormControl component="fieldset">
          <FormLabel component="legend">Size (Inches):</FormLabel>
          <RadioGroup row aria-label="gender" name="row-radio-buttons-group">
            {[12, 14, 16].map((sizeOption, i): { sizeOption: 12 | 14 | 16 } => {
              let label = String(sizeOption);
              if (sizeOption === 14) {
                label = sizeOption + ' (+$20)';
              }
              if (sizeOption === 16) {
                label = sizeOption + ' (+$30)';
              }
              return (
                <FormControlLabel
                  key={i}
                  checked={size === sizeOption}
                  value={sizeOption}
                  control={<Radio />}
                  label={label}
                  onChange={() => setSize(sizeOption)}
                />
              );
            })}
          </RadioGroup>
        </FormControl>
        <Box sx={{ display: 'flex', pt: 3 }}>
          <Button size="small" onClick={handleAddToBasket} variant="contained">
            Add to Basket
          </Button>
        </Box>
      </Box>
    </Modal>
  );
};

export default ModalOrder;
