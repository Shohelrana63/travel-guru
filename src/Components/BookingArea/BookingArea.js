import { FormGroup, Grid } from '@material-ui/core';
import React from 'react';
import { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { UserContext } from '../../App';
import Header from '../Header/Header';
import './BookingArea.css';



const backgroundStyle = {
    background: "url('https://i.ibb.co/K5HvNLV/Rectangle-1.png')",
    backgroundSize: "cover",
  
    height: "700px",
    position: "relative"

}
const BookingArea = (props) => {
    const history = useHistory();
   
    const[showPlaceArea] = useContext(UserContext);
    
    const formController = (e) =>{
        e.preventDefault();
        history.push("/booking")

    }
    
    return (
        <div style={backgroundStyle}>
         <Header></Header>
            <Grid container item xs={12}>
                <Grid item md={6} style={{ marginTop: "100px", padding: "10px 10%", textAlign: "center", color: "white"}}> 
                    <h1 className="titleStyle">{showPlaceArea.title}</h1>
                    <p>{showPlaceArea.description}</p>
                </Grid>

                <Grid item md={6} style={{ padding: "90px"}}>
                     <h1>this is boking area</h1>
                     <form className="booking-form" onSubmit={formController}>
                       <FormGroup className="booking-form-group">
                           <label>Origin</label>
                           <input type="text" required/>

                           <label>Destination</label>
                           <input type="text" required/>

                           <input type="submit" value="Start Booking"/>
                       </FormGroup>
                     </form>
                </Grid>

            </Grid>
        </div>
    );
};

export default BookingArea;