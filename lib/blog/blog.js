import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';

import {
  Link
} from "react-router-dom";

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

import sfcf from '../../posts/sfcf.md';
import ubsf from '../../posts/ubsf.md';
import munichcf from '../../posts/cfmunich.md';
import cfsalzburg from '../../posts/cfsalzburg.md';

import MainMenu from './main-menu';

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

const code_posts = [
  { 
    title: 'A Guide to Good Pull Request Reviews', 
    content: prs, query: '/reviews', 
    subtitle: 'Writing good Pull Requests and reviewing properly',
    img: require('./imgs/env.jpeg')
  },
  { 
    title: 'S19 Internship at Cognite', 
    content: cognite, 
    query: '/intern', 
    subtitle: 'A summary of my summer at Cognite',
    img: require('./imgs/cali.jpeg')
  },
  { 
    title: 'Using less time in tools', 
    content: tools, query: '/infrastructure', 
    subtitle: 'Using tools the correct way to speed up development',
    img: require('./imgs/view.jpeg') 
  },
  { 
    title: 'Apache and PHP with OCI8 + Oracle Instant Client in Mac OSX', 
    content: apache, 
    query: '/apache', 
    subtitle: 'A guide to set up Oracle drivers on OSX',
    img: require('./imgs/yose.jpeg')
  },
  { 
    title: 'Architectural Beams in Front End', 
    content: arch, 
    query: '/arch', 
    subtitle: 'Making good front-end layers',
    img: require('./imgs/waves.jpeg')
  },
  { 
    title: 'Building Front End Applications with Deno', 
    content: deno, 
    query: '/deno', 
    subtitle: 'Creating front-end applications in a secure environment',
    img: require('./imgs/berlin.jpg')
  },
  { 
    title: 'First Meaningful Paint: When page content finally shows up to the party', 
    content: fmp, 
    query: '/fmp', 
    subtitle: 'First Meaningful Paint and a performance walkthrough',
    img: require('./imgs/yose.jpeg')
  },
  { 
    title: 'Writing a solid Google Summer of Code Proposal', 
    content: gsoc, 
    query: '/gsoc', 
    subtitle: 'Tips and guide to being selected as a gsoc student',
    img: require('./imgs/env.jpeg')
  },
  { 
    title: '0CJS is not what you might think it is', 
    content: ojs, 
    query: '/ojs', 
    subtitle: 'Setting better defaults for users',
    img: require('./imgs/suns.jpeg')
  },
  { 
    title: 'Are manual Performance Optimizations sufficient enough?',
    content: perf, 
    query: '/perf', 
    subtitle: 'Data-driven performance',
    img: require('./imgs/watery.jpeg')
  }
];

const cf_posts = [
  { 
    title: 'San Fransisco CrossFit Center',
    content: sfcf,
    query: '/sfcf',
    subtitle: 'Golden Gate 🌉',
    img: require('./imgs/cfsf.png')
  },
  { 
    title: 'United Barbells',
    content: ubsf,
    query: '/ubsf',
    subtitle: 'Move the dirt 🌱',
    img: require('./imgs/ubsf.png')
  },
  {
    title: 'CrossFit Salzburg',
    content: cfsalzburg,
    query: '/cfsalzburg',
    subtitle: 'Mountains and pull-ups 🏔',
    img: require('./imgs/cfsalzburg.png')
  },
  { 
    title: 'CrossFit Munich',
    content: munichcf,
    query: '/cfmunich',
    subtitle: 'Code & Muscle-ups ☀️',
    img: require('./imgs/cfmunich.png')
  }
];

const art_images = [
  { 
    title: 'Starry Night over Yosemite 🏞',
    img: require('./imgs/starry-night.jpg')
  },
];


export default function Blog(props) {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg">
        <Toolbar>
          <Button size="small" onClick={() => { window.open("https://github.com/evenstensberg") }}>GitHub</Button>
          <Button size="small" onClick={() => { window.open("https://twitter.com/evenstensberg") }}>Twitter</Button>
          <Typography
            component="h2"
            variant="h5"
            color="inherit"
            align="center"
            className={classes.toolbarTitle}
          >
            Even Stensberg
          </Typography>
        <MainMenu />
        </Toolbar>
        <Grid container spacing={5} className={classes.mainGrid}>
          <Grid item xs={12} md={12}>
            <Typography variant="h2" gutterBottom id='code-section'>
              Code
              </Typography>
            <GridList dense={true} cellHeight={160} className={classes.root} cols={2.5}>
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