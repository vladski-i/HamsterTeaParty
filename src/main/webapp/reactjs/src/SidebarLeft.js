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

export default function StickyHeadTable() {
  return (
    <div>

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
    <Button style={{ backgroundColor: 'orange' }}>
          <Typography variant="h6" style={{ color: 'white'}}>
          MOST UPVOTED JOKES
          </Typography>    
    </Button>
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
    <Button style={{ backgroundColor: 'orange' }}>
          <Typography variant="h6" style={{ color: 'white'}}>
            TRENDING TAGS
          </Typography>    
    </Button>
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
    <Button style={{ backgroundColor: 'orange' }}>
          <Typography variant="h6" style={{ color: 'white'}}>
            LATEST JOKES
          </Typography>    
    </Button>
    </Grid>
  </Grid>

  <br></br>
  <br></br>

  </div>
  );
}
