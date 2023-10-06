import React from 'react';
import "../Header/Header.css"
import Navbar from '../Navbar/Navbar';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <>
      <div className="header">
        <div className="sub-nav">
          <div className="wlc-line">Hello nice people, welcome to my blog</div>
          <div className="top-contact">contact@jahnaviblog.com</div>
          <div className="top-search">
            <p>search</p>
            <input type="text" /> 
          </div>
          <div className="top-social-icon">
            <h1>fb</h1>
            <h1>fb</h1>
            <h1>fb</h1>
            <h1>fb</h1>
            <h1>fb</h1>
            <Link to={"/signin"}>signin</Link>

          </div>
        </div>

      <div className="blog-main-logo">
        <h1>jahnaviblog</h1>
      </div>

      <Navbar/>
      </div>


    </>
  )
}

export default Header;