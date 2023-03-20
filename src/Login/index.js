import React from "react";
import { useState } from "react";
import "./login.css";
import CustomButton from "../Components/CustomButton";
import { FaShoppingCart } from "react-icons/fa";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import MoreTp from "./MoreTp/moreTp";
import LoginTp from "./LoginTp/loginTp";
import 'tippy.js/themes/light.css';
import LoginDialog from "../Components/LoginDialog";


const Login = () => {
  const [open, setOpen] = useState(false);

  const openDialog = () => {
    setOpen(true);
  }

  return (
    <div className="login">
      <Tippy theme="light" content={<LoginTp></LoginTp>} interactive={true} offset={[5, 18]}>
        <button onClick={()=> openDialog()} className="login__button">Login</button>
      </Tippy>
      <LoginDialog open={open} setOpen={setOpen}/> 
    
        <CustomButton
          style={{
            fontSize: "14px",
            marginRight: "40px",
            backgroundColor: "rgb(40,116,240)",
            color: "white",
            borderStyle: "hidden",
            cursor: "pointer",
          }}
        >
          Become a Seller
        </CustomButton>
        <Tippy theme="light" content={<MoreTp></MoreTp>} interactive={true} offset={[5, 18]}>
          <button className="loginButtons">More</button>
        </Tippy>

        <CustomButton
          style={{
            fontSize: "14px",
            marginRight: "40px",
            backgroundColor: "rgb(40,116,240)",
            color: "white",
            borderStyle: "hidden",
            cursor: "pointer",
          }}
        >
          <FaShoppingCart />
          Cart
        </CustomButton>
        
      </div>
  );
};

export default Login;


