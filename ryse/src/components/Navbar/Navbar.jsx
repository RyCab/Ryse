import React from 'react';
import { AppBar, Toolbar, IconButton, Badge, MenuItem, Menu, Typography, useMediaQuery } from '@material-ui/core';
import { ShoppingCart } from '@material-ui/icons';
import { Link, useLocation } from 'react-router-dom';
import logo from '../../assets/shopIcon.png'
import useStyles from './styles';
import './styles.css';

const Navbar = ({ totalItems }) => {
    const classes = useStyles();
    const matches = useMediaQuery('(min-width:600px)')
    const location = useLocation();

    /* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
    const myFunction = () => {
        var x = document.getElementById("myTopnav");
        if (x.className === "topnav") {
            x.className += " responsive";
        } else {
            x.className = "topnav";
        }
    }

  return (
    <>
      <AppBar position="fixed" className={classes.appBar} color="inherit">
          <Toolbar>
              <Typography component={Link} to="/" variant="h6" className={classes.title} color="inherit">
                <img src={logo} alt="Commerce.js" height="25px" className={classes.image} />
                RYSE
              </Typography>
              <div class="topnav" id="myTopnav">
                <a href="/" class="active">Home</a>
                <a href="#news">News</a>
                <a href="#contact">Contact</a>
                <a href="#about">About</a>
                <a href="javascript:void(0);" class="icon" onClick={myFunction}>&#9776;</a>
            </div>
              <div className={classes.grow} />
              {location.pathname == '/' && (
              <div className={classes.button}>
                  <IconButton component={Link} to="/cart" aria-label="Show cart items" color="inherit">
                    <Badge badgeContent={totalItems} color="secondary">
                        <ShoppingCart />
                    </Badge>
                  </IconButton>
              </div> )}
          </Toolbar>

      </AppBar>
    </>
  )
}

export default Navbar
