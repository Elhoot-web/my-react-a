import React from "react";
import { FaInstagram } from "react-icons/fa";
import { RiFacebookFill } from "react-icons/ri";
import { AiOutlineTwitter } from "react-icons/ai";
import { BsYoutube } from "react-icons/bs";
import './Footer.css';






const Footer = () => {
    return(
    <>
    <div className="Footer">
       <div className="container">
       <div className="about">
       <div className="logo">
       <img src='./img/logo.png' alt="logo"></img>
       </div>
       <div className="detail">
          <p>vow to himself on that day, that he would have his revenge on Aizen by killing him with the power that he</p>
       <div className="icon">
       <li><FaInstagram /></li>
       <li><RiFacebookFill /></li>
       <li><AiOutlineTwitter /></li>
       <li><BsYoutube /></li>
       </div>
       </div>
       </div>
       <div className="account">
           <h3>My Account</h3>
           <ul>
            <li>Account</li>
            <li>Order</li>
            <li>Cart</li>
            <li>Shipping</li>
            <li>Return</li>
           </ul>
       </div>
       <div className="page">
        <h3>Pages</h3>
           <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
            <li>TeRma & Condition</li>
           </ul>
       </div>
       </div>
    </div>
    </>
    )
}

export default Footer;