import React, { createContext } from "react";
import { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import Blog from "./Components/Blog/Blog";
import BookingArea from "./Components/BookingArea/BookingArea";
import Contact from "./Components/Contact/Contact";
import Destination from "./Components/Destination/Destination";
import Home from "./Components/Home/Home";
import Hotels from "./Components/Hotels/Hotels";
import LoginAuth from "./Components/LoginAuth/LoginAuth";
import News from "./Components/News/News";
import NotFound from "./Components/NotFound/NotFound";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";

export const UserContext = createContext();

function App() {
  const [placeArea, setPlaceArea] = useState({
    id: 0,
    title: "Cox's Bazar",
    description:
      "Cox's Bazar is a city, fishing port, tourism centre and district headquarters in southeastern Bangladesh. it is famous mostly for its long natural sandy beach, and it ....",
    img: "https://i.ibb.co/K5HvNLV/Rectangle-1.png",
  });

  const [loggedIn, setLoggedIn] = useState(false);
  const [logUpdateUserName, setLogUpdateUserName] = useState();



  return (
    <UserContext.Provider value={[placeArea, setPlaceArea, loggedIn, setLoggedIn, logUpdateUserName, setLogUpdateUserName]}>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>

          <Route exact path="/bookingarea">
            <BookingArea></BookingArea>
          </Route>

          <Route exact path="/login">
            <LoginAuth></LoginAuth>
          </Route>

          <PrivateRoute exact path="/hotels">
            <Hotels></Hotels>
          </PrivateRoute>

          <Route exact path="/news">
            <News></News>
          </Route>

          <Route exact path="/blog">
            <Blog></Blog>
          </Route>

          <Route exact path="/contact">
            <Contact></Contact>
          </Route>

          <Route exact path="/destination">
            <Destination></Destination>
          </Route>

          <Route path="*">
            <NotFound></NotFound>
          </Route>

        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
