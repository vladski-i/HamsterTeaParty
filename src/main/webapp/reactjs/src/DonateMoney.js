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

class DonateMoney extends React.Component {

    state = {
        cardOwnerName: '',
        cardNumber: '',
        expDate: '',
        cvv: '',
        donatedAmount: ''
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


    submitData = () => {

        const {
            cardOwnerName,
            cardNumber,
            expDate,
            cvv,
            donatedAmount
        } = this.state;

        const data = {
            cardOwnerName,
            cardNumber,
            expDate,
            cvv,
            donatedAmount
        }

        console.log(data);
    }

    handleSubmitFirstType = () => {
        /// chestii de facut cand se apasa submit pe butonu de CREATE ACCOUNT
        this.setState({
            ...this.state,
            donatedAmount: 5
        });
    }
    handleSubmitSecondType = () => {
        /// chestii de facut cand se apasa submit pe butonu de CREATE ACCOUNT
        this.setState({
            ...this.state,
            donatedAmount: 10
        });
    }
    handleSubmitThirdType = () => {
        /// chestii de facut cand se apasa submit pe butonu de CREATE ACCOUNT
        this.setState({
            ...this.state,
            donatedAmount: 20
        });
    }
    handleSubmitFourthType = () => {
        /// chestii de facut cand se apasa submit pe butonu de CREATE ACCOUNT
        this.setState({
            ...this.state,
            donatedAmount: 100
        });
    }

    handleClearAmount = () => {
        /// chestii de facut cand se apasa submit pe butonu de CREATE ACCOUNT
        this.setState({
            ...this.state,
            donatedAmount: ''
        });
    }

    render () {

        const {
            cardOwnerName,
            cardNumber,
            expDate,
            cvv,
            donatedAmount
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
                    DONATE US
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
                <TextField 
                    id="donatedAmount" 
                    label="How much do you want to donate? ($) " 
                    value={donatedAmount}
                    onChange={this.handleChange("donatedAmount")}/>
                <br></br>
                <br></br>
                <br></br>
                <br></br>


                {
                    this.state.donatedAmount === '' ?
                    
                        <div style={{ display: "flex" }}>
                        <Button variant="contained" 
                            style={{ marginLeft: "auto" ,
                            backgroundColor: '#E1173F'}} 
                            className={classes.marginTop}
                            onClick={this.handleSubmitFirstType}
                            >
                        <Typography variant="h6" style={{textAlign: 'right', color: 'white'}}>
                            DONATE 5$
                        </Typography>
                        </Button>

                        <Button variant="contained" 
                                style={{ marginLeft: "auto" ,
                                backgroundColor: '#E1173F'}}  
                                className={classes.marginTop}
                                onClick={this.handleSubmitSecondType}
                            >
                        <Typography variant="h6" style={{textAlign: 'right', color: 'white'}}>
                            DONATE 10$
                        </Typography>
                        </Button>

                        <Button variant="contained" 
                                style={{ marginLeft: "auto" ,
                                backgroundColor: '#E1173F'}}  
                                className={classes.marginTop}
                                onClick={this.handleSubmitThirdType}
                                >
                        <Typography variant="h6" style={{textAlign: 'right', color: 'white'}}>
                            DONATE 20$
                        </Typography>
                        </Button>

                        <Button variant="contained" 
                                style={{ marginLeft: "auto" ,
                                backgroundColor: '#E1173F'}} 
                                className={classes.marginTop}
                                onClick={this.handleSubmitFourthType}
                                >
                        <Typography variant="h6" style={{textAlign: 'right', color: 'white'}}>
                            DONATE 100$
                        </Typography>
                        </Button>

                </div>
                    :
                        <div>
                        <Button variant="contained" 
                        style={{
                            position: 'absolute', left: '40%', top: '110%',
                            transform: 'translate(-50%, -50%)',
                            backgroundColor: '#E1173F'
                        }} 
                        className={classes.marginTop}
                        onClick={this.submitData}
                        >
                        <Typography variant="h6" style={{textAlign: 'right', color: 'white'}}>
                            DONATE
                        </Typography>
                        </Button>

                        <Button variant="contained" 
                        style={{
                            position: 'absolute', left: '60%', top: '110%',
                            transform: 'translate(-50%, -50%)',
                            backgroundColor: '#E1173F'
                        }} 
                        className={classes.marginTop}
                        onClick={this.handleClearAmount}
                        >
                        <Typography variant="h6" style={{textAlign: 'right', color: 'white'}}>
                            CLEAR AMOUNT
                        </Typography>
                        </Button>
                        </div>
                }

                </form>
            </div>
          );
        }
 }

 DonateMoney.propTypes = {
      classes: PropTypes.object.isRequired,
   };
  
   export default withStyles(styles)(DonateMoney);