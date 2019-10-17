import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';

const AuthRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={({ location, ...props}) => {
        const token = localStorage.getItem('token');

        return (
            !token ? (
                <Component {...props} />
            ) : (
                <Redirect
                    to="/"
                />
            )
        );
        
    }} />
);

AuthRoute.propTypes = {
    component: PropTypes.elementType.isRequired
};

export default AuthRoute;
