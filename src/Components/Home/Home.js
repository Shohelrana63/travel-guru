import React from "react";
import "./Home.css";
import Header from "../Header/Header";
import TravelPlace from "../TravelPlace/TravelPlace";

const Home = () => {
  return (
    <div className="home-background">
      <Header></Header>
      <TravelPlace></TravelPlace>
    </div>
  );
};

export default Home;
