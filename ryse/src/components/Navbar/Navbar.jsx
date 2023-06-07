import React from 'react';
import { AppBar, Toolbar, IconButton, Badge, MenuItem, Menu, Typography, useMediaQuery } from '@material-ui/core';
import { ShoppingCart } from '@material-ui/icons';

import logo from '../../assets/shopIcon.png'
import useStyles from './styles';
import './styles.css';

const Navbar = () => {
    const classes = useStyles();
    const matches = useMediaQuery('(min-width:600px)')

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
              <Typography variant="h6" className={classes.title} color="inherit">
                <img src={logo} alt="Commerce.js" height="25px" className={classes.image} />
                RYSE Marketplace
              </Typography>
              <div class="topnav" id="myTopnav">
                <a href="#home" class="active">Home</a>
                <a href="#news">News</a>
                <a href="#contact">Contact</a>
                <a href="#about">About</a>
                <a href="javascript:void(0);" class="icon" onClick={myFunction}>&#9776;</a>
            </div>
              <div className={classes.grow} />
              <div className={classes.button}>
                  <IconButton aria-label="Show cart items" color="inherit">
                    <Badge badgeContent={2} color="secondary">
                        <ShoppingCart />
                    </Badge>
                  </IconButton>
              </div>
          </Toolbar>

      </AppBar>
    </>
  )
}

export default Navbar
