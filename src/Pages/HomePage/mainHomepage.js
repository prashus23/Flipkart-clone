import React from 'react'
import HomePage from './Slide';
import "./homepage.css";
import { productData } from "../../Constants/data";
import MidHome from '../../Components/MidHome/MidHome';
import MidSection from '../../Components/MidSectionHome/MidSection';


const MainHomepage = () => {

    // const {productsData} = useSelector(state => state.getProductData)

  return (
    <div className='homepageContainer'>
      <MidHome productData = {productData} title="Deal of the Day" timer={true}/>
      <MidSection/>
      <HomePage productData = {productData} title="Discount fro You" timer={false}/>
      <HomePage productData = {productData} title="Suggesting Items" timer={false}/>
      <HomePage productData = {productData} title="Top Selection" timer={false}/>
      <HomePage productData = {productData} title="Recommended Items" timer={false}/>
      <HomePage productData = {productData} title="Trending Offers" timer={false}/>
      <HomePage productData = {productData} title="Season's top picks" timer={false}/>
    </div>
  )
}

export default MainHomepage
