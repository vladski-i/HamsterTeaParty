import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Demo from './demo';
import Navbar from './Navbar';
import Drawer from './Drawer';
import SidebarRight from './SidebarRight';
import SidebarLeft from './SidebarLeft';

class CentralJokeViewer extends React.Component {

    state = {
        jokeId: 0,
        jokePoster: 'Tomi',
        jokeTags: [],
        jokePostedAt: 0
    };

    componentDidMount = () => { 
        this.setState ({
            jokeId: 1,
            jokePoster: 'Altcineva',
            jokeTags: [],
            jokePostedAt: 0
        })
    }

    componentDidUpdate = () => {    
        
    }

    render () {

        const {
            jokeId,
            jokePoster
        } = this.state;

        return (
            <div className>
                <br></br>
                <br></br>
                <br></br>
                <br></br>

              <Grid container spacing={4}>
                <Grid item xs={12}>
                    <Paper>
                        JokeId-ul curent este aici:
                    </Paper>
                    
                </Grid>
                <Grid item xs={12}>
                    <Paper>
                        Posterul este aici:
                    </Paper>
                </Grid>
                <Grid item xs={12}>
                <Paper>
                    word3
                    </Paper>
                </Grid>
                <Grid item xs={12}>
                <Paper>
                    word4
                    </Paper>
                </Grid>
                <Grid item xs={12}>
                <Paper>
                    word5
                    </Paper>
                </Grid>
                <Grid item xs={12}>
                <Paper>
                    word6
                    </Paper>
                </Grid>
              <Grid item xs={12}>
                <Paper>
                    word7
                    </Paper>
                </Grid>
                <Grid item xs={12}>
                <Paper>
                    word8
                    </Paper>
                </Grid>
            </Grid> 
            </div>
          );
        }
 }
 
   export default CentralJokeViewer;