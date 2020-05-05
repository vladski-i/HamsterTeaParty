import React from 'react';
import TextField from '@material-ui/core/TextField';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/styles';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Link, NavLink, withRouter } from 'react-router-dom';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';

import Divider from '@material-ui/core/Divider';

import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import LocalAtmIcon from '@material-ui/icons/LocalAtm';
import EmojiEventsIcon from '@material-ui/icons/EmojiEvents';

import TrendingUpIcon from '@material-ui/icons/TrendingUp';
import NewReleasesIcon from '@material-ui/icons/NewReleases';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import PostAddIcon from '@material-ui/icons/PostAdd';

import { deepOrange, green } from '@material-ui/core/colors';
import Avatar from "@material-ui/core/Avatar";
import PersonIcon from '@material-ui/icons/Person';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import ContactMailIcon from '@material-ui/icons/ContactMail';
import ContactPhoneIcon from '@material-ui/icons/ContactPhone';
import LanguageIcon from '@material-ui/icons/Language';
import LocationCityIcon from '@material-ui/icons/LocationCity';
import FaceIcon from '@material-ui/icons/Face';
import FacebookIcon from '@material-ui/icons/Facebook';
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";

const styles = theme => ({
    root: {
        "& > *": {
          margin: 2 ,
          width: "100ch"
        }
      },
    square: {
        color: '#C82840',
        backgroundColor: '#C82840',
        height: 120,
        width: 120
      },
  });

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
        city: 'Husi',
        isSuperAdmin: false, 
        upvotedCounter: 123,
        awardedCounter: 2353,
        jokes: [ 
            {
                _id: '123456',
                posterId: '45679',
                posterName: 'Shrimp and Chorizo Paella',
                text: 'You 1/2 cup of the broth in a pot until simmering. large. Add chicken, shrimp and chorizo, and cook, stirring occasionally until lightly browned, 6 to 8 minutes. Transfer shrimp to a large plate and set aside, leaving chicken and chorizo in the pan.'
            },
            {
                _id: '123457',
                posterId: '45676',
                posterName: 'Tomita Palade zis TomiSefu',
                text:'Me 1/2 cup of the broth in a pot until simmering, add saffron and set aside for 10 minutes. Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over medium-high heat. Add chicken, shrimp and chorizo, and cook, stirring occasionally until lightly browned, 6 to 8 minutes. Transfer shrimp to a large plate and set aside, leaving chicken and chorizo in the pan.'
            },
            {
                _id: '123458',
                posterId: '45675',
                posterName: 'A venit sefu poti sa zici saru mana',
                text: 'Me shrimp to a large plate and set aside, leaving chicken and chorizo in the pan.'
            },
            {
                _id: '123459',
                posterId: '45575',
                posterName: 'Velea Talent - Sifon Afon',
                text: 'Me shrimp but how can you sleep in the night thinking u so soft to a large plate and set aside, leaving chicken and chorizo in the pan.'
            },
            {
                _id: '123459',
                posterId: '45673',
                posterName: 'Ion Ion Tiriac',
                text: 'You 1/2 cup of the broth in a pot until simmering, add saffron and set aside for 10 minutes. Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over medium-high heat. Add chicken, shrimp and chorizo, and cook, stirring occasionally until lightly browned, 6 to 8 minutes. Transfer shrimp to a large plate and set aside, leaving chicken and chorizo in the pan.'
            }
    ]
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
            showPassword,
            isSuperAdmin,
            upvotedCounter,
            awardedCounter
        } = this.state;

        const {
            classes
         } = this.props;

        return (
            <div>
            {
                (isSuperAdmin === false) 
                ? 

                <div>
                <div style={{textAlign: 'center'}}>
                <Typography variant="h2" 
                            style={{textAlign: 'center',
                                    marginTop: 100}}>
                    PROFILE PAGE
                </Typography>
                </div>

                <div style={{
                    position: 'absolute', left: '1%', top: '15%',
                }}>
                <List component="nav" 
                        style={{
                        width: '100%',
                        maxWidth: 360,
                        marginTop: 155,
                        position: 'fixed',
                        }} 
                        aria-label="mailbox folders">
                    

                    <div style={{
                            position: 'absolute', left: '10%', top: '-1050%',
                        }}>   
                        <Avatar style={{
                            position: 'absolute', left: '10%', top: '-1050%',
                        }}>   
                        TP
                        </Avatar>
                        </div>

                    <Typography variant="h6" 
                            style={{textAlign: 'center',
                                    marginTop: -170,
                                    marginBottom: 10}}>
                        USER ACTIVITY
                    </Typography>

                    <Divider light />
                    
                    <ListItem button margin>
                    <AttachMoneyIcon />
                    <ListItemText 
                                    disableTypography
                                    primary={<Typography variant='h6' style={{ color: '#C82840' }}>
                                        {`awarded jokes: ${awardedCounter}`}
                                        </Typography>}
                                    style = {{
                                    marginLeft: 20,
                                    marginTop: -2
                                    }}/>
                    </ListItem>
                  
                    <Divider />
                    
                    <ListItem button>
                    <PersonIcon />
                    <ListItemText 
                                    disableTypography
                                    primary={<Typography variant='h6' style={{ color: '#C82840' }}>
                                         {`upvoted jokes: ${upvotedCounter}`}
                                        </Typography>}
                                    style = {{
                                    marginTop: -2,
                                    marginLeft: 20
                                    }}/>
                    </ListItem> 
                    <Divider light />
                    <h1> </h1>

                </List>


                <div style={{
                    position: 'absolute', left: '27%', top: '10%',
                    /*transform: 'translate(-50%, -50%)'*/
                }}>

                <div >
                <List component="nav" 
                        style={{
                        width: '100%',
                        maxWidth: 360,
                        marginTop: 155,
                        position: 'fixed',
                        }} 
                        aria-label="mailbox folders">

                    <Typography variant="h6" 
                            style={{textAlign: 'center',
                                    marginTop: -15,
                                    marginBottom: 0}}>
                        ACCOUNT INFO
                    </Typography>

                    <Divider light />

                    <ListItem button>
                    <PersonIcon />
                    <ListItemText 
                                    disableTypography
                                    primary={<Typography variant='h6' style={{ color: '#C82840' }}>
                                         {`username: ${username}`}
                                        </Typography>}
                                    style = {{
                                    marginTop: -2,
                                    marginLeft: 20
                                    }}/>
                    </ListItem> 
                    <Divider light />

                    <ListItem button>
                    <PersonIcon />
                    
                    <ListItemText 
                                    disableTypography
                                    primary={<Typography variant='h6' style={{ color: '#C82840' }}>
                                         {`fullname: ${firstName + ' ' +  lastName}`}
                                    </Typography>} 
                                    style = {{
                                    marginTop: -2,
                                    marginLeft: 20
                                    }}
                                    />
                    </ListItem>

                    <Divider light />

                    <ListItem button>
                    <ContactMailIcon />
                    <ListItemText disableTypography
                                    primary={<Typography variant='h6' style={{ color: '#C82840' }}>
                                         {`country: ${country}`}
                                        </Typography>}
                                    style = {{
                                    marginTop: -2,
                                    marginLeft: 20
                                    }}/>
                    </ListItem>

                    <Divider light />

                    <ListItem button>
                    <ContactMailIcon />
                    <ListItemText disableTypography
                                    primary={<Typography variant='h6' style={{ color: '#C82840' }}>
                                         {`city: ${city}`}
                                        </Typography>}
                                    style = {{
                                    marginTop: -2,
                                    marginLeft: 20
                                    }}/>
                    </ListItem>

                    <Divider light />

                    <ListItem button>
                    <ContactMailIcon />
                    <ListItemText disableTypography
                                    primary={<Typography variant='h6' style={{ color: '#C82840' }}>
                                         {`age: ${age}`}
                                        </Typography>}
                                    style = {{
                                    marginTop: -2,
                                    marginLeft: 20
                                    }}/>
                    </ListItem>

                    <Divider light />
  
                    <h1> </h1>
                </List>

                
                </div>

                <div >
                <List component="nav" 
                        style={{
                        width: '100%',
                        maxWidth: 360,
                        marginTop: 155,
                        position: 'fixed',
                        }} 
                        aria-label="mailbox folders">

                    <Typography variant="h6" 
                            style={{textAlign: 'center',
                                    marginTop: 280,
                                    marginBottom: 0}}>
                        CONTACT INFO
                    </Typography>

                    <Divider light />

                    <ListItem button>
                    <PersonIcon />
                    <ListItemText 
                                    disableTypography
                                    primary={<Typography variant='h6' style={{ color: '#C82840' }}>
                                         {`phone: ${phone}`}
                                        </Typography>}
                                    style = {{
                                    marginTop: -2,
                                    marginLeft: 20
                                    }}/>
                    </ListItem> 
                    <Divider light />

                    <ListItem button>
                    <PersonIcon />
                    
                    <ListItemText 
                                    disableTypography
                                    primary={<Typography variant='h6' style={{ color: '#C82840' }}>
                                         {`social media: ${favoriteSite}`}
                                    </Typography>} 
                                    style = {{
                                    marginTop: -2,
                                    marginLeft: 20
                                    }}
                                    />
                    </ListItem>

                    <Divider light />

                    <ListItem button>
                    <ContactMailIcon />
                    <ListItemText disableTypography
                                    primary={<Typography variant='h6' style={{ color: '#C82840' }}>
                                         {`email: ${email}`}
                                        </Typography>}
                                    style = {{
                                    marginTop: -2,
                                    marginLeft: 20
                                    }}/>
                    </ListItem>

                    <Divider light />
  
                    <h1> </h1>
                </List>

                </div>

                </div>

                </div>

                <div style={{
                    position: 'absolute', left: '25%', top: '32%',
                    maxWidth: 950
                    /*transform: 'translate(-50%, -50%)'*/
                }}>

                <div style={{marginTop: -40, marginBottom: 40}}>
                

                <div>

                    <h2 style={{
                        marginBottom: 20
                    }}>Check some more jokes from this user...</h2>

                </div>

                {
                this.state.jokes.slice(0, (this.state.jokes.length > 3) ? 3 : this.state.jokes.length).map
                (joke => (
                    <div >
                       <Card> 
                       <Link to={ `/profile/${joke.posterId}` }
                             className="removeUnderline"
                       >
                        <CardHeader
                            avatar={
                            <Avatar aria-label="recipe" style={{backgroundColor: '#E1173F' }}                
                            >
                                {`${joke.posterName[0]}`}
                            </Avatar>
                            }
                            title={`${joke.posterName}`}
                            subheader="September 14, 2016"
                        />
                        </Link>
                       <Link to={ `/viewer/${joke._id}` }
                             className="removeUnderline"
                       >
                        <CardContent className="marginTop">
                            <p className="Blend"
                                onClick={this.handleChangeText}> 
                            { `${joke.text}`} 
                            </p>
                        </CardContent>
                        </Link>
                        </Card>
                    </div>
                ))
            }


                </div>
                </div>

                <div style={{
                    position: 'absolute', left: '27%', top: '10%',
                    /*transform: 'translate(-50%, -50%)'*/
                }}>

                <div >
    
                
                </div>
                </div>

                </div>
                :   
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
                <Typography variant="h2" 
                            style={{textAlign: 'center'
                            }}>
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
            }
            </div>
          );
        }
 }

    Profile.propTypes = {
      classes: PropTypes.object.isRequired,
   };
  
   export default withStyles(styles)(Profile);