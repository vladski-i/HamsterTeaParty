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
import { red } from "@material-ui/core/colors";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/styles';
import SearchBar from 'material-ui-search-bar';
import { Link } from 'react-router-dom';

const styles = theme => ({
    root: {},
    media: {
      height: 0,
      paddingTop: "56.25%" // 16:9
    },
    avatar: {
      backgroundColor: "blue", 
      //  backgroundColor: red[500]
    }
  });
  

class CentralJokeViewer extends React.Component {

    state = {
        jokeId: 0,
        jokeText: 'Heat 1/2 cup of the broth in a pot until simmering, add saffron and set aside for 10 minutes. Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over medium-high heat. Add chicken, shrimp and chorizo, and cook, stirring occasionally until lightly browned, 6 to 8 minutes. Transfer shrimp to a large plate and set aside, leaving chicken and chorizo in the pan. Add pimentón, bay leaves, garlic, tomatoes, onion, salt and pepper, and cook, stirring often until thickened and fragrant, about 10 minutes. Add saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil. Add rice and stir very gently to distribute. Top with artichokes and peppers, and cook without stirring, until most of the liquid is absorbed, 15 to 18 minutes. Reduce heat to medium-low, add reserved shrimp and mussels, tucking them down into the rice, and cook again without stirring, until mussels have opened and rice is just tender, 5 to 7 minutes more. (Discard any mussels that don’t open. Set aside off of the heat to let rest for 10 minutes, and then serve.',
        jokePoster: 'Tomi',
        jokeTags: [],
        jokePosterId: 1,
        jokePostedAt: 0,
        jokeUserId: 1,
        searchedJoke: ''
    };

    componentDidMount = () => { 
        let id = this.props.match.params.joke_id;
        this.setState ({
            ...this.state,
            jokePoster: 'Altcineva',
            jokeTags: [],
            jokePosterId: 1,
            jokePostedAt: 0,
            jokeId: id
        })

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
    
    searchJokes = () => {
        console.log('im searchin for a new joke tati');
    }


    render () {

        const {
            jokeId,
            jokePoster,
            searchedJoke
        } = this.state;

        const {
            classes
         } = this.props;

        return (
            <div className>
                <br></br>
                <br></br>

        <SearchBar
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
      <Link to={ `/profile/${jokePoster}` }
                             className="removeUnderline"
        >
        <CardHeader
            avatar={
            <Avatar aria-label="recipe" style={{backgroundColor: "blue"}}>
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
            { `${this.state.jokeText}`} 
            </p>
        </CardContent>
        <CardActions disableSpacing>
            <IconButton aria-label="add to favorites">
            <FavoriteIcon />
            </IconButton>
            <IconButton aria-label="share">
            <ShareIcon />
            </IconButton>
        </CardActions>
            <CardContent>
            </CardContent>
      </Card>
            <div style={{textAlign: 'center'}}>
                <h1> Id-ul joke-ului curent este {this.state.jokeId}</h1>
            </div>
            </div>
          );
        }
 }

 CentralJokeViewer.propTypes = {
    classes: PropTypes.object.isRequired,
 };

 export default withStyles(styles)(CentralJokeViewer);