import React from 'react';
import Header from '../Header/Header'
import { Grid } from '@material-ui/core';

import HotelDetails from '../HotelDetails/HotelDetails';
import { hotelsInfo } from '../../fakeData/fakePlaces';
import Map from '../Map/Map';
const Hotels = () => {
    return (
        <div>
           
           <Header ></Header>

           <Grid container item xs={12} justify="space-between">

               <Grid item xs={12} md={7}>
                {
                    hotelsInfo.map(hotel=> <HotelDetails hotel={hotel}></HotelDetails> )
                }
               </Grid>

               <Grid item xs={12} md={5}>
                 <Map></Map>
               </Grid>
           </Grid>
        </div>
    );
};
export default Hotels;