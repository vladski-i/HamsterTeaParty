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

const styles = theme => ({
    root: {},
    media: {
      height: 0,
      paddingTop: "56.25%" // 16:9
    },
    avatar: {
        backgroundColor: '#E1173F'
    }
  });

  
class TrendingTags extends React.Component {

    state = {
        tags: [
            'funny',
            'post',
            'creepy',
            'sad',
            'emo',
            'sad',
            'scared',
            'suna femeia'
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
        tags,
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
                this.state.tags.map(tag => (
                    <div>
                       <Card> 
                        <CardHeader
                            avatar={
                            <Avatar aria-label="recipe" className={classes.avatar}>
                                R
                            </Avatar>
                            }
                            title="Shrimp and Chorizo Paella"
                            subheader="September 14, 2016"
                        />
                        <CardContent className="marginTop">
                            <p className="Blend"
                                onClick={this.handleChangeText}> 
                            { `${tag}`} 
                            </p>
                        </CardContent>
                        </Card>
                    </div>
                ))
            }

            <br></br> 
        </div>
    );
    }
}

TrendingTags.propTypes = {
    classes: PropTypes.object.isRequired,
 };

 export default withStyles(styles)(TrendingTags);