import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Demo from './demo';
import Navbar from './Navbar';
import Drawer from './Drawer';
import SidebarRight from './SidebarRight';
import SidebarLeft from './SidebarLeft';
// import SearchBar from './SearchBar';
import CenterJokeViewer from './CenterJokeViewer';
import SignUpPage from './SignUpPage'

export default function SignUpPageWrapper() {

  return (
    <div>
      <Grid container spacing={2}>
        <Grid item xs={12}>
            <Navbar/>
        </Grid>
        <Grid item xs={2}>
        </Grid>
        <Grid item xs={8}>
          <SignUpPage/>
        </Grid>
        <Grid container item xs={2}>
        </Grid>
      </Grid>
    </div>
  );
}
