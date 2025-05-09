import { Container } from "@material-ui/core";
import jwtDecode from 'jwt-decode';
import React, { useEffect } from "react";
import { useDispatch } from 'react-redux';
import { BrowserRouter, Route, Switch } from "react-router-dom";

import { setAxiosAuthHeader } from './api';
import Auth from "./components/Auth/Auth";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import { AUTH, LOGOUT } from './constants/actionTypes';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const profile = JSON.parse(localStorage.getItem('profile'));

    if (profile && profile.token) {
      try {
        const decodedToken = jwtDecode(profile.token);
        if (decodedToken.exp * 1000 < new Date().getTime()) {
          console.log('Stored token expired, logging out.');
          dispatch({ type: LOGOUT });
          localStorage.removeItem('profile');
          setAxiosAuthHeader(null);
        } else {
          console.log('Found valid stored profile, re-authenticating.');
          dispatch({ type: AUTH, data: profile });
          setAxiosAuthHeader(profile.token);
        }
      } catch (error) {
        console.error('Error decoding stored token:', error);
        dispatch({ type: LOGOUT });
        localStorage.removeItem('profile');
        setAxiosAuthHeader(null);
      }
    } else {
      setAxiosAuthHeader(null);
    }
  }, [dispatch]);

  return (
    <BrowserRouter>
      <Container maxWidth="lg">
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/login" exact component={Auth} />
        </Switch>
      </Container>
    </BrowserRouter>
  );
};

export default App;
