import React from 'react';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';
import { useStyles } from './useStyles';


export default () => {
    const classes = useStyles();
  
    return (
      <Typography variant="body2" color="textSecondary" align="center">
        {'Copyright © '}
        <Link className={classes.copyrightLink} to="/">
          DysonOAuth
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
};