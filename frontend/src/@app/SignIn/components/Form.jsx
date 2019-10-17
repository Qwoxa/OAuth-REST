import React from 'react';
import PropTypes from 'prop-types';
import { Formik, Form, Field } from 'formik';
import { Button, TextField, Typography, Avatar, CssBaseline, Container } from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import * as Yup from 'yup';
import { useStyles } from './useStyles';

import GoogleIcon from './img/google.png';
import FacebookIcon from './img/facebook.svg';
import GoogleLogin from 'react-google-login';
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props';

const SignIn = ({ signIn, errorMessage, oauthGoogle, oauthFacebook }) => {
  const classes = useStyles();

  
  const responseService = service => async res => {
    const oauthService = service === 'google' ? oauthGoogle : oauthFacebook;
    await oauthService(res.accessToken);
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
            <Formik
                initialValues={{
                    email: '',
                    password: ''
                }}
                validationSchema={Yup.object({
                    email: Yup.string()
                        .email('Invalid email!')
                        .required('Email is required'),
                    password: Yup.string()
                        .required('Password is required')
                })}
                onSubmit={({ email, password }) => {
                    signIn({ email, password });
                }}
            >
                {({ errors, touched }) => {
                return (
                    <Form className={classes.form}>
                    <Field name="email">
                        {({ field }) => (
                        <TextField
                            {...field}
                            error={errors.email && touched.email}
                            helperText={touched.email && errors.email}
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            label="Email Address"
                            autoComplete="email"
                            autoFocus
                        />
                        )}
                    </Field>
                    <Field name="password">
                        {({ field }) => (
                        <TextField
                            {...field}
                            error={errors.password && touched.password}
                            helperText={touched.password && errors.password}
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            label="Password"
                            type="password"
                            autoComplete="current-password"
                        />
                        )}
                    </Field>

                    {errorMessage && (
                        <div className={classes.errorMessage}>
                            {errorMessage}
                        </div>
                    )}

                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                    >
                        Sign In
                    </Button>
                    </Form>
                );
                }}
            </Formik>
        
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

SignIn.defaultProps = {
  loginError: ''
};

// SignIn.propTypes = {
//   login: PropTypes.func.isRequired,
//   loginError: PropTypes.string
// };

export default SignIn;
