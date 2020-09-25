import React, { useContext } from 'react';
import { Redirect, Route, useLocation } from 'react-router-dom';
import { UserContext } from '../../App';

const PrivateRoute = ({ children, ...rest }) => {


    const [placeArea, setPlaceArea, loggedIn, setLoggedIn] = useContext(UserContext);
    return (
        <Route
            {...rest}
            render={({ location }) =>
                loggedIn ? (
                    children
                ) : (
                        <Redirect
                            to={{
                                pathname: "/login",
                                state: { from: location }
                            }}
                        />
                    )
            }
        />

    );
};

export default PrivateRoute;