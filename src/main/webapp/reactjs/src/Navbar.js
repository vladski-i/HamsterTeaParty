import React from 'react';
import { fade, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import Grid from '@material-ui/core/Grid';

import { Link } from 'react-router-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const loggedIn = 0;

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    marginTop: 10,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    flexGrow: 1,
    alignItems: 'center',
    textAlign: 'center',
  },
  marginTop: {
    marginTop: 13,
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
        <Grid container spacing={2}>
        <Grid item xs={2}>
            <div className={classes.marginTop}>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          </div>
          </Grid>
        <Grid item xs={2}>
            </Grid>
        <Grid item xs={4}>
        <Link to="/" className="removeUnderline">
        <Typography variant="h2" className={classes.title}>
            Jokes Site
          </Typography>
        </Link>
        </Grid>
        <Grid item xs={1}>
            </Grid>
        <Grid item xs={3}>
        <div style={{ display: "flex" }}>
        <Button color="inherit" style={{ marginLeft: "auto" }} className={classes.marginTop}>
        <Link to="/about" className="removeUnderline">
          <Typography variant="h6" style={{textAlign: 'right'}}>
            ABOUT
          </Typography> 
        </Link>   
            </Button>
          {
            (!loggedIn) ?
            <div>
                <Button color="inherit" style={{ marginLeft: "auto" }} className={classes.marginTop}>
                <Link to="/login" className="removeUnderline">
                <Typography variant="h6" style={{textAlign: 'right'}}>
                    LOGIN
                </Typography>    
                </Link>
                    </Button>
                <Button color="inherit" style={{ marginLeft: "auto" }} className={classes.marginTop}>
                <Link to="/signup" className="removeUnderline">
                <Typography variant="h6" style={{textAlign: 'right'}}>
                    SIGN UP
                </Typography>    
                </Link>
                    </Button>
            </div>
            :
            <div>
                <Button color="inherit" style={{ marginLeft: "auto" }} className={classes.marginTop}>
                <Typography variant="h6" style={{textAlign: 'right'}}>
                    LOGOUT
                </Typography>    
                </Button>
                    <Button color="inherit" style={{ marginLeft: "auto" }} className={classes.marginTop}>
                <Typography variant="h6" style={{textAlign: 'right'}}>
                    PROFILE
                </Typography>    
                    </Button>
            </div>
            }
        </div>
        </Grid>
        </Grid>
        </Toolbar>
      </AppBar>
    </div>
  );
}

/*

<Grid item xs={8}>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder=""
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
          </div>
        </Grid>
*/