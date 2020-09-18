import React, { createContext } from 'react';
import { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import BookingArea from './Components/BookingArea/BookingArea';

import Home from './Components/Home/Home';


export const UserContext = createContext()
function App() {

  const[placeArea, setPlaceArea] = useState({
    id:0,
    title:"Cox's Bazar",
    description:"Cox's Bazar is a city, fishing port, tourism centre and district headquarters in southeastern Bangladesh. it is famous mostly for its long natural sandy beach, and it ....",
    img:"https://i.ibb.co/K5HvNLV/Rectangle-1.png"
  })

  return (
    <UserContext.Provider value = {[placeArea, setPlaceArea]}>
         <Router>
             <Switch>
               <Route exact path="/">
                  <Home></Home>
               </Route>

               <Route  path="/bookingarea">
                  <BookingArea></BookingArea>
                </Route>
               
               
   
             </Switch>
    </Router>
     
    </UserContext.Provider>
  );
}

export default App;
