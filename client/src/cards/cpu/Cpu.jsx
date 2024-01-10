import React from "react";
import "./cpu.css";

const Cpu = () => {
  return (
    <li className="product-card">
      <div
        className="product-image"
      >
      </div>
      <div className="product-details">
        <div className="product-title">LG 65EP5G-B</div>
        <p className="desc">Size : 27</p>
        <p className="desc">Refresh : 144HZ</p>
        <div className="product-price">Price: $299</div>
        <a href="#" className="buy-button">
          Купити
        </a>
      </div>
    </li>
  );
};

export default Cpu;
