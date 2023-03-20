import { Box, styled } from "@mui/material";
import React from "react";
import HomePage from "../../Pages/HomePage/Slide";

const Component = styled(Box)`
  display: flex;
`;

const LeftComponent = styled(Box)(({theme})=> ({
  width: "83%",
  [theme.breakpoints.down("md")]: {
    width: "100%"
  }
}))

 const RightComponent = styled(Box)(({theme}) => ({

   background: "#FFFFFF",
   padding: "5px",
   marginTop: "10px",
   marginLeft: "10px",
   width: "17%",
   textAlign: "center",
   [theme.breakpoints.down("md")]: {
    display: "none",

  }
 }));

const MidHome = ({ productData, title, timer }) => {
  const addURL =
    "https://rukminim1.flixcart.com/flap/464/708/image/633789f7def60050.jpg?q=70";
  return (
    <Component>
      <LeftComponent>
        <HomePage productData={productData} title={title} timer={timer} />
      </LeftComponent>
      <RightComponent>
        <img src={addURL} alt="add" style={{ width: 217 }} />
      </RightComponent>
    </Component>
  );
};

export default MidHome;
