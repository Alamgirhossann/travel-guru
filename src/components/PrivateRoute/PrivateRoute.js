import React, { useContext } from 'react';
import { Redirect, Route } from 'react-router-dom';
import { LocationContext } from '../../App';


const PrivateRoute = ({ children, ...rest }) => {
    const [loggedInUser, setLoggedInUser] = useContext(LocationContext)
  
    return (

        <Route
            {...rest}
            render={({ location }) =>
            loggedInUser.email ? (
                    children
                ) : (
                        <Redirect
                            to={{
                                pathname: "/signIn",
                                state: { from: location }
                            }}
                        />
                    )
            }
        />

    );
};

export default PrivateRoute;