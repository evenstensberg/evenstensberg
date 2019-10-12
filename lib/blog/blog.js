import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
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
import postTwelve from '../../posts/github.md';

import berlin from './berlin.jpg';

const useStyles = makeStyles(theme => ({
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

const posts = [postTwelve, postElleven, postTen, post9, post1, post2, post3, post4, post5, post6, post7, post8];

export default function Blog(props) {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg">
        <Toolbar>
          <Button size="small" onClick={() => { window.open("https://github.com/evenstensberg")  }}>Code</Button>
          <Typography
            component="h2"
            variant="h5"
            color="inherit"
            align="center"
            className={classes.toolbarTitle}
          > 
            Even Stensberg
          </Typography>
        </Toolbar>
          <Grid container spacing={5} className={classes.mainGrid}>
            <Grid item xs={12} md={12}>
            <Typography variant="h2" gutterBottom>
                Poem Collection
              </Typography>
              {posts.map(post => (
                <Markdown className={classes.markdown} key={post.substring(0, 40)}>
                  {post}
                </Markdown>
              ))}
            </Grid>
          </Grid>
      </Container>
    </React.Fragment>
  );
}