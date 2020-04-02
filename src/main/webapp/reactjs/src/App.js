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
import HomepageComponent from './griduri';
import JokeViewer from './JokeViewer';
import SignUpPageWrapper from './SignUpPageWrapper'


class Homepage extends React.Component {

   render () {
    return (
      <div>
        <HomepageComponent/>
      </div>
      )
   }
}

  export default Homepage;
