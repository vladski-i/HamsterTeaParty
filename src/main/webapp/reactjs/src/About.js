import React from 'react';
import Typography from '@material-ui/core/Typography';

class About  extends React.Component {

    state = {
        username: ''
    };

    componentDidMount = () => { 
        this.setState ({

        })
    }

    componentDidUpdate = () => {    
        
    }

    handleClickShowPassword = () => {
        if (this.state.showPassword === false) {
            this.setState({
                showPassword: true
            });
        }
        else {
            this.setState({
                showPassword: false
            });
        }
    }

    handleMouseDownPassword = () => {
        
    }

    handleChange = (prop) => (event) => {
        this.setState({ 
            ...this.state, 
            [prop]: event.target.value 
        });
      };

    handleSubmit = () => {
        
    }

    render () {

        return (
            <div style={{
                position: 'absolute', left: '50%', top: '65%',
                transform: 'translate(-50%, -50%)'
            }}>
                <h1>ABOUT JOKES SITE</h1>
                <Typography paragraph>
                Reddit este un site web de divertisment, rețea de socializare și agregator de știri, unde membrii înregistrați ai comunității pot plasa conținut, cum ar fi postări textuale sau legături directe. Utilizatorii înregistrați pot vota postările (cu apreciere pozitivă sau negativă). Postările sunt organizate după domeniul de interes, în așa-numitele subreddit-uri. Subreddit-urile au tematici diverse, cum ar fi știri, jocuri, filme, muzică, cărți, fitness, alimente și partajarea imaginilor. Trimiterile cu mai multe voturi în sus apar în partea de sus a subreditului lor și, dacă primesc suficiente voturi, în cele din urmă apar  pe prima pagină a site-ului. În ciuda unor reguli stricte care interzic hărțuirea, administratorii Reddit-ului cheltuiesc resurse considerabile pentru moderarea site-ului.
                </Typography>
                În februarie 2018, Reddit a avut 542 de milioane de vizitatori lunar (234 milioane de utilizatori unici), clasându-se drept cel mai vizitat site-ul din SUA și # 6 din lume, potrivit Alexa Internet, cu 57,4% de utilizatori provenind din Statele Unite, urmat de Marea Britanie la 7,5% și Canada la 6,3%. În 2015, Reddit a văzut 82,54 miliarde de vizionări de pagină, 73,15 milioane de trimiteri, 725,85 milioane de comentarii și 6,89 miliarde de voturi de la utilizatori.
                <Typography paragraph>
                Reddit a fost fondat în 2005 de colegii de cameră de la Universitatea din Virginia Steve Huffman și Alexis Ohanian. În octombrie 2006 Condé Nast Publications a achiziționat site-ul. Conform situției din august 2012, Reddit operează ca o entitate independentă deși Advance este în continuare cel mai mare acționar al acesteia.[3] Sediul Reddit se află în San Francisco, California.
                </Typography>
                <br></br>
                <Typography paragraph>
                Reddit is broken up into more than a million communities known as “subreddits,” each of which covers a different topic. The name of a subreddit begins with /r/, which is part of the URLs that Reddit uses. For example, /r/nba is a subreddit where people talk about the National Basketball Association, while /r/boardgames is a subreddit for people to discuss board games. Those are straightforward subreddits, but they can get weird, such as /r/birdswitharms, a subreddit devoted to pictures of birds…with arms.
                </Typography>
                <Typography paragraph>
                If you’re just looking at Reddit for the first time, you may be a bit confused by what you are seeing, so here’s a quick rundown. The homepage (or “front page”) shows you various posts that are currently trending on the site, pulled from a variety of subreddits. You can click the sort button in the upper left to sort by posts that are “hot” (trending), new, controversial, and more.
                </Typography>
            </div>
          );
        }
 }
  
   export default (About);