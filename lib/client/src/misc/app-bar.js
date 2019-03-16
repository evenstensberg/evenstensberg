import React from 'react';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import MenuIcon from '@material-ui/icons/Menu';


const styles = {
    typo: {
        paddingTop: '15px'
    },
    root: {
        flexGrow: 1,
      },
      grow: {
        flexGrow: 1,
      },
      menuButton: {
        marginLeft: -12,
        marginRight: 20,
      },
  };


class LongMenu extends React.Component {
  state = {
    anchorEl: null,
  };

  handleClick = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  render() {
    const { anchorEl } = this.state;
    const open = Boolean(anchorEl);
    const { classes } = this.props;
    return (
      <div  className={classes.root}>
          <div style={{
              display: 'inline-flex'
          }}>
          <img src={require('./webpacklogo.png')} height="80" />
          <Typography variant="h4" gutterBottom className={classes.typo}>
            Create a new configuration
             </Typography>
          </div>
      </div>
    );
  }
}

export default withStyles(styles)(LongMenu);