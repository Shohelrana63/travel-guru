import React from 'react';
import { useContext } from 'react';
import { UserContext } from '../../App';
import { Grid } from "@material-ui/core";


const PlaceArea = (props) => {
  const [placeArea, setPlaceArea] = useContext(UserContext);
  const { title, img, description } = props.place;

  const backgroundImageStyle = {
    backgroundImage: `url(${img})`,
    backgroundSize: "cover",
    backgroundPosition: "right top",
    backgroundRepeat: "no-repeat",
    backgroundOrigin: "border-box",
    width: "92%",
    border: "3px solid yellow",
    borderRadius: "15px",
    margin: "5px",

  };

  return (
    <Grid item xs={10} md={4}>
      <div onClick={() => setPlaceArea(props.place)} style={backgroundImageStyle}>
        <h2 style={{ marginTop: "250px", textAlign: "center", color: "white" }}>
          {title}
        </h2>
      </div>
    </Grid>
  );
};

export default PlaceArea;