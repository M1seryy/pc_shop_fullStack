import React, { useEffect } from "react";
import Header from "../components/Header/Header";
import BackBoard from "../components/backBoard/BackBoard";
import Produucts from "../components/products/Produucts";
import titileImg from "../images/cardBack.png";
import { getProducts } from "../redux/productsOperation";
import { useDispatch, useSelector } from "react-redux";
import { keyboard, monitors } from "../redux/selectors";

const Home = () => {
  const monitorsSelector = useSelector(monitors);
  const keyboardSelector = useSelector(keyboard);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProducts());
  }, []);
  return (
    <>
      <Header />
      <BackBoard />
      <Produucts
        img={titileImg}
        title="Monitors"
        data={monitorsSelector.slice(0, 5)}
        type={"monitor"}
      />
      <Produucts
        data={keyboardSelector.slice(0, 5)}
        img={null}
        title="Keyboards"
        type={"keybord"}
      />
    </>
  );
};

export default Home;
