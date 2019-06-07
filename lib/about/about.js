import React from "react";
import PropTypes from "prop-types";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import Grid from "@material-ui/core/Grid";


const styles = theme => ({
  avatar: {
    margin: 10,
    width: 400,
    height: 400, 
  },
  [theme.breakpoints.down('xs')]: {
    avatar: {
        margin: 10,
        width: 300,
        height: 300, 
      },
  },
  root: {
    height: "100vh"
  },
  gridSect: {
    width: "100vw"
  },
  link: {
    width: 200,
    height: 200
  },
  adaptText: {
      margin: '10px',
      textAlign: 'center'
  }
});


function About(props) {
  const { classes } = props;
  return (
    <Grid
      container
      direction="column"
      justify="center"
      alignItems="center"
      className={classes.root}
    >
      <Grid
      container
        direction="row"
        justify="space-evenly"
        alignItems="center"
      >
        <Typography variant="h4" id="about-title" className={classes.adaptText}>
          Hi 👋🏽, I'm Even 🇳🇴
        </Typography>
        <Avatar
          alt="Even Stensberg"
          src={require("./logos/me.jpg")}
          className={classes.avatar}
        />
        <Typography variant="h6" id="about-title" className={classes.adaptText}>
          I'm a a Computer Science student at The
          Artic University of Norway
        </Typography>
      </Grid>
    </Grid>
  );
}

About.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(About);
