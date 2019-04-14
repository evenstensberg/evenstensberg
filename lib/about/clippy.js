import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Chip from '@material-ui/core/Chip';

const styles = theme => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
  },
  chip: {
    margin: theme.spacing.unit,
  },
});

function handleClick(link) {
  window.open(link);
}

function OutlinedChips(props) {
  const { classes, title, link, Icon, color } = props;
  return (
    <div className={classes.root}>
      <Chip
        icon={<Icon />}
        label={title}
        clickable
        className={classes.chip}
        color={color}
        variant="outlined"
        onClick={() => handleClick(link)}
      />
    </div>
  );
}

OutlinedChips.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(OutlinedChips);