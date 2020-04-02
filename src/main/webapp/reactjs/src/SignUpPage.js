import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Demo from './demo';
import Navbar from './Navbar';
import Drawer from './Drawer';
import SidebarRight from './SidebarRight';
import SidebarLeft from './SidebarLeft';

class SignUpPage extends React.Component {

    state = {

    };

    componentDidMount = () => { 
        this.setState ({

        })
    }

    componentDidUpdate = () => {    
        
    }

    render () {

        const {
      
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
                        Baga nume:
                    </Paper>
                    
                </Grid>
                <Grid item xs={12}>
                    <Paper>
                        Baga prenume:
                    </Paper>
                </Grid>
                <Grid item xs={12}>
                <Paper>
                        Baga mail:
                    </Paper>
                </Grid>
                <Grid item xs={12}>
                <Paper>
                        baga telefon:
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
 
   export default SignUpPage;