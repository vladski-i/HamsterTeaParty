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

/*

export default function StickyHeadTable() {
  return (
    <div >

<Grid container spacing={3}>
    <Grid item xs={3}>
    </Grid>
    <Grid item xs={3}>
      <h2>                 </h2>
      <br></br>
      <br></br>
    </Grid>
  </Grid>

  <Grid container spacing={2}>
    <Grid item xs={2}>
    </Grid>
    <Grid item xs={8}>
    <Link to="/upvoted" className="removeUnderline">
    <Button style={{ backgroundColor: 'orange' }}>
          <Typography variant="h6" style={{ color: 'white'}}>
          MOST UPVOTED JOKES
          </Typography>    
    </Button>
    </Link>
    </Grid>
    <Grid item xs={2}>
    </Grid>
  </Grid>

  <br></br>
  <br></br>
  <br></br>
  <br></br>

  <Grid container spacing={2}>
    <Grid item xs={3}>
    </Grid>
    <Grid item xs={3}>
    <Link to="/trending" className="removeUnderline">
    <Button style={{ backgroundColor: 'orange' }}>
          <Typography variant="h6" style={{ color: 'white'}}>
            TRENDING TAGS
          </Typography>    
    </Button>
    </Link>
    </Grid>
  </Grid>

  <br></br>
  <br></br>
  <br></br>
  <br></br>
  
  <Grid container spacing={2}>
    <Grid item xs={4}>
    </Grid>
    <Grid item xs={3}>
    <Link to="/latest" className="removeUnderline">
    <Button style={{ backgroundColor: 'orange' }}>
          <Typography variant="h6" style={{ color: 'white'}}>
            LATEST JOKES
          </Typography>
    </Button>
    </Link>
    </Grid>
  </Grid>

  <br></br>
  <br></br>

  </div>
  );
}



*/

export default function StickyHeadTable() {
  return (
    <div>

    </div>
);
}