import React from "react";
import "./products.css";
import MonitorCard from "../../cards/monitor/MonitorCard";
import Cpu from "../../cards/cpu/Keybord";
import Keybord from "../../cards/cpu/Keybord";

const Produucts = ({ img, type, title, data }) => {
  const arr = [1, 2, 3, 4, 5];
  return (
    <div className="productWrapper">
      <div className="cardItemsTitle">
        {img ? <img className="titleImg" src={img} alt="logo" /> : null}
        <h2>{title}</h2>
      </div>
      <ul className="productCards">
        {data?.map((item) => {
          return type === "monitor" ? (
            <MonitorCard key={item.id} monitorData={item} />
          ) : (
            <Keybord keyData={item} key={item.id} />
          );
        })}
      </ul>
    </div>
  );
};

export default Produucts;
