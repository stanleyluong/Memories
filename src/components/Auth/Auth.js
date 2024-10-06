import React, { useState } from 'react';
import { Avatar, Button, Paper, Grid, Typography, Container } from "@material-ui/core";
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import useStyles from './styles';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Input from './input';
import Icon from './icon';
import { signin, signup } from '../../actions/auth';
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
import jwt_decode from "jwt-decode"; // Use to decode the Google token for user information

const initialState = { firstName: '', lastName: '', email: '', password: '', confirmPassword: '' };

const Auth = () => {
    const classes = useStyles();
    const [showPassword, setShowPassword] = useState(false);
    const [isSignup, setIsSignup] = useState(false);
    const [formData, setFormData] = useState(initialState);
    const dispatch = useDispatch();
    const history = useHistory();

    const handleShowPassword = () => {
        setShowPassword((prevShowPassword) => !prevShowPassword);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (isSignup) {
            dispatch(signup(formData, history));
        } else {
            dispatch(signin(formData, history));
        }
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const switchMode = () => {
        setIsSignup((prevIsSignup) => !prevIsSignup);
        setShowPassword(false);
    };

    const googleSuccess = async (response) => {
        const token = response.credential; // Get the Google token
        const result = jwt_decode(token); // Decode the token to get user data (name, email, etc.)
        console.log('result', result)
        try {
            dispatch({ type: 'AUTH', data: { result, token } });
            history.push('/'); // Redirect to home after successful login
        } catch (error) {
            console.log(error);
        }
    };

    const googleFailure = () => {
        console.log("Google Sign In was unsuccessful. Try again later");
    };

    return (
        <Container component="main" maxWidth="xs">
            <Paper className={classes.paper} elevation={3}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography variant="h5">{isSignup ? 'Sign Up' : 'Sign In'}</Typography>
                <form className={classes.form} onSubmit={handleSubmit}>
                    <Grid container spacing={2}>
                        {isSignup && (
                            <>
                                <Input name="firstName" label="First Name" handleChange={handleChange} autoFocus half />
                                <Input name="lastName" label="Last Name" handleChange={handleChange} half />
                            </>
                        )}
                        <Input name="email" label="Email Address" handleChange={handleChange} type="email" />
                        <Input
                            name="password"
                            label="Password"
                            handleChange={handleChange}
                            type={showPassword ? "text" : "password"}
                            handleShowPassword={handleShowPassword}
                        />
                        {isSignup && <Input name="confirmPassword" label="Repeat Password" handleChange={handleChange} type="password" />}
                    </Grid>
                    <Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit}>
                        {isSignup ? 'Sign Up' : 'Sign In'}
                    </Button>
                    
                    {/* Horizontal Divider with "OR" */}
                    <Grid item xs={12} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '15px 0' }}>
                        <div style={{ borderBottom: '1px solid #e0e0e0', flex: 1 }}></div>
                        <Typography variant="body1" style={{ margin: '0 10px' }}>
                            OR
                        </Typography>
                        <div style={{ borderBottom: '1px solid #e0e0e0', flex: 1 }}></div>
                    </Grid>
                    
                    {/* Google Sign In under OR */}
                    <GoogleOAuthProvider clientId="293664759215-mq85kir3of6mrqcq7a3ejislc205uru7.apps.googleusercontent.com">
                        <Grid container justifyContent="center">
                            <Grid item xs={12} style={{ display: 'flex', justifyContent: 'center' }}>
                                <GoogleLogin
                                    onSuccess={googleSuccess}
                                    onError={googleFailure}
                                    render={(renderProps) => (
                                        <Button
                                            className={classes.googleButton}
                                            color="primary"
                                            onClick={renderProps.onClick}
                                            disabled={renderProps.disabled}
                                            startIcon={<Icon />}
                                            variant="contained"
                                            fullWidth
                                            style={{ margin: '10px 0', padding: '10px' }}
                                        >
                                            Google Sign In
                                        </Button>
                                    )}
                                />
                            </Grid>
                        </Grid>
                    </GoogleOAuthProvider>

                    <Grid container justifyContent="flex-end">
                        <Grid item>
                            <Button onClick={switchMode} style={{ textTransform: 'none', color: '#3f51b5' }}>
                                {isSignup ? 'Already have an account? Login' : "Don't have an account? Sign Up"}
                            </Button>
                        </Grid>
                    </Grid>
                </form>
            </Paper>
        </Container>
    );
};

export default Auth;
