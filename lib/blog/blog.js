import React, { useState } from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Switch from '@material-ui/core/Switch';

import { lightBlue } from '@material-ui/core/colors';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';

import { useHistory, Link } from "react-router-dom";
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';

import LaunchIcon from '@material-ui/icons/Launch';
import IconButton from '@material-ui/core/IconButton';

import apache from '../../posts/apache.md';
import arch from '../../posts/arch.md';
import deno from '../../posts/deno.md';
import fmp from '../../posts/fmp.md';
import gsoc from '../../posts/gsoc.md';
import ojs from '../../posts/ojs.md';
import perf from '../../posts/perf.md';
import tools from '../../posts/infrastructure.md'
import cognite from '../../posts/intern.md';
import prs from '../../posts/reviews.md';
import understandingPerf from '../../posts/performance.md';

import sfcf from '../../posts/sfcf.md';
import ubsf from '../../posts/ubsf.md';
import munichcf from '../../posts/cfmunich.md';
import cfsalzburg from '../../posts/cfsalzburg.md';

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
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
    zIndex: 5,
  },
  darkRoot: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
    zIndex: 5,
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
  gridList: {},
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
  CF_title: {
    marginTop: theme.spacing(20),
  },
  art_title: {
    marginTop: theme.spacing(20),
  },
  art_list: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    backgroundColor: theme.palette.background.paper,
    zIndex: 5,
  }
}));

const PurpleSwitch = withStyles({
  switchBase: {
    color: lightBlue[300],
    '&$checked': {
      color: lightBlue[500],
    },
    '&$checked + $track': {
      backgroundColor: lightBlue[500],
    },
  },
  checked: {},
  track: {},
})(Switch);


const code_posts = [
/*   {
    title: 'Understanding Performance Metrics',
    content: understandingPerf,
    query: '/performance',
    subtitle: 'How to reduce CO2 emissions with web perf',
    img: require('./imgs/watery.jpeg')
  }, */
  { 
    title: 'A Guide to Good Pull Request Reviews', 
    content: prs, query: '/reviews', 
    subtitle: 'Writing good Pull Requests and reviewing properly',
    img: require('./imgs/env.jpeg').default
  },
  { 
    title: 'S19 Internship at Cognite', 
    content: cognite, 
    query: '/intern', 
    subtitle: 'A summary of my summer at Cognite',
    img: require('./imgs/cali.jpeg').default
  },
  { 
    title: 'Using less time in tools', 
    content: tools, query: '/infrastructure', 
    subtitle: 'Using tools the correct way to speed up development',
    img: require('./imgs/view.jpeg').default
  },
  { 
    title: 'Apache and PHP with OCI8 + Oracle Instant Client in Mac OSX', 
    content: apache, 
    query: '/apache', 
    subtitle: 'A guide to set up Oracle drivers on OSX',
    img: require('./imgs/yose.jpeg').default
  },
  { 
    title: 'Architectural Beams in Front End', 
    content: arch, 
    query: '/arch', 
    subtitle: 'Making good front-end layers',
    img: require('./imgs/waves.jpeg').default
  },
  { 
    title: 'Building Front End Applications with Deno', 
    content: deno, 
    query: '/deno', 
    subtitle: 'Creating front-end applications in a secure environment',
    img: require('./imgs/berlin.jpg').default
  },
  { 
    title: 'First Meaningful Paint: When page content finally shows up to the party', 
    content: fmp, 
    query: '/fmp', 
    subtitle: 'First Meaningful Paint and a performance walkthrough',
    img: require('./imgs/yose.jpeg').default
  },
  { 
    title: 'Writing a solid Google Summer of Code Proposal', 
    content: gsoc, 
    query: '/gsoc', 
    subtitle: 'Tips and guide to being selected as a gsoc student',
    img: require('./imgs/env.jpeg').default
  },
  { 
    title: '0CJS is not what you might think it is', 
    content: ojs, 
    query: '/ojs', 
    subtitle: 'Setting better defaults for users',
    img: require('./imgs/suns.jpeg').default
  },
  { 
    title: 'Are manual Performance Optimizations sufficient enough?',
    content: perf, 
    query: '/perf', 
    subtitle: 'Data-driven performance',
    img: require('./imgs/watery.jpeg').default
  },
];

const cf_posts = [
  { 
    title: 'San Fransisco CrossFit Center',
    content: sfcf,
    query: '/sfcf',
    subtitle: 'Golden Gate 🌉',
    img: require('./imgs/cfsf.png').default
  },
  { 
    title: 'United Barbells',
    content: ubsf,
    query: '/ubsf',
    subtitle: 'Move the dirt 🌱',
    img: require('./imgs/ubsf.png').default
  },
  {
    title: 'CrossFit Salzburg',
    content: cfsalzburg,
    query: '/cfsalzburg',
    subtitle: 'Mountains and pull-ups 🏔',
    img: require('./imgs/cfsalzburg.png').default
  },
  { 
    title: 'CrossFit Munich',
    content: munichcf,
    query: '/cfmunich',
    subtitle: 'Code & Muscle-ups ☀️',
    img: require('./imgs/cfmunich.png').default
  }
];

const art_images = [
  { 
    title: 'Starry Night over Yosemite 🏞',
    img: require('./imgs/starry-night.jpg').default
  },
  { 
    title: 'Cactus 🌵',
    img: require('./imgs/cactus.jpeg').default
  },
  { 
    title: 'Mixed Signals 〰️',
    img: require('./imgs/mixed-signals.jpeg').default
  },
];


export default function Blog(props) {

  const [state, setState] = React.useState(false);

  const handleChange = event => {
    setState(event.target.checked);
  };
  
  
  let history = useHistory();

  const handleHistoryChange = () => {
    history.push("/fitness");
  }


  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg">
        <Toolbar>
          <Button size="small" onClick={() => { window.open("https://github.com/evenstensberg") }}>GitHub</Button>
          <Button size="small" onClick={() => { window.open("https://twitter.com/evenstensberg") }}>Twitter</Button>
         {/*  <Button size="small" onClick={handleHistoryChange}>My Exercises</Button> */}
          <Typography
            component="h2"
            variant="h5"
            color="inherit"
            align="center"
            className={classes.toolbarTitle}
          >
            E.S
          </Typography>
          <Button size="small" onClick={() => { window.open("https://instagram.com/evenstensberg") }}>Instagram</Button>
        </Toolbar>
        <Grid container spacing={5} className={classes.mainGrid}>
          <Grid item xs={12} md={12}>
            <Typography variant="h2" gutterBottom id='code-section'>
              Code
              </Typography>
            <GridList cellHeight={160} className={classes.root} cols={2.5}>
              {code_posts.map(post => {
                return (
                  <GridListTile key={post.content.substr(0, 40)}>
                    {post.img ? <img src={post.img} /> : null}
                    <GridListTileBar
                      title={post.title}
                      subtitle={<span>{post.subtitle}</span>}
                      actionIcon={
                        <IconButton aria-label={`info about ${post.title}`} className={classes.icon}>
                          <Link to={'/posts' + post.query}><LaunchIcon /></Link>
                        </IconButton>
                      }
                    />
                  </GridListTile>
                )
              })}
            </GridList>
            <Container maxWidth="lg" fixed>
            <Typography variant="h2" gutterBottom className={classes.CF_title} id="cf-section">
              CrossFit
              </Typography>
            <GridList dense={true} spacing={4} cellHeight={160} className={classes.root} cols={2.5}>
              {cf_posts.map(post => {
                {post.img ? <img src={post.img} /> : null}
                return (
                  <GridListTile key={post.content.substr(0, 40)}>
                    {post.img ? <img src={post.img} /> : null}
                    <GridListTileBar
                      title={post.title}
                      subtitle={<span>{post.subtitle}</span>}
                      actionIcon={
                        <IconButton aria-label={`info about ${post.title}`} className={classes.icon}>
                          <Link to={'/posts' + post.query}><LaunchIcon /></Link>
                        </IconButton>
                      }
                    />
                  </GridListTile>
                )
              })}
            </GridList>
            <Container maxWidth="lg" fixed spacing={5}>
            <Typography variant="h2" className={classes.art_title} gutterBottom id='art-section'>
              Art
              </Typography>
            <GridList dense={true} className={classes.art_list} >
              {art_images.map(post => {
                return (
                  <GridListTile key={post.title.substr(0, 9)}>
                    {post.img ? <img src={post.img} /> : null}
                    <GridListTileBar title={post.title} />
                  </GridListTile>
                )
              })}
              </GridList>
            </Container>
            </Container>
          </Grid>
        </Grid>
      </Container>
    </React.Fragment>
  );
}