import React from "react";
import Header from "../components/Header/Header";
import BackBoard from "../components/backBoard/BackBoard";
import Produucts from "../components/products/Produucts";
import titileImg from "../images/cardBack.png"

const Home = () => {
  return (
    <>
      <Header />
      <BackBoard />
      <Produucts img={titileImg} title="Monitors" type={"monitor"}/>
      <Produucts img={null} title="Processors " type={"cpu"} />
    </>
  );
};

export default Home;
