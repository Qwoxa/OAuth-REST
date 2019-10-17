import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { useStyles } from './useStyles';
import {
    Avatar,
    Button,
    CssBaseline,
    TextField,
    Box,
    Typography,
    Container
} from '@material-ui/core';
import Copyright from './Copytight';


const SignUp = ({
    signUp,
    errorMessage
}) => {
    console.log(errorMessage);
  const classes = useStyles();

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>

        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>

        <Formik
            initialValues={{
                email: '',
                password: '',
                passwordConfirm: ''
            }}
            validationSchema={Yup.object({
                email: Yup.string()
                  .email('Invalid email')
                  .required('Email is required'),
                password: Yup.string()
                  .required('Password is required'),
                passwordConfirm: Yup.string()
                  .oneOf([Yup.ref('password'), null], 'Password does not match')
                  .required('Password confirm is required')
            })}
            onSubmit={async ({ email, password }) => {
                await signUp({ email, password });
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
                                    type="email"
                                    fullWidth
                                    label="Email Address"
                                    autoComplete="email"
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
                                    type="password"
                                    fullWidth
                                    label="Password"
                                />
                            )}
                        </Field>
                        <Field name="passwordConfirm">
                            {({ field }) => (
                                <TextField
                                    {...field}
                                    error={errors.passwordConfirm && touched.passwordConfirm}
                                    helperText={touched.passwordConfirm && errors.passwordConfirm}
                                    variant="outlined"
                                    margin="normal"
                                    type="password"
                                    fullWidth
                                    label="Password (confirm)"
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
                            Sign Up
                        </Button>


                        <Link to="/signin" variant="body2" className={classes.signInLink}>
                            Already have an account? Sign in
                        </Link>

                    </Form>
                );
            }}
        </Formik>
      </div>
      <Box mt={1}>
        <Copyright />
      </Box>
    </Container>
  );
};

SignUp.propTypes = {
    signUp: PropTypes.func.isRequired,
    errorMessage: PropTypes.string.isRequired
};

export default SignUp;