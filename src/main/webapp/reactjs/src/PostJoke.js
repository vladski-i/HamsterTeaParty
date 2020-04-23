import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Demo from './demo';
import Navbar from './Navbar';
import Drawer from './Drawer';
import SidebarRight from './SidebarRight';
import SidebarLeft from './SidebarLeft';
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/styles';
import SearchBar from 'material-ui-search-bar';
import { Link } from 'react-router-dom';
import ContentEditable from "react-contenteditable";
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import Chip from '@material-ui/core/Chip';
import TagFacesIcon from '@material-ui/icons/TagFaces';
import TextField from "@material-ui/core/TextField";
import axios from 'axios';

const styles = theme => ({
    root: {
        display: 'flex',
        justifyContent: 'left',
        marginLeft: 15,
        flexWrap: 'wrap',
        listStyle: 'none',
        padding: 0,
        marginTop: 0,
        margin: 0,
      },
    media: {
      height: 0,
      paddingTop: "56.25%" // 16:9
    },
    avatar: {
      backgroundColor: '#E1173F'
    },
    chip: {
        margin: 12,
      }
  });
    
const loggedIn = 1;

class PostJoke extends React.Component {

    state = {
        jokeId: 0,
        jokeText: 'Insert your text here...',
        jokePoster: 'Tomi',
        jokeTags: [],
        jokePosterId: 1,
        jokePostedAt: 0,
        jokeUserId: 1,
        searchedJoke: '',
        editable: false,
        html: 'Heat 1/2 cup of the broth in a pot until simmering, add saffron and set aside for 10 minutes. Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over medium-high heat. Add chicken, shrimp and chorizo, and cook, stirring occasionally until lightly browned, 6 to 8 minutes. Transfer shrimp to a large plate and set aside, leaving chicken and chorizo in the pan. Add pimentón, bay leaves, garlic, tomatoes, onion, salt and pepper, and cook, stirring often until thickened and fragrant, about 10 minutes. Add saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil. Add rice and stir very gently to distribute. Top with artichokes and peppers, and cook without stirring, until most of the liquid is absorbed, 15 to 18 minutes. Reduce heat to medium-low, add reserved shrimp and mussels, tucking them down into the rice, and cook again without stirring, until mussels have opened and rice is just tender, 5 to 7 minutes more. (Discard any mussels that don’t open. Set aside off of the heat to let rest for 10 minutes, and then serve.',
        chipData: [],
        setchipData: [],
        newTag: ''
    };

    componentDidMount = () => { 
        let id = this.props.match.params.joke_id;

        console.log(id);

        let chipData = [
            { key: 0, label: 'tomi' },
            { key: 1, label: 'o' },
            { key: 2, label: 'pupa' },
            { key: 3, label: 'pe' },
            { key: 4, label: 'cori' }
          ];

          this.setState ({
            ...this.state,
            jokePoster: 'Altcineva',
            jokeTags: [],
            jokePosterId: 1,
            jokePostedAt: 0,
            jokeId: id,
            editable: loggedIn,
            chipData: chipData,
        })
        

        // fetch la date din backend

        /// setez si userId
    }

    componentDidUpdate = () => {    
        
    }

    handleChangeText = () => {
        console.log("here");

        if (this.state.jokePosterId == this.state.jokeUserId) {
            this.setState({
                ...this.state,
                jokeText: ''
            });
        }
        else {
            // do nothing
        }
    }

    handleChange = (prop) => (event) => {
        this.setState({ 
            ...this.state, 
            [prop]: event.target.value 
        });
      };
    
    searchJokes = () => {
        console.log('im searchin for a new joke tati');
        /// fac un filter prin toate glumele si le re-render-uiesc in main page doar pe alea care contin cuvantul cautat
    }

    handleChangeJokeText = evt => {
        this.setState({ jokeText: evt.target.value });
      };
    
      toggleEditable = () => {
        this.setState({ editable: !this.state.editable });
      };

      handleSubmit = () => {
            /// dau send la this.state, mai exact la joke (jokeId, jokeText)
            /// MAI EXACT O SA FIE UN INSERT IN MONGODB

            console.log(this.state);

            /// send it to back-end/andor - mongodb
        axios.post("http://localhost:8090/jokes",{
            title : 'mihaita_boss',
            content : this.state.jokeText,
            posterId : this.state.jokePoster,
        })
        .then(res => {
            console.log(res);
            console.log(res.data);
        }
    );
      }

      handleDelete = (chipToDelete) => () => {
        
        console.log('here');
        
        let {
            chipData
        } = this.state;

        chipData = chipData.filter((chip) => chip.key !== chipToDelete.key);

        this.setState({
            ...this.state,
            chipData
        });
      };

      handleNewTag = () => {
        let {
            chipData,
            newTag
        } = this.state;

        let newKey = 0;
        let alreadyThere = 0;
        chipData.map((chip) => {
            if (chip.key > newKey) {
                newKey = chip.key;
            }
            if (chip.label === newTag) {
                alreadyThere = 1;
            }
        });

        const newChip = {
            key: newKey + 1,
            label: newTag
        };

        if (alreadyThere === 0) {  
            this.setState({
                ...this.state,
                newTag: '',
                chipData: [...chipData, newChip]
            });
        }
        else {
            this.setState({
                ...this.state,
                newTag: ''
            });
        }
      }


    render () {

        const {
            jokeId,
            jokePoster,
            searchedJoke,
            chipData,
            newTag
        } = this.state;

        const {
            classes
         } = this.props;

        return (
            <div className>
                <br></br>
                <br></br>

        <SearchBar
            style={{marginTop: 50
            }}
            value={searchedJoke}
            onChange={(newValue) => {
                console.log("s-a modificat textul cautarii");
                this.setState({ searchedJoke: newValue })}
            }
            onRequestSearch={() => {
                console.log("trebuie cautate doar glumele care au tagul asta");
                this.searchJokes(searchedJoke)}
            }
        />

        <br></br>
    
      <Card>

        <div>
        <Typography variant="h2" style={{textAlign: 'center'}}>
            POST JOKE
        </Typography>
        </div>


      <Link to={ `/profile/${jokePoster}` }
                             className="removeUnderline"
        >
        <CardHeader
            style={{
                marginTop: -40,
                marginBottom: 40
            }}
            avatar={    
            <Avatar aria-label="recipe" style={{backgroundColor: '#E1173F'}}>
                {`${jokePoster[0]}`}
            </Avatar>
            }
            title="Shrimp and Chorizo Paella"
            subheader="September 14, 2016"
        />
        </Link>

        <CardContent>
            <p className="Blend"
                onClick={this.handleChangeText}> 
            </p>
        </CardContent>

        <div>  
        <ContentEditable
          className="editable"
          tagName="pre"
          placeholder="This is there place where you can insert text"
          html={this.state.jokeText}
          disabled={!this.state.editable} // use true to disable edition
          onChange={this.handleChangeJokeText} // handle innerHTML change
          onBlur={this.sanitize}
        />

        </div>

            <CardContent>
            </CardContent>

            <TextField
                id="newTag"
                label="Add tag here"
                value={newTag}
                style={{
                    marginLeft: 30,
                    marginTop: -30,
                }}
                onChange={this.handleChange("newTag")}
                onBlur={this.handleNewTag}
                onSubmit={this.handleNewTag}
            />

            {<div component="ul" className={classes.root}>
            {
            
                chipData.map((data) => {
                let icon;

                if (data.label === 'React') {
                icon = <TagFacesIcon />;
                }

                return (
                <li key={data.key}>
                    <Chip
                    icon={icon}
                    label={data.label}
                    onDelete={data.label === 'React' ? undefined : this.handleDelete(data)}
                    className={classes.chip}
                    />
                </li>
                );
            })
            }
            </div>
            }


        {
        (!loggedIn) ?
        <div>
        </div>
        :
        <div>
        <div style={{ display: "flex" }}>

        <Button variant="contained"  
                style={{ marginLeft: 'auto',
                         marginRight: 100,
                         marginTop: 50,
                         backgroundColor: '#E1173F'}} 
                className={classes.marginTop}
                endIcon={<Icon style={{color: 'white'}}>send</Icon>}
                onClick={this.handleSubmit}>
            <div></div>
            <Typography variant="h6" style={{textAlign: 'right', color: 'white'}}>
                POST JOKE
            </Typography>
        </Button>
        </div>
        </div>
        }


            <CardContent>
            </CardContent>
      </Card>


            <div style={{textAlign: 'center'}}>
                <h1> </h1>
            </div>
            </div>
          );
        }
 }

 PostJoke.propTypes = {
    classes: PropTypes.object.isRequired,
 };

 export default withStyles(styles)(PostJoke);