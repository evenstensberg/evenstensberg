import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Markdown from './Markdown';

import {
  Link
} from "react-router-dom";

import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import GridListTileBar from '@material-ui/core/GridListTileBar';

import LaunchIcon from '@material-ui/icons/Launch';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';

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
import github from '../../posts/github.md';

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
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
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
  gridList: {
  /*   flexWrap: 'nowrap', */
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
  CF_title: {
    marginTop: theme.spacing(20),
  }
}));

const code_posts = [
  { title: 'GitHub Sponsors', content: github, query: '/github', subtitle: 'You can sponsor my work in OSS' },
  { title: 'A Guide to Good Pull Request Reviews', content: prs, query: '/reviews', subtitle: 'Writing good Pull Requests and reviewing properly' },
  { title: 'S19 Internship at Cognite', content: cognite, query: '/intern', subtitle: 'A summary of my summer at Cognite' },
  { title: 'Using less time in tools', content: tools, query: '/infrastructure', subtitle: 'Using tools the correct way to speed up development' },
  { title: 'Apache and PHP with OCI8 + Oracle Instant Client in Mac OSX', content: apache, query: '/apache', subtitle: 'A guide to set up Oracle drivers on OSX' },
  { title: 'Architectural Beams in Front End', content: arch, query: '/arch', subtitle: 'Making good front-end layers' },
  { title: 'Building Front End Applications with Deno', content: deno, query: '/deno', subtitle: 'Creating front-end applications in a secure environment' },
  { title: 'First Meaningful Paint: When page content finally shows up to the party', content: fmp, query: '/fmp', subtitle: 'First Meaningful Paint and a performance walkthrough' },
  { title: 'Writing a solid Google Summer of Code Proposal', content: gsoc, query: '/gsoc', subtitle: 'Tips and guide to being selected as a gsoc student' },
  { title: '0CJS is not what you might think it is', content: ojs, query: '/ojs', subtitle: 'Setting better defaults for users' },
  { title: 'Are manual Performance Optimizations sufficient enough?', content: perf, query: '/perf', subtitle: 'Data-driven performance' }
];

const cf_posts = [
  {title: 'San Fransisco CrossFit Center'},
  {title: 'United Barbells'},
  {title: 'CrossFit Salzburg'},
  {title: 'CrossFit Munich'}
];

export default function Blog(props) {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg">
        <Toolbar>
          <Button size="small" onClick={() => { window.open("https://github.com/evenstensberg") }}>Code</Button>
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
              Code
              </Typography>
            <GridList dense={true} cellHeight={160} className={classes.root} cols={2.5}>
              {code_posts.map(post => {
                return (
                  <GridListTile key={post.content.substr(0, 40)}>
                    <GridListTileBar
                      title={post.title}
                      subtitle={<span>{post.subtitle}</span>}
                      actionIcon={
                        <IconButton aria-label={`info about ${post.title}`} className={classes.icon}>
                          <Link to={'/posts'+post.query}><LaunchIcon /></Link>
                        </IconButton>
                      }
                    />
                  </GridListTile>
                )
              })}
            </GridList>
            <Typography variant="h2" gutterBottom className={classes.CF_title}>
              CrossFit
              </Typography>
              <GridList dense={true} cellHeight={160} className={classes.root} cols={2.5}>
              {cf_posts.map(post => {
                return (
                  <GridListTile key={post.title.substr(0, 10)}>
                    <GridListTileBar
                      title={post.title}
                      actionIcon={
                        <IconButton aria-label={`info about ${post.title}`} className={classes.icon}>
                          <LaunchIcon />
                        </IconButton>
                      }
                    />
                  </GridListTile>
                )
              })}
            </GridList>
          </Grid>
        </Grid>
      </Container>
    </React.Fragment>
  );
}