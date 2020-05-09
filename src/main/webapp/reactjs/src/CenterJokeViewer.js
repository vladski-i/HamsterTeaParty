import React from 'react';
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
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import RedeemIcon from '@material-ui/icons/Redeem';
import Chip from '@material-ui/core/Chip';
import TagFacesIcon from '@material-ui/icons/TagFaces';
import TextField from "@material-ui/core/TextField";
import Alert from '@material-ui/lab/Alert';
import { NavLink, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
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
    
class CentralJokeViewer extends React.Component {

    state = {
        jokeId: 0,
        jokeText: 'Heat 1/2 cup of the broth in a pot until simmering, add saffron and set aside for 10 minutes. Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over medium-high heat. Add chicken, shrimp and chorizo, and cook, stirring occasionally until lightly browned, 6 to 8 minutes. Transfer shrimp to a large plate and set aside, leaving chicken and chorizo in the pan. Add pimentón, bay leaves, garlic, tomatoes, onion, salt and pepper, and cook, stirring often until thickened and fragrant, about 10 minutes. Add saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil. Add rice and stir very gently to distribute. Top with artichokes and peppers, and cook without stirring, until most of the liquid is absorbed, 15 to 18 minutes. Reduce heat to medium-low, add reserved shrimp and mussels, tucking them down into the rice, and cook again without stirring, until mussels have opened and rice is just tender, 5 to 7 minutes more. (Discard any mussels that don’t open. Set aside off of the heat to let rest for 10 minutes, and then serve.',
        jokePoster: 'Tomi',
        jokeTags: [],
        jokePosterId: 1,
        jokePostedAt: 0,
        jokeUserId: 1,
        searchedJoke: '',
        editable: false,
        html: 'Heat 1/2 cup of the broth in a pot until simmering, add saffron and set aside for 10 minutes. Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over medium-high heat. Add chicken, shrimp and chorizo, and cook, stirring occasionally until lightly browned, 6 to 8 minutes. Transfer shrimp to a large plate and set aside, leaving chicken and chorizo in the pan. Add pimentón, bay leaves, garlic, tomatoes, onion, salt and pepper, and cook, stirring often until thickened and fragrant, about 10 minutes. Add saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil. Add rice and stir very gently to distribute. Top with artichokes and peppers, and cook without stirring, until most of the liquid is absorbed, 15 to 18 minutes. Reduce heat to medium-low, add reserved shrimp and mussels, tucking them down into the rice, and cook again without stirring, until mussels have opened and rice is just tender, 5 to 7 minutes more. (Discard any mussels that don’t open. Set aside off of the heat to let rest for 10 minutes, and then serve.',
        newTag: '',
        chipData: [],
        userCanEdit: true,
        joke: {
            posterId: '',
            title: ''
        }
    };

    componentDidMount = () => { 
        let jokeId = this.props.match.params.joke_id;

        this.setState ({
            ...this.state,
            jokePoster: 'Altcineva',
            jokeTags: [],
            jokePosterId: 1,
            jokePostedAt: 0,
            jokeId: jokeId
        })

        let cnt = 0;
        fetch("http://localhost:8090/joke?_id=" + jokeId).
        then((res) => res.json()).then((res) => {

                let chipData = res.tags.slice();
                console.log(chipData);

                for (let i = 0; i < chipData.length; i++) {
                    let newObject = {
                        label: chipData[i],
                        key: i
                    }
                    chipData[i] = newObject;
                }

                console.log(chipData);
                this.setState({
                        ...this.state,
                        joke: res,
                        userCanEdit: (res.title === this.props.userToken.userName) ? true : false,
                        editable: (res.title === this.props.userToken.userName) ? true : false,
                        chipData: chipData
                    }
                )
            }
        )
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
        /// fac un filter prin toate glumele si le re-render-uiesc in main page doar pe alea care contin cuvantul cautat
    }

    handleChange = (prop) => (event) => {
        this.setState({ 
            ...this.state, 
            [prop]: event.target.value 
        });
      };

      handleChangeJokeText = evt => {

        let newJoke = this.state.joke;
        newJoke["content"] = evt.target.value;

        this.setState({ 
            ...this.state,
            joke: newJoke
         });
      };
    
    
      toggleEditable = () => {
        this.setState({ editable: !this.state.editable });
      };

      handleSubmit = () => {
            /// dau send la this.state, mai exact la joke (jokeId, jokeText)
            console.log(this.state);
            axios.post("http://localhost:8090/postJoke",{
            title : this.props.userToken.userName,
            content : this.state.jokeText,
            posterId : this.state.jokePoster,
            tags: this.state.chipData.map((tag) => {
                return tag.label;
            }),
            createdAt: new Date()
        },
        {headers :{
            Authorization : this.props.userToken.userToken
        }})
        .then(res => {
            console.log(res);
            console.log(res.data);
            setTimeout(() => {
                this.setState({ visibleSuccesMessage: !this.state.visibleSuccesMessage });
            }, 0);
            setTimeout(() => {
                this.setState({ visibleSuccesMessage: !this.state.visibleSuccesMessage });
            }, 1900);
            setTimeout(() => {
                this.props.history.push('/');
            }, 2100);
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

    handleUpvote = () => {    
        console.log('lentile dior');
        axios.post("http://localhost:8090/upvote",{
            title : this.props.userToken.userName,
            content : this.state.jokeText,
            posterId : this.state.jokePoster,
            tags: this.state.chipData.map((tag) => {
                return tag.label;
            }),
            createdAt: new Date()
        },
        {headers :{
            Authorization : this.props.userToken.userToken
        }})
        .then(res => {
            console.log(res);
            console.log(res.data);
            setTimeout(() => {
                this.setState({ visibleSuccesMessage: !this.state.visibleSuccesMessage });
            }, 0);
            setTimeout(() => {
                this.setState({ visibleSuccesMessage: !this.state.visibleSuccesMessage });
            }, 1900);
            setTimeout(() => {
                this.props.history.push('/');
            }, 2100);
        }
    );
    }

    handleGiveAward = () => {    
        console.log('geaca de print');
        axios.post("http://localhost:8090/award",{
            title : this.props.userToken.userName,
            content : this.state.jokeText,
            posterId : this.state.jokePoster,
            tags: this.state.chipData.map((tag) => {
                return tag.label;
            }),
            createdAt: new Date()
        },
        {headers :{
            Authorization : this.props.userToken.userToken
        }})
        .then(res => {
            console.log(res);
            console.log(res.data);
            setTimeout(() => {
                this.setState({ visibleSuccesMessage: !this.state.visibleSuccesMessage });
            }, 0);
            setTimeout(() => {
                this.setState({ visibleSuccesMessage: !this.state.visibleSuccesMessage });
            }, 1900);
            setTimeout(() => {
                this.props.history.push('/');
            }, 2100);
        }
    );
    }


    render () {

        const {
            jokeId,
            jokePoster,
            searchedJoke,
            newTag,
            chipData,
            joke,
            userCanEdit
        } = this.state;

        const {
            classes
         } = this.props;

         console.log(joke);

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
      <Link to={ `/profile/${joke.posterId}` }
                             className="removeUnderline"
        >
        <CardHeader
            avatar={
            <Avatar aria-label="recipe" style={{backgroundColor: '#E1173F'}}>
                 {`${joke.title[0]}`}
            </Avatar>
            }
            title={`${joke.title}`}
            subheader={`${joke.createdAt}`}
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
          html={this.state.joke.content}
          disabled={!this.state.editable} // use true to disable edition
          onChange={this.handleChangeJokeText} // handle innerHTML change
          onBlur={this.sanitize}
        />

        {
            (!userCanEdit) ?
            <div>
            </div>
            :
            <TextField
                id="newTag"
                label="Add tag here"
                value={newTag}
                style={{
                    marginLeft: 30,
                    marginTop: -20,
                }}
                onChange={this.handleChange("newTag")}
                onBlur={this.handleNewTag}
                onSubmit={this.handleNewTag}
            />
        }

            {<div component="ul" className={classes.root}>
            {
            
                chipData.map((data) => {
                let icon;

                if (data.label === 'React') {
                icon = <TagFacesIcon />;
                }

                return (
                <li key={data.key}>
                    {
                        (userCanEdit === true)
                        ?
                        <div>
                        <Chip
                        icon={icon}
                        label={'#' + data.label}
                        onDelete={data.label === 'React' ? undefined : this.handleDelete(data)}
                        className={classes.chip}
                        />
                        </div>
                        :
                        <div>
                        <Chip
                        icon={icon}
                        label={'#' + data.label}
                        /// onDelete={data.label === 'React' ? undefined : this.handleDelete(data)}
                        className={classes.chip}
                        />
                        </div>
                    }
                </li>
                );
            })
            }
            </div>
            }


        {
        (!userCanEdit) ?
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
                Submit EDIT
            </Typography>
        </Button>
        </div>
        </div>
        }

        </div>
        {
            (this.props.userToken.loggedIn === true) ?
            <div>
            <CardActions disableSpacing style={{marginTop: (userCanEdit === true) ? -60 : 0}}>     
                <IconButton 
                    aria-label="add to favorites"
                    onClick={this.handleUpvote}>
                <ThumbUpIcon />
                </IconButton>
                <IconButton 
                    aria-label="share"
                    onClick={this.handleGiveAward}>
                <RedeemIcon />
                </IconButton>
            </CardActions>
            </div>
            :
            <div>
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

 CentralJokeViewer.propTypes = {
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


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(CentralJokeViewer)))
