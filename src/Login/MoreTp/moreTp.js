import React from 'react'
import { IoNotifications } from "react-icons/io5";
import { MdLiveHelp ,MdTrendingUp ,MdGetApp } from "react-icons/md";
import './moretp.css';
const MoreTp = () => {
  return (
    <div className='moretp'>
      <div className='more_in'>
        <IoNotifications style={{ paddingRight: "20px" ,color:"#2874f0"}}/>
        <p>Notification Preferences</p>
      </div> 
      <hr/>
      <div className='more_in'>
        <MdLiveHelp style={{ paddingRight: "20px" ,color:"#2874f0"}}/>
        <p>24*7 Customer Care</p>
      </div> 
      <hr/>
      <div className='more_in'>
        <MdTrendingUp style={{ paddingRight: "20px" ,color:"#2874f0" }}/>
        <p>Advertise</p>
      </div> 
      <hr/>
      <div className='more_in'>
        <MdGetApp style={{ paddingRight: "20px" ,color:"#2874f0" }}/>
        <p>Download app</p>
      </div> 
    </div>
  )
}

export default MoreTp;
