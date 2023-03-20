import React from "react";
import "./loginTp.css";
import { CgProfile } from "react-icons/cg";
import { RiStore3Fill, RiHeart3Fill } from "react-icons/ri";
import { BsFillTicketFill } from "react-icons/bs";
import { MdOutlineCardGiftcard } from "react-icons/md";

const LoginTp = () => {
  const subURL =
    "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png";
  return (
    <div className="logintp">
      <div className="login">
      <h2 style={{ fontSize: "12px", paddingRight: "20px", padding: "10px"}}>
          New customer?
        </h2>
        <button className="singup">
          <h2 style={{ color: "#2874f0", fontSize: "12px" }}>Signup</h2>
        </button>
      </div>
      <hr />
      <div className="logintp_in">
        <CgProfile style={{ paddingRight: "20px", color: "#2874f0" }} />
        <p>My Profile</p>
      </div>
      <hr />
      <div className="logintp_in">
        <img
          src={subURL}
          alt="sub"
          style={{
            width: 10,
            height: 10,
            paddingRight: "20px",
            color: "#2874f0",
          }}
        />
        <p>Flipkart Plus Zone</p>
      </div>
      <hr />
      <div className="logintp_in">
        <RiStore3Fill style={{ paddingRight: "20px", color: "#2874f0" }} />
        <p>Orders</p>
      </div>
      <hr />
      <div className="logintp_in">
        <RiHeart3Fill style={{ paddingRight: "20px", color: "#2874f0" }} />
        <p>Wishlist</p>
      </div>
      <div className="logintp_in">
        <BsFillTicketFill style={{ paddingRight: "20px", color: "#2874f0" }} />
        <p>Rewards</p>
      </div>
      <hr />
      <div className="logintp_in">
        <MdOutlineCardGiftcard
          style={{ paddingRight: "20px", color: "#2874f0" }}
        />
        <p>Gift Cards</p>
      </div>
    </div>
  );
};

export default LoginTp;
