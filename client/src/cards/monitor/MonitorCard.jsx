import React from "react";
import "./monitor.css";
import monitorImg from "../../images/monitor.png";

const MonitorCard = ({ monitorData }) => {
  return (
    // <li className="monitorCard">
    //   <img className="mainImage" src={monitorImg} alt="monitor" />
    //   <div className="descWrapper">
    //     <p className="desc">Model : LG 65EP5G-B</p>
    // <p className="desc">Size : 27</p>
    // <p className="desc">Refresh : 144HZ</p>
    //     <p className="desc">New price : 299 $</p>
    //     <button className="addBtn">
    //       <div>
    //         <span>
    //           <p>Buy</p>
    //           <p>:)</p>
    //         </span>
    //       </div>
    //       <div>
    //         <span>
    //           <p>Thanks</p>
    //           <p>:D</p>
    //         </span>
    //       </div>
    //     </button>
    //   </div>
    // </li>
    <li className="product-card">
      <div
        className="product-image"
        // style="background-image: url('your_product_image.jpg');"
      >
        {" "}
        <img className="mainImage" src={monitorData.img} alt="monitor" />
      </div>
      <div className="product-details">
        <div className="product-title">{monitorData.name}</div>
        <p className="desc">Size : {monitorData.screen_size}</p>
        <p className="desc">Refresh : {monitorData.refresh_rate} Hz</p>
        <div className="product-price">Price: $299</div>
        <a href="#" className="buy-button">
          Купити
        </a>
      </div>
    </li>
  );
};

export default MonitorCard;
