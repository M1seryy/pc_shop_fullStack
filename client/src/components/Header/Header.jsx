import React from "react";
import "./header.css";
import logo from "../../images/Logo.png";
import search from "../../images/search.svg";
import cart from "../../images/cart.svg";
import avatar from "../../images/avatar.png";

const Header = () => {
  return (
    <div className="headerWrapper">
      <img className="headerLogo" src={logo} alt="header logo" />
      <ul className="headerNav">
        <li className="navItem">Laptops</li>
        <li className="navItem">Desktop PCs</li>
        <li className="navItem">Networking Devices</li>
        <li className="navItem">Printers & Scanners</li>
        <li className="navItem">PC Parts</li>
        <li className="navItem">All Other Products</li>
        <li className="navItem">Repairs</li>
      </ul>
      <button className="navButton">Our Deals</button>
      <div className="headerUserBlock">
        <img src={search} alt="search-icon" />
        <img src={cart} alt="cart-icon" />
        <img src={avatar} alt="avatar-icon" />
      </div>
    </div>
  );
};

export default Header;
