import React from "react";
import { Link } from "react-router-dom";
import { BsArrowRight } from 'react-icons/bs';
import { FiTruck } from "react-icons/fi";
import { LuDollarSign } from "react-icons/lu";
import { RiDiscountPercentLine } from "react-icons/ri";
import { ImHeadphones } from "react-icons/im";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { BsEye } from "react-icons/bs";
import { AiOutlineHeart } from "react-icons/ai";
import Homeproduct from './Homeproduct'; 

import './Home.css';
const Home = () => {
   
    return (
        <>
        <div className="top_banner">
        <div className="container">
        <div className="detail">
            <h2>The Best Note Book Colletion 2024 & elhoot </h2>
             <Link to='/product' className="link">Shop Now <BsArrowRight /></Link>
        </div>
        <div className="img_box">
            <img src="./img/slider-3.png" alt="sliderimg"></img>
        </div>
     </div>
 </div>
 <div className="product_type">
 <div className="container">
 <div className="box">
 <div className="img_box">
    <img src="./img/m1.png" alt="mobile"></img>
 </div>
 <div className="detail">
    <p>23 products</p>
 </div>
 </div>
 <div className="box">
 <div className="img_box">
    <img src="./img/m.png" alt="mobile"></img>
 </div>
 <div className="detail">
    <p>22 products</p>
 </div>
 </div>
 <div className="box">
 <div className="img_box">
    <img src="./img/5.png" alt="mobile"></img>
 </div>
 <div className="detail">
    <p>23 products</p>
 </div>
 </div>
 <div className="box">
 <div className="img_box">
    <img src="./img/6.png" alt="mobile"></img>
 </div>
 <div className="detail">
    <p>24 products</p>
 </div>
 </div>
 </div>
 </div>
 <div className="about">
 <div className="container">
 <div className="box">
 <div className="icon">
 <FiTruck />

 </div>
 <div className="detail">
    <h3>Free Shipping</h3>
    <p>Oder above $1000</p>
 </div>
 </div>
 <div className="box">
 <div className="icon">
 <LuDollarSign />
 </div>
 <div className="detail">
    <h3>Return & Refund</h3>
    <p>Money Back Gaurenty</p>
 </div>
 </div>
 <div className="box">
 <div className="icon">
 <RiDiscountPercentLine />
 </div>
 <div className="detail">
    <h3>Member Discount</h3>
    <p>On every Oder</p>
 </div>
 </div>
 <div className="box">
 <div className="icon">
 <ImHeadphones />
 </div>
 <div className="detail">
    <h3>Customer Support</h3>
    <p>Every Time Call Support</p>
 </div>
 </div>
 </div>
 </div>
 <div className="product">
 <h2>Top Products</h2>

 <div className="container">
{
   Homeproduct.map((curElm) => 
   {
      return(
        
         <div className='box' key={curElm.id}>
            <div className="img_box">
               <img src={curElm.Img} alt={curElm.Title}></img>
            <div className='icon'>
               <li><AiOutlineShoppingCart /></li>
               <li><BsEye /></li>
               <li><AiOutlineHeart /></li>
            </div> 
            </div> 
           <div className="detail">
            <p>{curElm.Cat}</p>
            <h3>{curElm.Title}</h3>
            <h4>{curElm.Price}</h4>
            </div> 
            </div> 
            )
          }) 
         }
   </div>  
 </div>
 <div className="banner">
 <div className="container">
 <div className="detail">
    <h4>LATEST TECHNOLOGY ADDED</h4>
    <h3>Apple iPad 10.2 9th Gen - 2024</h3>
    <p>$ 986 </p>
    <Link to='/product' className="link">Shop Now<BsArrowRight/></Link>
 </div>
 <div className="img_box">
    <img src='./img/slider-3.png' alt="slider-3"></img>
  </div>
 </div>
 </div>
 </>
   )
}

export default Home;