import React from "react";
import "./products.css";
import MonitorCard from "../../cards/monitor/MonitorCard";

const Produucts = () => {
  const arr = [1, 2, 3, 4, 5];
  return (
    <div className="productWrapper">
      <div className="cardItemsTitle">
        <h2>Monitors</h2>
      </div>
      <ul className="productCards">
        {arr.map((item) => {
          return <MonitorCard />;
        })}
      </ul>
    </div>
  );
};

export default Produucts;
