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

class TryJsitePremium extends React.Component {

    state = {
        cardOwnerName: '',
        cardNumber: '',
        expDate: '',
        cvv: ''
    };

    componentDidMount = () => { 
        this.setState ({

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


    submitData = (data) => {

        const {
            cardOwnerName,
            cardNumber,
            expDate,
            cvv
        } = this.state;

        const {
            moneyToBePaid,
            coinsToBeAdded 
        } = data;

        const newData = {
            cardOwnerName,
            cardNumber,
            expDate,
            cvv,
            moneyToBePaid,
            coinsToBeAdded
        };

        console.log(newData);
    }

    handleSubmitFirstType = () => {
        /// chestii de facut cand se apasa submit pe butonu de CREATE ACCOUNT
        const data = {
            moneyToBePaid: 5,
            coinsToBeAdded: 50    /// asta sa fie reparat
        };
        this.submitData(data);
        /// send it to back-end/andor - mongodb
    }
    handleSubmitSecondType = () => {
        /// chestii de facut cand se apasa submit pe butonu de CREATE ACCOUNT
        const data = {
            moneyToBePaid: 10, 
            coinsToBeAdded: 100    /// asta sa fie reparat
        };
        this.submitData(data);
        /// send it to back-end/andor - mongodb
    }
    handleSubmitThirdType = () => {
        /// chestii de facut cand se apasa submit pe butonu de CREATE ACCOUNT
        const data = {
            moneyToBePaid: 15,
            coinsToBeAdded: 200    /// asta sa fie reparat
        };
        this.submitData(data);
        /// send it to back-end/andor - mongodb
    }

    someFunction = () => {
        console.log('hereeeeeeee')
    }

    render () {

        const {
            cardOwnerName,
            cardNumber,
            expDate,
            cvv
        } = this.state;

        const {
            classes
         } = this.props;

        return (
            <div className>
                <form  
                    className={classes.root}
                    noValidate  
                    autoComplete="off"
                    style={{
                        position: 'absolute', left: '50%', top: '50%',
                        transform: 'translate(-50%, -50%)'
                    }}
                    >

                <div>
                <Typography variant="h2" style={{textAlign: 'center'}}>
                    TRY JSITE PREMIUM
                </Typography>
                </div>

                <TextField style={{
                    marginTop: 70
                }} 
                    id="cardOwnerName" 
                    label="Card Owner Name"
                    value={cardOwnerName} 
                    onChange={this.handleChange("cardOwnerName")}/>
                <br></br>
                <TextField 
                    id="cardNumber"
                    label="Card Number"
                    value={cardNumber} 
                    onChange={this.handleChange("cardNumber")}/>
                <br></br>
                <TextField 
                    id="expDate" 
                    label="Expiration Date" 
                    value={expDate} 
                    onChange={this.handleChange("expDate")}/>
                <br></br>
                <TextField 
                    id="cvv" 
                    label="Cvv" 
                    value={cvv} 
                    onChange={this.handleChange("cvv")}/>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>

                <div style={{ display: "flex" }}>
                <Button variant="contained" 
                    style={{ marginLeft: "auto" ,
                    backgroundColor: '#E1173F'}}
                    className={classes.marginTop}
                    /// onClick={this.someFunction}
                    onClick={this.handleSubmitFirstType}
                    >
                <Typography variant="h6" style={{textAlign: 'right', color: 'white'}}>
                    FREE TRIAL 1 (0$)
                </Typography>
                </Button>

                <Button variant="contained" 
                        style={{ marginLeft: "auto" ,
                        backgroundColor: '#E1173F'}}
                        className={classes.marginTop}
                        onClick={this.handleSubmitSecondType}
                       >
                <Typography variant="h6" style={{textAlign: 'right', color: 'white'}}>
                 PREMIUM MEMBERSHIP (10$)
                </Typography>
                </Button>

                <Button variant="contained" 
                        style={{ marginLeft: "auto" ,
                        backgroundColor: '#E1173F'}}
                        className={classes.marginTop}
                        onClick={this.handleSubmitThirdType}
                        >
                <Typography variant="h6" style={{textAlign: 'right', color: 'white'}}>
                 GOLD MEMBERSHIP (20$)
                </Typography>
                </Button>
                </div>
                </form>
            </div>
          );
        }
 }

 TryJsitePremium.propTypes = {
      classes: PropTypes.object.isRequired,
   };
  
   export default withStyles(styles)(TryJsitePremium);