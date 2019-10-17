import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={({ location, ...props}) => {
        const token = localStorage.getItem('token');

        return (
            token ? (
                <Component {...props} />
            ) : (
                <Redirect
                    to={{
                        pathname: '/signin',
                        state: { from: location }
                    }}
                />
            )
        );
        
    }} />
);

PrivateRoute.propTypes = {
    component: PropTypes.elementType.isRequired
};

export default PrivateRoute;
