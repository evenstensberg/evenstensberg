import React, {Component} from 'react';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Grid from "@material-ui/core/Grid";
import Cardy from './cardy';
import socketIOClient from "socket.io-client";
var socket;

const styles = {
  root: {
    width: '100vw',
    textAlign: 'center',
  },
  blogPosts: {
  }
};


class Blog extends Component {
    constructor() {
        super();
        this.state = {
            endpoint: 'https://even.dev',
            posts: []
        };
        socket = socketIOClient(this.state.endpoint);
      }
    componentWillMount() {
        socket.emit("get_medium_posts");
    }
    componentDidMount() {
        socket.on("server_medium_posts", this.getMediumPosts);
    }
    componentWillUnmount() {
        socket.off("get_medium_posts");
        socket.off("server_medium_posts");
    }
    getMediumPosts = (data) => {
        const newData = data.filter( (post) => {
            let isMine = post.title.indexOf("CLI") >= 0 || post.title.indexOf("cli") >= 0 || post.link.indexOf("evenstensberg") >= 0;
            return isMine && post.title !== "Thanks for the comment. We are going to enforce webpack-cli.";
        });
        this.setState({
            posts: newData.sort(function(a, b) {
                a = new Date(a.created);
                b = new Date(b.created);
                return a>b ? -1 : a<b ? 1 : 0;
            })
        });
    }
    render() {
        const { classes } = this.props;
        const { posts } = this.state;
        return (<div className={classes.root}>
             <Typography component="h2" variant="h1" gutterBottom>
               Writing
            </Typography>
            <Grid className={classes.blogPosts} container
          direction="row"
          justify="center"
          alignItems="center"
          >
            {posts.length > 0 ? posts.map( (post, idx) => {
                   let imgUrl;
                   if(idx <= 14) {
                       console.log("hi")
                     imgUrl = require(`./logos/boat_${idx + 1}.jpg`);
                   } else {
                     imgUrl = require("./logos/wave.png");
                   }
                   console.log(imgUrl, idx)
                return(<Grid key={"post-" + idx} item xs={12} sm={12} xl={6} zeroMinWidth>
                    <Cardy {...post} idx={idx} imgUrl={imgUrl} />
                </Grid>)
            }) : null}
            </Grid>
        </div>
        )
    }
}

const SimpleModalWrapped = withStyles(styles)(Blog);
export default SimpleModalWrapped;
