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


const styles = theme => ({
    root: {
        "& > *": {
          margin: 2 ,
          width: "100ch"
        }
      }
  });

  const isNotSuperAdmin = "true";

class Profile extends React.Component {

    state = {
        profileId: '',
        username: 'Thomas',
        email: 'tomi_nebunu@gmail.com',
        phone: '0870987383',
        firstName: 'Thomas',
        lastName: 'Palade',
        age: '21',
        country: 'Romania',
        favoriteSite: 'Facebook',
    };

    componentDidMount = () => { 
        let id = this.props.match.params.profile_id;
        this.setState ({
            ...this.state,
            profileId: id
        })
    }

    componentDidUpdate = () => {    
        
    }

    handleChange = (prop) => (event) => {
        this.setState({ 
            ...this.state, 
            [prop]: event.target.value 
        });
      };

    handleSubmit = () => {
        /// chestii de facut cand se apasa submit pe butonu de CREATE ACCOUNT
        const identity = {
            username: this.state.username,
            email: this.state.email,
            phone: this.state.phone,
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            age: this.state.age,
            country: this.state.country,
            favoriteSite: this.state.favoriteSite,
        };

        console.log(identity);
        /// send it to back-end/andor - mongodb
    }

    render () {

        const {
            username,
            password,
            email,
            phone,
            firstName,
            lastName,
            age,
            country,
            city,
            favoriteSite,
            showPassword
        } = this.state;

        const {
            classes
         } = this.props;

        return (
            <div className>
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
                <div style={{textAlign: 'center'}}>
                <div>
                <Typography variant="h2" style={{textAlign: 'center'}}>
                    PROFILE PAGE
                </Typography>
                </div>

                </div>
                <TextField style={{
                    marginTop: 30
                }} 
                    id="firstName" 
                    label="First Name" 
                    /// disabled="true"
                    value={firstName}
                    onChange={this.handleChange("firstName")}
                    />
                <br></br>
                <TextField 
                        id="lastName"
                        label="Last Name"
                        // disabled="true"
                        value={lastName} 
                        onChange={this.handleChange("lastName")}/>
                <br></br>
                <TextField 
                        id="phone" 
                        label="Phone Number"
                        // disabled="true" 
                        value={phone} 
                        onChange={this.handleChange("phone")}/>
                <br></br>
                <TextField 
                        id="email" 
                        label="Email"
                        // disabled="true"
                        value={email} 
                        onChange={this.handleChange("email")}/>
                <br></br>
                <TextField 
                        id="age" 
                        label="Age" 
                        /// disabled="true"
                        value={age}
                        onChange={this.handleChange("age")}/>
                <br></br>
                <TextField 
                        id="country" 
                        label="Country"
                        /// disabled="true"
                        value={country} 
                        onChange={this.handleChange("country")}/>
                <br></br>
                <TextField 
                        id="favoriteSite" 
                        label="Facebook/Insta/Twitter"
                        /// disabled="true"
                        value={favoriteSite} 
                        onChange={this.handleChange("favoriteSite")}/>
                <br></br>
                
                <div>
                        <Button variant="contained" 
                        style={{
                            position: 'absolute', left: '85%', top: '110%',
                            transform: 'translate(-50%, -50%)',
                            backgroundColor: '#E1173F'
                        }} 
                        className={classes.marginTop}
                        onClick={this.submitData}
                        >
                        <Typography variant="h6" style={{textAlign: 'right', color: 'white'}}>
                            SUBMIT MODIFIED INFO
                        </Typography>
                        </Button>
                </div>

                </form>
            </div>
          );
        }
 }

    Profile.propTypes = {
      classes: PropTypes.object.isRequired,
   };
  
   export default withStyles(styles)(Profile);