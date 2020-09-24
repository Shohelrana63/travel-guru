import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../../images/Logo.png';
import Button from '@material-ui/core/Button';
import { useContext } from 'react';
import { UserContext } from '../../App';


const Header = (props) => {
    const [loggedIn]= useContext(UserContext);
    
    return (
       
        <div style={{display:"flex", alignItems:"center", justifyContent:"space-around", padding:"8px", color:"white"}}>
             <img style={{width:"150px", color:"white"}} src={logo} alt=""/>
             
              <input className="input-style" style={{height:"30px", width:"300px", borderRadius:"3px"}} type="text" placeholder="search your destination"/>
               
                <a  href="/news"><b>News</b></a> 
                <a  href="/destination"><b>Destination</b></a> 
                <a  href="/blog"> <b>Blog</b></a> 
                <a  href="/contact"> <b>Contact</b></a> 
                 
               
                <Button size="small" style={{background:"orange"}}>Login</Button>
        </div>
       
    );
};

export default Header;