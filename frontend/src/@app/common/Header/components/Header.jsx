import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Typography, Button } from '@material-ui/core';

import CustomLink from './CustomLink';

const useStyles = makeStyles({
  root: { flexGrow: 1 },
  heading: { flexGrow: 1 }
});


const ButtonAppBar = ({ isAuthenticated, signOut }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
            <Typography variant="h6" className={classes.heading}>
                DysonOAuth
            </Typography>
            
          {!isAuthenticated && (
            <CustomLink to="/signin">
                Sign in
            </CustomLink>
          )}

          {!isAuthenticated && (
            <CustomLink to="/signup">
                Sign up
            </CustomLink>
          )}

          {isAuthenticated && (
            <Button color="inherit" onClick={signOut}>
                Logout
            </Button>
          )}




        </Toolbar>
      </AppBar>
    </div>
  );
};

ButtonAppBar.propTypes = {
    isAuthenticated: PropTypes.bool.isRequired,
    signOut: PropTypes.func.isRequired
};

export default ButtonAppBar;
