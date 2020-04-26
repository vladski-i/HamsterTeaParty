import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Demo from './demo';
import Navbar from './Navbar';
import Drawer from './Drawer';
import SidebarRight from './SidebarRight';
import SidebarLeft from './SidebarLeft';
import InputLabel from "@material-ui/core/InputLabel";
import TextField from '@material-ui/core/TextField';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/styles';
import OutlinedInput from "@material-ui/core/OutlinedInput";
import InputAdornment from "@material-ui/core/InputAdornment";
import IconButton from "@material-ui/core/IconButton";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Icon from '@material-ui/core/Icon';
import axios from 'axios';

const styles = theme => ({
    root: {
        "& > *": {
          margin: 2 ,
          width: "100ch"
        }
      }
  });

class Login extends React.Component {

    state = {
        username: '',
        password: '',
        showPassword: false 
    };

    componentDidMount = () => { 
        this.setState ({

        })
    }

    componentDidUpdate = () => {    
        
    }

    handleClickShowPassword = () => {
        if (this.state.showPassword == false) {
            this.setState({
                showPassword: true
            });
        }
        else {
            this.setState({
                showPassword: false
            });
        }
    }

    handleMouseDownPassword = () => {
        
    }

    handleChange = (prop) => (event) => {
        this.setState({ 
            ...this.state, 
            [prop]: event.target.value 
        });
      };

    handleSubmit = () => {
        /// chestii de facut cand se apasa submit pe butonu de CREATE ACCOUNT
        console.log('onClick');
        const identity = {
            userName: this.state.username,
            passwd: this.state.password,
        };

        axios.post('http://localhost:8090/login',{
            "userName" : this.state.username,
            "passwd"   : this.state.password
        }).then(res => {
            console.log(res)
            console.log(res.data)
        })
        /// send it to back-end/andor - mongodb
    }

    render () {

        const {
            username,
            password,
            showPassword
        } = this.state;

        const {
            classes
         } = this.props;

        return (
            <div className>
                <br></br>
                <br></br>
                <br></br>

                <form  
                    className={classes.root}
                    noValidate 
                    autoComplete="off"
                    style={{
                        position: 'absolute', left: '50%', top: '50%',
                        transform: 'translate(-50%, -50%)'
                    }}
                    >
                <br></br>
                <InputLabel>
                Username
                </InputLabel>
                <OutlinedInput
                id="outlined-adornment-password"
                type="text"
                value={username}
                onChange={this.handleChange("username")}
                labelWidth={70}
                />

                <InputLabel htmlFor="outlined-adornment-password">
                Password
                </InputLabel>
                <OutlinedInput
                id="outlined-adornment-password"
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={this.handleChange("password")}
                endAdornment={
                <InputAdornment position="end">
                    <IconButton
                    aria-label="toggle password visibility"
                    onClick={this.handleClickShowPassword}
                    onMouseDown={this.handleMouseDownPassword}
                    edge="end"
                    >
                    {showPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                </InputAdornment>
                }
                labelWidth={70}
                />
                <br></br>
                <br></br>

                <div style={{ display: "flex" }}>

                <Button variant="contained"  
                        style={{ marginLeft: "auto" ,
                                 backgroundColor: '#E1173F'}} 
                        className={classes.marginTop}
                        endIcon={<Icon style={{color: 'white'}}>send</Icon>}
                        onClick={this.handleSubmit}>
                <Typography variant="h6" style={{textAlign: 'right', color: 'white'}}>
                    LOGIN
                </Typography>
                </Button>
                </div>
                </form>
            </div>
          );
        }
 }

    Login.propTypes = {
      classes: PropTypes.object.isRequired,
   };
  
   export default withStyles(styles)(Login);