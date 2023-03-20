import React from 'react';
import { navData } from '../../Constants/data';
import Banner from '../../Pages/HomePage/banner';
import "./navbar.css";


const NavBar = () => {
  return (
    <div className='navbarContainer'>
      {/* hello from NavBar */}
      <div className='navData'>
        {
            navData.map(data => (
                <div>
                    <img src={data.url} alt="nav" style={{ width:"64px"}}/>
                    <p className='dataText'>{data.text}</p>
                </div>
            ))
        }
      </div>
      <div className='banner'>
      <Banner/>
      </div>
    </div>
  )
}

export default NavBar;
