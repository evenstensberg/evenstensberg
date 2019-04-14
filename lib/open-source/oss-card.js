import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

function openLink(link) {
  window.open(link);
}
const styles = {
  card: {
    maxWidth: 345,
    margin: 100
  },
  media: {
    objectFit: 'contain',
  },
};


function OSSCard(props) {
  const { classes, logo, title, text, link, onModalClick } = props;
  
  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Open Source Project"
          className={classes.media}
          height="140"
          image={logo}
          title={title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {title}
          </Typography>
          <Typography component="p">
            {text}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button onClick={() => onModalClick(title)} size="small" color="primary">
          Learn More
        </Button>
        <Button onClick={() => openLink(link)} size="small" color="primary">
          Link
        </Button>
      </CardActions>
    </Card>
  );
}

OSSCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(OSSCard);