import React from "react";
import "./products.css";
import MonitorCard from "../../cards/monitor/MonitorCard";
import Cpu from "../../cards/cpu/Cpu";

const Produucts = ({ img, type, title }) => {
  const arr = [1, 2, 3, 4, 5];
  return (
    <div className="productWrapper">
      <div className="cardItemsTitle">
        {img ? <img className="titleImg" src={img} alt="" srcset="" /> : null}
        <h2>{title}</h2>
      </div>
      <ul className="productCards">
        {arr.map((item) => {
          return type === "monitor" ? <MonitorCard /> : <Cpu />;
        })}
      </ul>
    </div>
  );
};

export default Produucts;
