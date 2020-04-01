import React from 'react';
import logo from './logo.svg';
import './App.css';
import { fade, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import Badge from '@material-ui/core/Badge';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MailIcon from '@material-ui/icons/Mail';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MoreIcon from '@material-ui/icons/MoreVert';
import Button from '@material-ui/core/Button';
import Demo from './demo';
import Navbar from './Navbar';
import Drawer from './Drawer';
import Grid from '@material-ui/core/Grid';
import CONTINUT from './griduri';

/*

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
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
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
}));
*/

class Homepage extends React.Component {

    constructor(props) {
      super(props);
      this.state = {
        count: 0,   
        loggedIn: 0
      };
    }

      handleProfileMenuOpen = (event) => {
        
      };

      handleMobileMenuClose = () => {
        
      };

      handleMenuClose = () => {
        
      };

      handleMobileMenuOpen = (event) => {
        
      };
 
      /*
      renderMenu = (
        <Menu
          anchorEl={this.state.anchorEl}
          anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
          id={this.state.menuId}
          keepMounted
          transformOrigin={{ vertical: 'top', horizontal: 'right' }}
          open={this.state.isMenuOpen}
          onClose={this.handleMenuClose}
        >
          <MenuItem onClick={this.handleMenuClose}>Profile</MenuItem>
          <MenuItem onClick={this.handleMenuClose}>My account</MenuItem>
        </Menu>
      );
      */
      /*
      
      render () {

        return (
          <div className="">
            <AppBar position="static">
              <Toolbar>
                <IconButton
                  edge="start"
                  className="menuButton"
                  color="inherit"
                  aria-label="open drawer"
                >
                  <MenuIcon />
                </IconButton>
                <Typography className="title" variant="h6" noWrap>
                  Hamster Tea Party
                </Typography>
                <div className="search">
                  <div className="searchIcon">
                    <SearchIcon />
                  </div>
                  <InputBase
                    placeholder="Search…"
                    classes={{
                      root: "inputRoot",
                      input: "inputInput",
                    }}
                    inputProps={{ 'aria-label': 'search' }}
                  />
                </div>
                <div className="grow"/>
                <div className="right">
                { this.state.loggedIn 
                  ?
                    <div className="right">
                    <IconButton
                      edge="end"
                      onClick={this.handleProfileMenuOpen}
                      color="inherit"
                    >
                      <AccountCircle 
                         div className="right"
                         onClick={() => { 
                          console.log('onClick'); 
                          let updatedValue = (this.state.loggedIn + 1) % 2;
                          this.setState({loggedIn: updatedValue});
                          console.log(this.state.loggedIn);
                         }}>
                      </AccountCircle>
                    </IconButton>
                    </div>
                  :
                    <div className="right">
                      <Button 
                          div className="right"
                          color="inherit" 
                          onClick={() => { 
                            console.log('onClick'); 
                            let updatedValue = (this.state.loggedIn + 1) % 2;
                            this.setState({loggedIn: updatedValue});
                            console.log(this.state.loggedIn);
                          }}>
                          Login
                      </Button>
                  </div>
                }
                </div> 
              </Toolbar>
            </AppBar>
          </div>
        );
      }

    */

      // <Navbar />
      //  <Demo />


   render () {
    return (
      <div>
        
        <Grid container>
        <CONTINUT/>
      </Grid>
      </div>
      )
   }

/*
     return (
        <div className="STIL-BENGOS">
          <h1>O SUMA MARE DE BANI</h1>
        </div>
     );

     }
*/
}

  export default Homepage;
  
/*
function App() {
  return (
      <div>
    <h1> Hello Index TOMI  </h1>

    <table>
      <tr>
        <th>Firstname</th>
        <th>Lastname</th>
        <th>Age</th>
      </tr>
      <tr>
        <td>Jill</td>
        <td>Smith</td>
        <td>50</td>
      </tr>
      <tr>
        <td>Eve</td>
        <td>Jackson</td>
        <td>94</td>
      </tr>
    </table>
    </div>
  );
}

*/
