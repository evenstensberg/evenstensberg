import React, { Component } from "react";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";

import OSSCard from "./oss-card";
import Modal from "./modal";

import webpackLogo from "./logos/webpack.png";
import nasaLogo from "./logos/nasa.png";
import lightHouseLogo from "./logos/lighthouse.png";

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  viewRoot: {
    height: '100vh'
  }
});

const projects = [
  {
    title: "webpack",
    logo: webpackLogo,
    text:
      "webpack is a module bundler that combines your assets and prepares them for web browsers.",
    link: "https://webpack.js.org",
    description:
      "Webpack is an Open Source project that stitches every module and asset you have and prepares it for web browsers to parse and compile. It is one of the most popular tools out there in the front-end stack and majorly used in a lot of websites running today. I started helping webpack back in 2016 and I am focused on the Command Line Interface to make the tool easier to use."
  },
  {
    title: "openmct",
    logo: nasaLogo,
    text:
      "OpenMCT is a Open Source Mission Control System developed at NASA AMES Research Center.",
    link: "https://nasa.github.io/openmct/plugins",
    description:
      "OpenMCT is a Platform that controls and monitors telemetry and mission critical data. It is used internally and other vendors like SpaceX is trying it out. I have helped by contributing to internal code and by creating plugins that integrates other mission control systems to the solution."
  },
  {
    title: "lighthouse",
    logo: lightHouseLogo,
    text: "Lighthouse is a performance tool used to audit webpages.",
    link: "https://developers.google.com/web/tools/lighthouse",
    description:
      "Lighthouse audits webpages and gives feedback on what they could improve. The tool is built by Google and I have contributed to the project infrastructure."
  }
];

class OSS extends Component {
  constructor() {
    super();
    this.state = {
      modalVisible: false,
      activeModal: null
    };
  }
  onModalClick = title => {
    const elem = projects.find(p => p.title === title);
    this.setState({
      modalVisible: true,
      activeModal: elem
    });
  };
  render() {
    const { modalVisible, activeModal } = this.state;
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <Grid
          container
          direction="row"
          justify="center"
          alignItems="center"
          className={classes.viewRoot}
        >
          {projects.map((p, idx) => {
            return (
              <Grid key={"grid-" + idx} item xs={4}>
                <OSSCard
                  {...p}
                  key={"card-" + idx}
                  onModalClick={this.onModalClick}
                />
              </Grid>
            );
          })}
        </Grid>
        {modalVisible ? <Modal modal={activeModal} /> : null}
      </div>
    );
  }
}

const SimpleModalWrapped = withStyles(styles)(OSS);
export default SimpleModalWrapped;
