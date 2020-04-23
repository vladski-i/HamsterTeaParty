import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
// import SearchBar from './SearchBar'
import SearchBar from 'material-ui-search-bar'
import Grid from '@material-ui/core/Grid';
import { red } from "@material-ui/core/colors";
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/styles';
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import InputBase from '@material-ui/core/InputBase';
import { Link } from 'react-router-dom';

const styles = theme => ({
    root: {},
    media: {
      height: 0,
      paddingTop: "56.25%" // 16:9
    },
    avatar: {
        backgroundColor: '#453535', 
      /// backgroundColor: red[500]
    }
  });

  
class JokePostTable extends React.Component {

    state = {
        jokeId: 0,
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
        ],
        searchedJoke: ''
    };

    componentDidMount = () => { 
        
        /*this.setState ({
            
        })
        */
        /// setez si userId
    }

    componentDidUpdate = () => {    
        
    }

    handleChangeText = () => {
        console.log("here");

        if (this.state.jokePosterId == this.state.jokeUserId) {
            this.setState({
                ...this.state
            });
        }
        else {
            // do nothing
        }
    }

    handleChange = (prop) => (event) => {
        console.log('URMATORUL PAS');
        this.setState({ 
            ...this.state, 
            [prop]: event.target.value 
        });
      };

    handleLove = () => {    
        console.log('lentile dior');
    }

    handleShare = () => {    
        console.log('geaca de print');
    }

    searchJokes = () => {
        console.log('im searchin for a new joke tati');
    }

  render () {

    const {
        jokes,
        searchedJoke
    } = this.state;

    const {
        classes
     } = this.props;

    return (
        <div className>
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

            {
                this.state.jokes.map(joke => (
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

            <br></br> 
        </div>
    );
    }
}

JokePostTable.propTypes = {
    classes: PropTypes.object.isRequired,
 };

 export default withStyles(styles)(JokePostTable);