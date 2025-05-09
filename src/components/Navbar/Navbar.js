import { AppBar, Avatar, Button, Menu, MenuItem, Toolbar, Typography } from "@material-ui/core";
import decode from "jwt-decode";
import React, { useCallback, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useHistory, useLocation } from "react-router-dom";
import { setAxiosAuthHeader } from '../../api';
import memories from "../../images/memories.png";
import useStyles from "./styles";

const Navbar = () => {
  const classes = useStyles();
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));
  const dispatch = useDispatch();
  const history = useHistory();
  const location = useLocation();

  const [anchorEl, setAnchorEl] = useState(null);
  const menuOpen = Boolean(anchorEl);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = useCallback(() => {
    dispatch({ type: "LOGOUT" });
    setAxiosAuthHeader(null);
    localStorage.removeItem('profile');
    history.push("/");
    setUser(null);
    handleMenuClose();
  }, [dispatch, history]);

  useEffect(() => {
    const token = user?.token;

    if (token) {
      const decodedToken = decode(token);
      if (decodedToken.exp * 1000 < new Date().getTime()) handleLogout();
    }

    setUser(JSON.parse(localStorage.getItem("profile")));
  }, [location, handleLogout, user?.token]);

  return (
    <AppBar className={classes.appBar} position="static">
      <div className={classes.brandContainer}>
        <Typography
          component={Link}
          to="/"
          className={classes.heading}
          variant="h2"
          align="center"
        >
          Memories
        </Typography>
        <img className={classes.image} src={memories} alt="icon" height="60" />
      </div>
      <Toolbar className={classes.toolbar}>
        {user ? (
          <div className={classes.profile}>
            <Button 
              aria-controls="profile-menu"
              aria-haspopup="true"
              onClick={handleMenuOpen}
              className={classes.profileButton}
            >
              <Avatar
                className={classes.purple}
                alt={user.result.name}
                src={user.result.imageUrl}
              >
                {user.result.name.charAt(0)}
              </Avatar>
              <Typography className={classes.userName} variant="h6">
                {user.result.name}
              </Typography>
            </Button>
            <Menu
              id="profile-menu"
              anchorEl={anchorEl}
              open={menuOpen}
              onClose={handleMenuClose}
              keepMounted
              transformOrigin={{ vertical: 'top', horizontal: 'right' }}
              anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
              getContentAnchorEl={null}
            >
              <MenuItem onClick={handleMenuClose} disabled>
                <Typography variant="caption">{user.result.email}</Typography>
              </MenuItem>
              <MenuItem onClick={handleLogout}>Logout</MenuItem>
            </Menu>
          </div>
        ) : (
          <Button
            component={Link}
            to="/login"
            variant="contained"
            color="primary"
            className={classes.signInButton}
          >
            Sign In
          </Button>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
