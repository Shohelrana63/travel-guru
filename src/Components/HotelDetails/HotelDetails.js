import { Grid } from '@material-ui/core';
import React from 'react';
import StarRateOutlinedIcon from '@material-ui/icons/StarRateOutlined';
import './HotelDetails.css';

const HotelDetails = (props) => {
    const { title, star, reviewed, bedroom, bed, bath, img, guest, price } = props.hotel

    return (
        <div style={{ display: "flex", padding: "10px", marginLeft: "35px" }}>

            <div>
                <img style={{ width: "270px" }} src={img} alt="" />
            </div>

            <div className="hotel-text" style={{ marginLeft: "20px" }}>
                <h4 style={{ marginBottom: "7px" }}>{title}</h4>

                <div className="hotel-view">
                    <span>{guest} guests</span>
                    <span>{bedroom} bedrooms</span>
                    <span>{bed} beds</span>
                    <span>{bath} baths</span>
                </div>

                <p>Wif air conditioning kitchen</p>
                <p>Cancellation flexibility available</p>

                <div className="hotel-review-section" style={{ display: "flex", alignItems: "center" }}>

                    <StarRateOutlinedIcon style={{ color: "orange" }} />
                    <span>{star} ({reviewed})</span>

                    <span>${price}/Night</span>

                    <span>167 total</span>
                </div>
            </div>
        </div>
    );
};

export default HotelDetails; 