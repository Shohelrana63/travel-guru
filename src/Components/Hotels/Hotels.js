import React from 'react';
import Header from '../Header/Header'
import { Grid } from '@material-ui/core';

import HotelDetails from '../HotelDetails/HotelDetails';
import { hotelsInfo } from '../../fakeData/fakePlaces';
const Hotels = () => {
    return (
        <div>
           <h1>this is hotel page</h1> 
           <Header ></Header>

           <Grid container item xs={12} justify="space-between">

               <Grid item xs={12} md={6}>
                {
                   
                    hotelsInfo.map(hotel=> <HotelDetails hotel={hotel}></HotelDetails> )
                }
               </Grid>

               <Grid item xs={12} md={6}>
                a
               </Grid>
           </Grid>
        </div>
    );
};
export default Hotels;