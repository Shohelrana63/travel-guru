import React from 'react';
import { Redirect, Route, useLocation } from 'react-router-dom';

const PrivateRoute = ({children, ...rest}) => {

    const loggedIn = localStorage.getItem("loggedIn")
    // const[placeArea, setPlaceArea,loggedIn, setLoggedIn] = useContext(UserContext);
    const location = useLocation()
    return (
        <Route
           {...rest}
             render={()=>
                loggedIn ? (
                    children
                    ) : (
                         <Redirect 
                         to= { {
                                  pathname:"/LoginAuth",
                                 state:{from:location}
                              } }
                          />
                     )
                }
          />
        
    );
};

export default PrivateRoute;