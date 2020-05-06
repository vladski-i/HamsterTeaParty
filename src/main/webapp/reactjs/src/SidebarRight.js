import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import { Link } from 'react-router-dom';

import GiveAward from './GiveAward';
import DonateMoney from './DonateMoney';
import MostUpvotedJokes from './MostUpvotedJokes';
import LatestJokes from './LatestJokes';
import TrendingTags from './TrendingTags';
import TryJsitePremium from './TryJsitePremium';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import PropTypes from 'prop-types';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';

import Divider from '@material-ui/core/Divider';

import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import LocalAtmIcon from '@material-ui/icons/LocalAtm';
import EmojiEventsIcon from '@material-ui/icons/EmojiEvents';

import TrendingUpIcon from '@material-ui/icons/TrendingUp';
import NewReleasesIcon from '@material-ui/icons/NewReleases';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import PostAddIcon from '@material-ui/icons/PostAdd';
import { connect } from 'react-redux';

class SidebarRight extends React.Component {

    state = {
      username: '',
      loggedIn: false
  };

    componentDidMount = () => { 
        this.setState ({
            ...this.state,
        })
    }

    componentDidUpdate = () => {   
      
    }
    

    render () {

    const {
      loggedIn
    } = this.props.userToken;


    console.log('Atentie maxima')
    console.log(this.props);

    return (
      <div>
      <List component="nav" 
            style={{
              width: '100%',
              maxWidth: 360,
              marginTop: 135,
              position: 'fixed',
            }} 
            aria-label="mailbox folders">
        {
          loggedIn ?
          <div>
          <Link to="/postjoke" className="removeUnderline">
          <ListItem button>
          <PostAddIcon />
            <ListItemText disableTypography
                          primary={<Typography variant='h5' style={{ color: '#C82840' }}>Post Joke</Typography>}
                          style = {{
                            marginLeft: 30
                          }}/>
          </ListItem>
          </Link>
          <Divider light />
          </div>
            :
            <div>
            </div>
        }

        <Divider light />
        <Link to="/giveaward" className="removeUnderline">
        <ListItem button margin>
        <AttachMoneyIcon />
        <ListItemText 
                        disableTypography
                        primary={<Typography variant='h5' style={{ color: '#C82840' }}>Give Award</Typography>}
                        style = {{
                          marginLeft: 30,
                          marginTop: 25
                        }}/>
        </ListItem>
        </Link>
        <Divider />
        <Link to="/tryjsitepremium" className="removeUnderline">
        <ListItem button divider >
        <LocalAtmIcon />
          <ListItemText 
                        disableTypography
                        primary={<Typography variant='h5' style={{ color: '#C82840' }}>Try Premium</Typography>}
                        style = {{
                          marginTop: 35,
                          marginLeft: 30,
                        }}
          />

        </ListItem>
        </Link>

        <Link to="/donate" className="removeUnderline">
        <ListItem button>
        <EmojiEventsIcon />
          <ListItemText disableTypography
                        primary={<Typography variant='h5' style={{ color: '#C82840' }}>Donate Us</Typography>}
                        style = {{
                          marginTop: 35,
                          marginLeft: 30
                        }}/>
        </ListItem>
        </Link>
        <Divider light />

        <Link to="/trending" className="removeUnderline">
        <ListItem button>
        <TrendingUpIcon />
        
          <ListItemText 
                        disableTypography
                        primary={<Typography variant='h5' style={{ color: '#C82840' }}>Trending Now</Typography>} 
                        style = {{
                          marginTop: 35,
                          marginLeft: 30
                        }}
                        />
        </ListItem>
        </Link>
        <Divider light />
        <Link to="/latest" className="removeUnderline">
        <ListItem button>
        <NewReleasesIcon />
          <ListItemText 
                        disableTypography
                        primary={<Typography variant='h5' style={{ color: '#C82840' }}>Latest Jokes</Typography>}
                        style = {{
                          marginTop: 35,
                          marginLeft: 30
                        }}/>
        </ListItem> 
        </Link>
        <Divider light />
        <Link to="/upvoted" className="removeUnderline">
        <ListItem button>
        <WhatshotIcon />
          <ListItemText 
                        disableTypography
                        primary={<Typography variant='h5' style={{ color: '#C82840' }}>Most Upvoted</Typography>}  
                        style = {{
                          marginTop: 35,
                          marginLeft: 30
                        }}/>
        </ListItem>
        </Link>
        <Divider light />
      </List>
      </div>
  );
}
}

const mapStateToProps = (state) => {
  return state;
}

const mapDispatchToProps = (dispatch) => {
  return {
    login_logout: () => {
      dispatch({
        type: 'SIGN_IN'
      })
    } 
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SidebarRight);