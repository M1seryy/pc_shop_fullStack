import React, { useEffect, useState } from "react";
import "./header.css";
import logo from "../../images/Logo.png";
import search from "../../images/search.svg";
import cart from "../../images/cart.svg";
import avatar from "../../images/avatar.png";
import Modal from "../backDropModal/Modal";

const Header = () => {
  const [isOpen, setOpen] = useState(false);
  const escHandler = (e) => {
    if (e.key === "Escape") {
      setOpen(false);
    }
    return;
  };

  useEffect(() => {
    document.addEventListener("keydown", escHandler);
  });

  return (
    <div onKeyDown={escHandler} className="headerWrapper">
      {isOpen ? <Modal type="reg" /> : null}
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

        <div className="signBlock">
          {isOpen ? (
            <img src={avatar} alt="avatar-icon" />
          ) : (
            <p onClick={() => setOpen(true)} className="signBlockBtb">
              Sign in
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
