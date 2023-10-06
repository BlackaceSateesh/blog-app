import React from 'react'
import "../Navbar/Navbar.css"
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <>
    <div className="navbar">
      <ul className="navbar-list">
        <li className="nav-menu"><NavLink to={"/"}>home</NavLink></li>
        <li className="nav-menu"><NavLink to={"/"}>features</NavLink></li>
        <li className="nav-menu"><NavLink to={"/about"}>About</NavLink></li>
        <li className="nav-menu"><NavLink to={"/"}>categories</NavLink></li>
        <li className="nav-menu"><NavLink to={"/"}>contact</NavLink></li>

      </ul>
      </div>
    </>
  )
}

export default Navbar;