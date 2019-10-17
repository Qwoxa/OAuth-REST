import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Typography, Button } from '@material-ui/core';
import CustomLink from './CustomLink.jsx';

const useStyles = makeStyles({
  root: { flexGrow: 1 },
  heading: { flexGrow: 1 },
  headingLink: { textDecoration: 'none', color: 'inherit' }
});


const ButtonAppBar = ({ isAuthenticated, signOut, history, location }) => {
  const classes = useStyles();

  const handleSignOut = () => {
    signOut();

    if (location.pathname !== '/') {
      history.push('/signin');
    }
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
            <Typography variant="h6" className={classes.heading}>
                <Link to="/" className={classes.headingLink}>
                  DysonOAuth
                </Link>
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
            <CustomLink to="/protected">
              Secret
            </CustomLink>
          )}

          {isAuthenticated && (
            <Button color="inherit" onClick={handleSignOut}>
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
    signOut: PropTypes.func.isRequired,
    history: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired
};

export default ButtonAppBar;
