import React from 'react';
import { Button} from "@material-ui/core";
import { Grid } from "@material-ui/core";
import { useContext } from 'react';
import { UserContext } from '../../App';
import places from '../../fakeData/fakePlaces';
import PlaceArea from '../PlaceArea/PlaceArea';
import './TravelPlace.css';
import { Link } from 'react-router-dom';


const TravelPlace = () => {
    const [placeArea, setPlaceArea] = useContext(UserContext);
    return (
        <div>

            <Grid container item xs={12} justify="space-between">
                <Grid item md={6} style={{ marginTop: "100px", padding: "10px 10%", textAlign: "center" }}>

                    <h1 className="titleStyle"> {placeArea.title} </h1>
                    <p className="descriptionStyle"> <b>{placeArea.description}</b></p>
                    <Link  to="/bookingarea">
                   <Button style={{ background: "orange" }} variant="contained">Booking →</Button>
                   </Link>
                    
                </Grid>

                <Grid container item md={6} justify="center" spacing={2} style={{ marginTop: "100px" }} >
                     {
                        places.map(place => <PlaceArea key={place.id} place={place}></PlaceArea>)
                     }
                </Grid>

            </Grid>

        </div>
    );
};

export default TravelPlace;