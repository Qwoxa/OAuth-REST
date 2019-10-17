import React from 'react';
import { Route } from 'react-router-dom'
import { Button } from '@material-ui/core';

export default ({ children, to, ...props }) => {
    return (
      <Route
        path={to}
        exact
        children={({ match, history }) => (
            <Button
              {...props}
              color="inherit"
              onClick={() => history.push(to)}
              style={{
                background: match ? '#626eb2' : ''
              }}
            >
              {children}
            </Button>
        )}
      />
    );
};
