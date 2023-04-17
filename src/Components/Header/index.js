import React from "react";
import "./header.css";
import Text from "../../Text";
import CustomButton from "../CustomButton";
import Login from "../../Login";
import { BiSearch } from "react-icons/bi";
import MenuIcon from '@mui/icons-material/Menu';
import styled from "@mui/material";

import { Link } from "react-router-dom";
import { IconButton } from "@mui/material";


function Header() {
  const logoURL =
    "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png";
  const subURL =
    "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png";

    // const MenuButton = 
    // styled(IconButton)(({theme}) => ({
    //   // display:'none',
    //   // [theme.breakpoint.down('md')]: {
    //   //   display:'block'
    //   // }
    // }));

  return (
    <div className="headerContainer">
    {/* <MenuButton> */}
      {/* <MenuIcon/> */}
    {/* </MenuButton> */}
      <Link className="logoLine" to='/'>
        <img src={logoURL} alt="logo" className="logo" style={{ width: 70 ,paddingBottom:0 , paddingTop:"5%"}} />
        <CustomButton
          style={{ backgroundColor: "transparent", border: "none" ,cursor:"pointer" }}
        >
          <Text
            style={{ fontSize: "9px", fontStyle: "italic", color: "white" ,display: "flex" ,alignItems:"center" , paddingTop:"0%"  }}
          >
            Explore&nbsp;
            <span className="plus">Plus&nbsp;</span>
            <span>
              <img
                src={subURL}
                alt="sub"
                className="sub"
                style={{ width:10, height:10,
                marginLeft:4, alignItems: "center", textDecoration: "none", textDecorationColor: 'none' }}
              />
            </span>
          </Text>
        </CustomButton>
      </Link>
      {/* <div className="search"> */}
        <input
          type="text"
          className="searchbar"
          placeholder="Search for products,brands and more"
        />
        <CustomButton>
        <BiSearch style={{ color: "black" , border:"transparent"}} />
        </CustomButton>
      {/* </div> */}
      <Login/>
      
    </div>
  );
}

export default Header;

      