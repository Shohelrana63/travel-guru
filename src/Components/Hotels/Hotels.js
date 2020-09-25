import React from "react";
import Header from "../Header/Header";
import { Grid } from "@material-ui/core";

import HotelDetails from "../HotelDetails/HotelDetails";
import { hotelsInfo } from "../../fakeData/fakePlaces";
import Map from "../Map/Map";
import "./Hotels.css";
import { useContext } from "react";
import { UserContext } from "../../App";

const Hotels = () => {
  const [showPlaceArea] = useContext(UserContext);
  return (
    <div >
      <div className="hotel-header-background">
        <Header></Header>
      </div>

      <hr />

      <Grid container item xs={12} justify="space-between">
        <Grid item xs={12} md={7}>
          <div style={{ marginLeft: "45px" }}>
            <b style={{ color: "grey" }}>252 Stays Sep 17-20</b>
            <h3 style={{ margin: 0 }}>Stay in {showPlaceArea.title}</h3>
          </div>
          {hotelsInfo.map((hotel) => (
            <HotelDetails hotel={hotel}></HotelDetails>
          ))}
        </Grid>

        <Grid item xs={12} md={5}>
          <Map></Map>
        </Grid>
      </Grid>
    </div>
  );
};
export default Hotels;
