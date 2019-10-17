import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Typography, Button } from '@material-ui/core';

import CustomLink from './CustomLink';

const useStyles = makeStyles({
  root: { flexGrow: 1 },
  heading: { flexGrow: 1 }
});

// props - logout func
const ButtonAppBar = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
            <Typography variant="h6" className={classes.heading}>
                DysonOAuth
            </Typography>
            
          <CustomLink to="/signin">
            Sign in
          </CustomLink>

          <CustomLink to="/signup">
            Sign up
          </CustomLink>

          <Button color="inherit">
           Logout
          </Button>


        </Toolbar>
      </AppBar>
    </div>
  );
}

export default ButtonAppBar;
