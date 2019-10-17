import React from 'react';
import PropTypes from 'prop-types';
import { Button, Typography, Avatar, CssBaseline, Container } from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { useStyles } from './useStyles';

import GoogleIcon from './img/google.png';
import FacebookIcon from './img/facebook.svg';
import GoogleLogin from 'react-google-login';
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props';
import { googleId, facebookId } from '../../../oauth';
import SignInForm from './Form';

const SignIn = ({
    signIn,
    oauthGoogle,
    oauthFacebook,
    error,
    errorMessage,
    history,
    location
}) => {
  console.log(location);
  const classes = useStyles();

  const responseService = service => async res => {
    const oauthService = service === 'google' ? oauthGoogle : oauthFacebook;
    const response = await oauthService(res.accessToken);
    
    if (!response.payload.error) {
        const { from } = location.state || { from: { pathname: "/" } };
        history.replace(from);
    }
  };

  return (
        <Container component="main" maxWidth="xs">
          <CssBaseline>
              <div className={classes.paper}>

            <Avatar className={classes.avatar}>
                <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
                Sign in
            </Typography>
            

            <SignInForm
                history={history}
                signIn={signIn}
                error={error}
                errorMessage={errorMessage}
            />
        
            <div className={classes.divider}>OR</div>


            <GoogleLogin
                clientId={googleId}
                onSuccess={responseService('google')}
                onFailure={responseService('google')}
                render={renderProps => (
                    <Button
                        onClick={renderProps.onClick}
                        variant="contained"
                        className={classes.googleBtn}
                        fullWidth
                    >
                        <Avatar alt="Google+ logo" src={GoogleIcon}/>
                        Continue with Google+
                    </Button>
                )}
            />


            <FacebookLogin
                appId={facebookId}
                callback={responseService('facebook')}
                render={renderProps => (
                    <Button
                        onClick={renderProps.onClick}
                        variant="contained"
                        className={classes.facebookBtn}
                        fullWidth
                    >
                        <Avatar alt="Facebook logo" src={FacebookIcon} />
                        Continue with Facebook
                    </Button>
                )}
            />


            </div>
        </CssBaseline>
    </Container>
  );
};


SignIn.propTypes = {
    signIn: PropTypes.func.isRequired,
    oauthGoogle: PropTypes.func.isRequired,
    oauthFacebook: PropTypes.func.isRequired,
    error: PropTypes.string.isRequired,
    errorMessage: PropTypes.string.isRequired,
    history: PropTypes.object.isRequired
};

export default SignIn;
