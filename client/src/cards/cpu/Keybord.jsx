import React from "react";
import "./cpu.css";
import cpuImg from "../../images/cpu.png";

const Keybord = ({ keyData }) => {
  return (
    <li className="product-card">
      <div className="product-image">
        <img src={keyData.img} alt="keybord_photo" />
      </div>
      <div className="product-details">
        <div className="product-title">{keyData.name}</div>
        <p className="desc">Style : {keyData.style}</p>
        <p className="desc">Backlit : {keyData.backlit}</p>
        <div className="product-price">Price: {keyData.price}$</div>
        <a href="#" className="buy-button">
          Купити
        </a>
      </div>
    </li>
  );
};

export default Keybord;
