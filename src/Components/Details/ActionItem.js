import { Box, Button, styled, Table, TableBody, TableCell, TableRow, Typography } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FlashOnIcon from "@mui/icons-material/FlashOn";
import "./action.css";
import { LocalOffer as Badge } from '@mui/icons-material';

import { NavLink, useNavigate } from "react-router-dom";
// const LeftContainer = styled(Box)`
//   min-width: 40%;
//   padding: 40px 0 0 80px;
// `;

const Image = styled("img")({
  padding: "15px 20px",
  border: "1px solid #f0f0f0",
  width: "95%",
});

const StyledButton = styled(Button)`
  width: 46%;
  border-radius: 2px;
  height: 50px;
  color: #fff;
`;

const RightContainer = styled(Box)`
min-width:60%
display: flex;
flex-direction: row;
    margin-top: 50px;
    & > p {
        margin-top: 10px;
    }
`;

const StyledBadge = styled(Badge)`
    margin-right: 10px;
    color: #00CC00;
    font-size: 15px;
`;


const SmallText = styled(Box)`
    font-size: 14px;
    vertical-align: baseline;
    & > p {
        font-size: 14px;
        margin-top: 10px;
    }
`;

const ColumnText = styled(TableRow)`
    font-size: 14px;
    vertical-align: baseline;
    & > td {
        font-size: 14px;
        margin-top: 10px;
    }
`;

// const Wrapper = styled(Box)`
//   display: flex;
//   flex-direction: column;
//   padding: 25px 35px;
//   flex: 1;
//   & > div,
//   & > button,
//   & > p {
//     margin-top: 20px;
//   }
// `;


const fassured = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png';

const adURL = 'https://rukminim1.flixcart.com/lockin/774/185/images/CCO__PP_2019-07-14.png?q=50';
const date = new Date(new Date().getTime()+(5*24*60*60*1000));

// console.log(data, ">>");

const ActionItem = ({ data }) => {
  console.log(data +" yup thats")
  const navigate = useNavigate();
  
  const addItemToCart = () => {
    console.log(data+" yo yo yo");
    const array = JSON.parse(localStorage.getItem('addToCartLid'))||[]
    array.push(data)
    localStorage.setItem('addToCartLid',JSON.stringify(array))
    navigate('/cart');
  }


  return (
    <div className="main">

      <div className="left-container">
        <Image src={data.url} style={{ width: "220px" }} />
        <StyledButton
          style={{ marginRight: 10, background: "#ff9f00" }}
          variant="contained" onClick={()=>addItemToCart()}
        >
        {/* <NavLink style={{textDecoration:"none", color:"white"+"!important"}} > */}
          <ShoppingCartIcon style={{color:"white"}} />
          Add to Cart
        {/* </NavLink> */}
        </StyledButton>
        <StyledButton style={{ background: "#fb641b" }} variant="contained">
          <FlashOnIcon /> Buy Now
        </StyledButton>
      </div>

      <div className="right-container">
        
        <Box item lg={8} md={8} sm={8} xs={12}>
                        <Typography>{data.title.shortTitle}</Typography>
                        <Typography style={{marginTop: 5, color: '#878787', fontSize: 14 }}>
                            8 Ratings & 1 Reviews
                            <span><img src={fassured} style={{width: 77, marginLeft: 20}} /></span>
                        </Typography>
                        <Typography>
                            <span style={{ fontSize: 28 }}>₹{data.price.cost}</span>&nbsp;&nbsp;&nbsp; 
                            <span style={{ color: '#878787' }}><strike>₹{data.price.mrp}</strike></span>&nbsp;&nbsp;&nbsp;
                            <span style={{ color: '#388E3C' }}>{data.price.discount} off</span>
                        </Typography>
                        <Typography>Available offers</Typography>
                        <SmallText>
                <Typography><StyledBadge />Bank Offer 5% Unlimited Cashback on Flipkart Axis Bank Credit Card</Typography>
                <Typography><StyledBadge />Bank Offer 10% Off on Bank of Baroda Mastercard debit card first time transaction, Terms and Condition apply</Typography>
                <Typography><StyledBadge />Purchase this Furniture or Appliance and Get Extra ₹500 Off on Select ACs</Typography>
                <Typography><StyledBadge />Partner OfferExtra 10% off upto ₹500 on next furniture purchase</Typography>
            </SmallText>

            <Table>
                <TableBody>
                    <ColumnText>
                        <TableCell style={{ color: '#878787' }}>Delivery</TableCell>
                        <TableCell style={{ fontWeight: 600 }}>Delivery by {date.toDateString()} | ₹40</TableCell>
                    </ColumnText>
                    <ColumnText>
                        <TableCell style={{ color: '#878787' }}>Warranty</TableCell>
                        <TableCell>No Warranty</TableCell>
                    </ColumnText>
                    <ColumnText>
                        <TableCell style={{ color: '#878787' }}>Seller</TableCell>
                        <TableCell>
                            <span style={{ color: '#2874f0' }}>SuperComNet</span>
                            <Typography>GST invoice available</Typography>
                            <Typography>View more sellers starting from ₹329</Typography>
                        </TableCell>
                    </ColumnText>
                    <TableRow>
                        <TableCell colSpan={2}>
                            <img src={adURL} style={{ width: 390 }} />
                        </TableCell>
                    </TableRow>
                    <ColumnText>
                        <TableCell style={{ color: '#878787' }}>Description</TableCell>
                        <TableCell>{data.description}</TableCell>
                    </ColumnText>
                </TableBody>
            </Table>
                    </Box>
      </div>
    </div>
  );
};

export default ActionItem;
