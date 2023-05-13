import { Box, Typography, Button, Grid, styled } from '@mui/material';
import TotalView from "./TotalView";
import CartItem from './cartItem';
import { useEffect, useState } from 'react';
// import CartItem from "./cartItem";

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
  const [listedItems,setListedItems] = useState([]); 
  const getListedItem = () =>{
      return localStorage.getItem('addToCartLid')
  }

    const removeItemFromCart = (id) => 
      {
        const array = JSON.parse(localStorage.getItem('addToCartLid'))||[]
        array.filter((item)=>{
          return item !== id
        })
        localStorage.setItem('addToCartLid',JSON.stringify(array))
      }
    
    useEffect(()=> {
      console.log(getListedItem()+"op")
      setListedItems(getListedItem())
    },[]);
 
  return (
    <>
      <Component container>
        <LeftComponent item lg={9} md={9} sm={12} xs={12}>
          <Header>
            <Typography>My cart({listedItems?.length ||0})</Typography>
          </Header>
          {listedItems.map((item)=>{
            return <h1>{item.title.shortTitle}</h1>
          })}
          <BottomWrapper>
            <StyledButton > 
              Place Order
            </StyledButton>
          </BottomWrapper>
        </LeftComponent>
        <Grid item lg={3} md={3} smm={12} xs={12}>
        <TotalView cartItems={[]}/>
        </Grid>
      </Component>
      {/* : <div>Empty</div> */}
    </>
  );
};

export default Cart;
