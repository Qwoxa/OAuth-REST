
import React from 'react';
import PropTypes from 'prop-types';
import { Formik, Form, Field } from 'formik';
import { TextField, Button } from '@material-ui/core';
import { useStyles } from './useStyles';
import * as Yup from 'yup';


const SignInForm = ({ error, errorMessage, signIn, history }) => {
    const classes = useStyles();

    return (
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
            onSubmit={async ({ email, password }) => {
                const response = await signIn({ email, password });
                if (!response.payload.error) {
                    history.push('/'); // TODO change redirect url
                }
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

                    {error === 'signin' && (
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
    );
};

SignInForm.propTypes = {
    error: PropTypes.string.isRequired,
    errorMessage: PropTypes.string.isRequired,
    signIn: PropTypes.func.isRequired,
    history: PropTypes.object.isRequired 
};

export default SignInForm;