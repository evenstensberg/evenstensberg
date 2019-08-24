import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Hidden from '@material-ui/core/Hidden';
import Link from '@material-ui/core/Link';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import Container from '@material-ui/core/Container';
import Markdown from './Markdown';

import post1 from '../../posts/apache.md';
import post2 from '../../posts/jsconf.md';
import post3 from '../../posts/arch.md';
import post4 from '../../posts/deno.md';
import post5 from '../../posts/fmp.md';
import post6 from '../../posts/gsoc.md';
import post7 from '../../posts/ojs.md';
import post8 from '../../posts/perf.md';
import post9 from '../../posts/infrastructure.md'
import postTen from '../../posts/intern.md';
import postElleven from '../../posts/reviews.md';

import berlin from './berlin.jpg';
import { withRouter } from 'react-router-dom'
// this also works with react-router-native


function MadeWithLove() {
  return (
    <Typography variant="body2" color="textSecondary" align="center" onClick={() => {
      window.scrollTo(0, 0);
    }}>
      {'Go to top'}
    </Typography>
  );
}

const useStyles = makeStyles(theme => ({
  toolbar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  toolbarTitle: {
    flex: 1,
  },
  toolbarSecondary: {
    justifyContent: 'space-between',
    overflowX: 'auto',
  },
  toolbarLink: {
    padding: theme.spacing(1),
    flexShrink: 0,
  },
  mainFeaturedPost: {
    position: 'relative',
    backgroundColor: theme.palette.grey[800],
    color: theme.palette.common.white,
    marginBottom: theme.spacing(4),
    backgroundImage: `url(${berlin})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
  },
  overlay: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    backgroundColor: 'rgba(0,0,0,.3)',
  },
  mainFeaturedPostContent: {
    position: 'relative',
    padding: theme.spacing(3),
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(6),
      paddingRight: 0,
    },
  },
  contOverRide: {
      color: 'white'
  },
  mainGrid: {
    marginTop: theme.spacing(3),
  },
  card: {
    display: 'flex',
  },
  cardDetails: {
    flex: 1,
  },
  cardMedia: {
    width: 160,
  },
  markdown: {
    ...theme.typography.body2,
    padding: theme.spacing(3, 0),
  },
  sidebarAboutBox: {
    padding: theme.spacing(2),
    backgroundColor: theme.palette.grey[200],
  },
  sidebarSection: {
    marginTop: theme.spacing(3),
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    marginTop: theme.spacing(8),
    padding: theme.spacing(6, 0),
  },
}));


const featuredPosts = [
  {
    title: 'Webpack CLI',
    date: 'Aug 2019',
    description:
      'Webpack CLI v4',
  },
  {
    title: 'Webpack UI',
    date: 'Aug 2019',
    description:
      'Webpack UI is currently in development.',
  },
];

const posts = [postElleven, postTen, post9, post1, post2, post3, post4, post5, post6, post7, post8];

export default function Blog(props) {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg">
        <Toolbar className={classes.toolbar}>
          <Button size="small" onClick={() => { window.open("https://twitter.com/evenstensberg")  }}>Social</Button>
          <Button size="small" onClick={() => { window.open("https://github.com/evenstensberg")  }}>Code</Button>
          <Typography
            component="h2"
            variant="h5"
            color="inherit"
            align="center"
            noWrap
            className={classes.toolbarTitle}
          >
              
            Even Stensberg
          </Typography>
          <Button size="small" onClick={() => { window.open("https://vsco.co/nilpointer")  }}>
            Photos
          </Button>
        </Toolbar>

        <main>
          {/* Main featured post */}
          <Paper className={classes.mainFeaturedPost}>
            {/* Increase the priority of the hero background image */}
            {
              <img
                style={{ display: 'none' }}
                src="https://source.unsplash.com/user/erondu"
                alt="background"
              />
            }
            <div className={classes.overlay} />
            <Grid container>
              <Grid item md={6}>
                <div className={classes.mainFeaturedPostContent}>
                  <Typography component="h1" variant="h3" color="inherit" gutterBottom>
                    JSConfEU 2019 - Festival X
                  </Typography>
                  <Typography variant="h5" color="inherit" paragraph>
                    A while ago I was in Berlin for the last JSConfEU ever. It was awesome, thanks to everyone making it great!
                  </Typography>
                  <Link variant="subtitle1" className={classes.contOverRide} onClick={() => {
                    window.open("https://2019.jsconf.eu/")
                  }}>
                    Learn more…
                  </Link>
                </div>
              </Grid>
            </Grid>
          </Paper>
          {/* End main featured post */}
          {/* Sub featured posts */}
          <Grid container spacing={4} className={classes.cardGrid}>
            {featuredPosts.map((post, idx) => (
              <Grid item key={post.title} xs={12} md={6}>
                <CardActionArea component="a" href="#">
                  <Card className={classes.card}>
                    <div className={classes.cardDetails}>
                      <CardContent>
                        <Typography component="h2" variant="h5">
                          {post.title}
                        </Typography>
                        <Typography variant="subtitle1" color="textSecondary">
                          {post.date}
                        </Typography>
                        <Typography variant="subtitle1" paragraph>
                          {post.description}
                        </Typography>
                        <Typography variant="subtitle1" color="primary" onClick={() => {
                          if(post.title === 'Webpack CLI') {
                            window.open("https://github.com/webpack/webpack-cli/issues/717")
                          } else {
                            window.open("https://survivejs.com/blog/webpack-ui-interview")
                          }
                        }}>
                          Learn more...
                        </Typography>
                      </CardContent>
                    </div>
                    <Hidden xsDown>
                      <CardMedia
                        className={classes.cardMedia}
                        image={idx % 2 === 0 ? "https://source.unsplash.com/user/erondu" : "https://source.unsplash.com/random"}
                        title="Image title"
                      />
                    </Hidden>
                  </Card>
                </CardActionArea>
              </Grid>
            ))}
          </Grid>
          {/* End sub featured posts */}
          <Grid container spacing={5} className={classes.mainGrid}>
            {/* Main content */}
            <Grid item xs={12} md={12}>
              <Typography variant="h3" gutterBottom>
                Fresh of the Press
              </Typography>
              <Divider />
              {posts.map(post => (
                <Markdown className={classes.markdown} key={post.substring(0, 40)}>
                  {post}
                </Markdown>
              ))}
            </Grid>
          </Grid>
        </main>
      </Container>
      <footer className={classes.footer}>
        <Container maxWidth="lg">
          <MadeWithLove />
        </Container>
      </footer>
    </React.Fragment>
  );
}