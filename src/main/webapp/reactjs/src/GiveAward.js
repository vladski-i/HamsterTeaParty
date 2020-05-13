import React from 'react';
import TextField from '@material-ui/core/TextField';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/styles';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import axios from 'axios';
import { NavLink, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import Alert from '@material-ui/lab/Alert';

const styles = theme => ({
    root: {
        "& > *": {
          margin: 2 ,
          width: "100ch"
        }
      }
  });

class GiveAward extends React.Component {

    state = {
        cardOwnerName: '',
        cardNumber: '',
        expDate: '',
        cvv: '',
        serverResponseInvalidCardInformation: false,
        serverResponseNotEnoughMoney: false,
        serverResponseNoResponse: false
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
        
        /// chestii de facut cand se apasa submit pe butonu de  GET NUMBER OF COINS
        console.log('onClick');
        axios.post('http://localhost:8090/giveAward',{
            cardOwnerName: cardOwnerName,
            cardNumber: cardNumber,
            expDate: expDate,
            cvv: cvv,
            moneyToBePaid: moneyToBePaid,
            coinsToBeAdded: coinsToBeAdded
        },
        {headers :{
            Authorization : this.props.userToken.userToken
        }})
        .then(res => {
            console.log(res);
            console.log(res.data);
            console.log(this.props);
            this.props.login_logout();
            setTimeout(() => {
                this.props.set_token(res.data.token, this.state.username, this.props);
                this.props.history.push('/');
            }, 1000);
        }).catch((error) => {
            // Error
            if (error.response) {
                // The request was made and the server responded with a status code
                // that falls out of the range of 2xx
                // console.log(error.response.data);
                console.log(error.response.status);
                if (error.response.status === 400) {
                    // exista user-ul dar nu are destui BANI IN CONTUL BANCAR
                    setTimeout(() => {
                        this.setState({ serverResponseNotEnoughMoney: !this.state.serverResponseNotEnoughMoney });   
                    }, 0);  // semnaleaza eroare print-un mesaj
                    setTimeout(() => {
                        this.setState({ serverResponseNotEnoughMoney: !this.state.serverResponseNotEnoughMoney });
                    }, 1500);  /// fa sa dispara mesajul de eroare
                } else if (error.response.status === 500) {
                    // DATELE TRIMISE DESPRE CARD NU SUNT VALIDE
                    setTimeout(() => {
                        this.setState({ serverResponseInvalidCardInformation: !this.state.serverResponseInvalidCardInformation });   
                    }, 0);  // semnaleaza eroare print-un mesaj
                    setTimeout(() => {
                        this.setState({ serverResponseInvalidCardInformation: !this.state.serverResponseInvalidCardInformation });
                    }, 1500);  /// fa sa dispara mesajul de eroare
                }
                // console.log(error.response.headers);
            } else if (error.request) {
                // The request was made but no response was received
                // `error.request` is an instance of XMLHttpRequest in the 
                // browser and an instance of
                // http.ClientRequest in node.js

                setTimeout(() => {
                    this.setState({ serverResponseNoResponse: !this.state.serverResponseNoResponse });   
                }, 0);  // semnaleaza eroare print-un mesaj

                setTimeout(() => {
                    this.setState({ serverResponseNoResponse: !this.state.serverResponseNoResponse });
                }, 1500);  /// fa sa dispara mesajul de eroare

                // console.log(error.request);
            } else {
                // Something happened in setting up the request that triggered an Error
            }
            /// console.log(error.config);
        });
    }

    handleSubmitFirstType = () => {
        /// chestii de facut cand se apasa submit pe butonu de CREATE ACCOUNT
        const data = {
            moneyToBePaid: 5,
            coinsToBeAdded: 50    /// asta sa fie reparat
        };
        this.submitData(data);
        console.log('here')
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
            cvv,
            serverResponseNotEnoughMoney,
            serverResponseInvalidCardInformation,
            serverResponseNoResponse
        } = this.state;

        const {
            classes
         } = this.props;

        return (
            <div className>

            <div style={{
            }}>
                {
                    /// alert message
                    (!serverResponseNoResponse) ?
                    <div>
                    </div>
                    :
                        <div style={{marginTop: 80,
                                    marginBottom: 50
                            }}>   
                            <Alert variant="filled" severity="warning">
                                An error has occurred. We're very sorry, please try again to get coins.
                            </Alert>
                        </div>
                }

                {
                    /// alert message
                    (!serverResponseNotEnoughMoney) ?
                    <div>
                    </div>
                    :
                        <div style={{marginTop: 80,
                                    marginBottom: 0
                            }}>   
                            <Alert variant="filled" severity="warning">
                                The card that you've used doesn't have enough money for this transaction.
                            </Alert>
                        </div>
                }

                {
                    /// alert message
                    (!serverResponseInvalidCardInformation) ?
                    <div>
                    </div>
                    :
                        <div style={{marginTop: 80,
                                    marginBottom: 0
                            }}>   
                            <Alert variant="filled" severity="warning">
                                The data you've used for this card is not correct. We're sorry. Maybe try again?
                            </Alert>
                        </div>
                }
                </div>

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
                <Typography variant="h2" style={{
                    textAlign: 'center',
                    marginTop: (serverResponseNoResponse === true ||
                                serverResponseNotEnoughMoney === true ||
                                serverResponseInvalidCardInformation === true) 
                                ? 80 : 0
                    }}>
                    GIVE AWARD
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
                    onClick={this.handleSubmitFirstType}
                    >
                <Typography variant="h6" style={{textAlign: 'right', color: 'white'}}>
                    GET 50 COINS (5$)
                </Typography>
                </Button>

                <Button variant="contained" 
                        style={{ marginLeft: "auto" ,
                        backgroundColor: '#E1173F'}} 
                        className={classes.marginTop}
                        onClick={this.handleSubmitSecondType}
                       >
                <Typography variant="h6" style={{textAlign: 'right', color: 'white'}}>
                    GET 100 COINS (10$)
                </Typography>
                </Button>

                <Button variant="contained" 
                        style={{ marginLeft: "auto" ,
                        backgroundColor: '#E1173F'}} 
                        className={classes.marginTop}
                        onClick={this.handleSubmitThirdType}
                        >
                <Typography variant="h6" style={{textAlign: 'right', color: 'white'}}>
                    GET 200 COINS (15$)
                </Typography>
                </Button>
                </div>
                </form>
            </div>
          );
        }
 }

 GiveAward.propTypes = {
      classes: PropTypes.object.isRequired,
   };
  
   const mapStateToProps = (state) => {
    return state;
  }

  const mapDispatchToProps = (dispatch) => {
    return {
      login_logout: () => { dispatch({ type: 'REMOVE_TOKEN' }) },
      set_token: (newToken, previousState) => { dispatch({ type: 'SET_TOKEN', token: newToken, previousState: previousState}) },
    }
  }


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(GiveAward)))
