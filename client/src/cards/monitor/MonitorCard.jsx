import React from "react";
import "./monitor.css";
import monitorImg from "../../images/monitor.png";

const MonitorCard = () => {
  return (
    <li className="monitorCard">
      <img className="mainImage" src={monitorImg} alt="monitor" />
      <div className="descWrapper">
        <p className="desc">Model : LG 65EP5G-B</p>
        <p className="desc">Size : 27</p>
        <p className="desc">Refresh : 144HZ</p>
        <p className="desc">New price : 299 $</p>
        <button className="addBtn">
          <div>
            <span>
              <p>Buy</p>
              <p>:)</p>
            </span>
          </div>
          <div>
            <span>
              <p>Thanks</p>
              <p>:D</p>
            </span>
          </div>
        </button>
      </div>
    </li>
  );
};

export default MonitorCard;
