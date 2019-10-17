import React from 'react';
import PropTypes from 'prop-types';
import { Button, Typography, Avatar, CssBaseline, Container } from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { useStyles } from './useStyles';

import GoogleIcon from './img/google.png';
import FacebookIcon from './img/facebook.svg';
import GoogleLogin from 'react-google-login';
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props';
import SignInForm from './Form';

const SignIn = ({
    signIn,
    oauthGoogle,
    oauthFacebook,
    error,
    errorMessage,
    history
}) => {
  const classes = useStyles();

  const responseService = service => async res => {
    const oauthService = service === 'google' ? oauthGoogle : oauthFacebook;
    const response = await oauthService(res.accessToken);
    if (!response.payload.error) {
        history.push('/'); // TODO change redirect url
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
                clientId="416292981239-7ui23lk1v8ia6rhb5n9n0h43goipmrn7.apps.googleusercontent.com"
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
                onSuccess={responseService('google')}
                onFailure={responseService('google')}
            />


            <FacebookLogin
                appId="960596594297510"
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
