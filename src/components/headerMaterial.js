import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import {Link} from 'react-router-dom'
import GoogleAuth from './googleAuth'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  nav:{
     backgroundColor: "#2c3e50"
  },
  menuButton: {
    marginRight: theme.spacing(2),
    color: "white"
  },
  title: {
    flexGrow: 1,
    color: "white"
  },
  link: {
    margin: theme.spacing(1),
    color: "white"
  }
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar color="inherit" position="static" className={classes.nav}>
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            <Link  className={classes.link} to={"/"}>Category</Link>
            <Link  className={classes.link} to={"/gallery"}>Galery</Link>
          </Typography>
          <Button className={classes.link}>Login</Button>
          <GoogleAuth/>
        </Toolbar>
      </AppBar>
      <div className="backgroundStyle">
                    <div style={{ zIndex: "99", textAlignLast: "center" }} className="ui sizer vertical segment">
                        <div data-aos="fade-down">
                            <h1 className="ui huge grey inverted center aligned header">Inna Collection</h1>
                        </div>
                        <i className="arrow down icon "></i>
 
                    </div>
                </div>
    </div>
  );
}