import { Box, Typography, Button, Grid, styled } from "@mui/material";

import TotalView from "./TotalView";

import CartItem from "./cartItem";

import { useEffect, useState } from "react";

const Component = styled(Grid)(({ theme }) => ({
  padding: "30px 135px",

  display: "flex",

  [theme.breakpoints.down("sm")]: {
    padding: "15px 0",
  },
}));

const LeftComponent = styled(Grid)(({ theme }) => ({
  paddingRight: 15,

  [theme.breakpoints.down("sm")]: {
    marginBottom: 15,
  },
}));

const Header = styled(Box)`
  padding: 15px 24px;

  background: #fff;
`;

const BottomWrapper = styled(Box)`
  padding: 16px 22px;

  background: #fff;

  box-shadow: 0 -2px 10px 0 rgb(0 0 0 / 10%);

  border-top: 1px solid #f0f0f0;
`;

const StyledButton = styled(Button)`
  display: flex;

  margin-left: auto;

  background: #fb641b;

  color: #fff;

  border-radius: 2px;

  width: 250px;

  height: 51px;
`;

const Cart = () => {
  const [listedItems, setListedItems] = useState([]);

  const getListedItem = () => {
    return JSON.parse(localStorage.getItem("addToCartLid")) || [];
  };

  const removeItemFromCart = (id) => {
    const updatedItems = listedItems.filter((item) => item.id !== id);
    localStorage.setItem("addToCartLid", JSON.stringify(updatedItems));
    setListedItems(updatedItems);
  };
  const updateCartItem = (id, increase, decrease) => {
    let item = listedItems.filter((item) => item.id === id);
    if(increase){
        const newProductList = getListedItem();
        newProductList.push(item.id)//item.quntity++ = itemof = 0. quntity +1;
        localStorage.setItem("addToCartLid", JSON.stringify(newProductList));
    }
    if(decrease){
        removeItemFromCart(id)
    }
    setListedItems(getListedItem());
  };

  useEffect(() => {
    setListedItems(getListedItem());
  }, []);

  return (
    <>
      <Component container>
        <LeftComponent item lg={9} md={9} sm={12} xs={12}>
          <Header>
            <Typography>My cart ({listedItems.length || 0})</Typography>
          </Header>

          {listedItems.length > 0 ? (
            listedItems.map((item,index) => (
              <CartItem
                key={item.id+index}
                item={item}
                removeItemFromCart={removeItemFromCart}
                updateCartItem={updateCartItem}
              />
            ))
          ) : (
            <Typography variant="body1">Your cart is empty.</Typography>
          )}

          <BottomWrapper>
            <StyledButton>Place Order</StyledButton>
          </BottomWrapper>
        </LeftComponent>

        <Grid item lg={3} md={3} sm={12} xs={12}>
          <TotalView cartItems={listedItems} />
        </Grid>
      </Component>
    </>
  );
};

export default Cart;
