import { FormGroup, Grid } from "@material-ui/core";
import React from "react";
import { useState } from "react";
import { useContext } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useHistory } from "react-router-dom";
import { UserContext } from "../../App";
import Header from "../Header/Header";
import "./BookingArea.css";


const BookingArea = (props) => {
  const history = useHistory();

  const [showPlaceArea] = useContext(UserContext);
  const [from, setFrom] = useState(null);
  const [to, setTo] = useState(null);

  const formController = (e) => {
    e.preventDefault();
    history.push("/hotels");
  };

  return (
    <div className="home-background">
      <Header></Header>
      <Grid container item xs={12}>
        <Grid item md={6} style={{
          marginTop: "100px",
          padding: "10px 10%",
          textAlign: "center",
          color: "white",
        }} >

          <h1 className="titleStyle">{showPlaceArea.title}</h1>
          <p>{showPlaceArea.description}</p>

        </Grid>

        <Grid item md={6} style={{ padding: "90px" }}>

          <form className="booking-form" onSubmit={formController}>
            <FormGroup className="booking-form-group">
              <label>Origin</label>
              <input type="text" required />

              <label>Destination</label>
              <input type="text" value={showPlaceArea.title} required />

              <div style={{ display: "flex" }} className="datePicker-section">
                <div style={{ marginRight: "5px" }}>
                  <p>From</p>
                  <DatePicker
                    selected={from}
                    className="datePicker-input"
                    onChange={(date) => setFrom(date)}
                    placeholderText="00/00/00"
                    required
                  />
                </div>

                <div>
                  <p>To</p>
                  <DatePicker
                    selected={to}
                    className="datePicker-input"
                    onChange={(date) => setTo(date)}
                    placeholderText="00/00/00"
                    required
                  />
                </div>
              </div>

              <input type="submit" value="Start Booking" />
            </FormGroup>
          </form>
        </Grid>
      </Grid>
    </div>
  );
};

export default BookingArea;
