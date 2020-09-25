import React from "react";
import { Link, useLocation } from "react-router-dom";

import logo from "../../images/Logo.png";
import Button from "@material-ui/core/Button";
import { useContext } from "react";
import { UserContext } from "../../App";
import "./Header.css";

const Header = (props) => {
  const [placeArea, setPlaceArea, loggedIn, setLoggedIn, logUpdateUserName, setLogUpdateUserName] = useContext(UserContext);


  return (
    <div style={{
      display: "flex",
      alignItems: "center",
      justifyContent: "space-around",
      padding: "8px",
      color: "white",
    }}>

      <Link to="/">
        <img style={{ width: "150px", color: "white" }} src={logo} alt="" />
      </Link>

      <input className="input-style" style={{ height: "30px", width: "300px", borderRadius: "3px" }} type="text" placeholder="search your destination" />

      <Link to="/news">News</Link>
      <Link to="/destination">Destination</Link>
      <Link to="/blog">Blog</Link>
      <Link to="/contact"> Contact</Link>

      {
        loggedIn ?
          <h4> <span style={{ color: "orange" }}>Welcome, {logUpdateUserName} </span></h4>
          : <>
            <Link style={{ textDecoration: "none", color: "white" }} to="/login">
              <Button size="small" style={{ background: "orange", color: "white" }}>
                Login
             </Button>
            </Link>
          </>
      }
    </div>
  );
};

export default Header;
