import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import Markdown from './Markdown';

function blogContent(content) {
    return <Markdown>{content}</Markdown>;
 };

const styles = theme => ({
    card: {
        maxWidth: '100%',
        margin: '20px'
      },
      media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
      },
      expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
          duration: theme.transitions.duration.shortest,
        }),
      },
      expandOpen: {
        transform: 'rotate(180deg)',
      },
      avatar: {
        backgroundColor: red[500],
      },
})

class Internal extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            expanded: false
        }
    }
    
    handleExpandClick = () => {
        this.setState({
            expanded: !this.state.expanded
        })
    }

    render() {
        const {classes, imgUrl, title, createdAt, description, content} = this.props;
        const {expanded} = this.state;
        
        const blogContentComponent = blogContent(content);

        return (
            <Card className={classes.card}>
         <CardHeader
          avatar={
            <Avatar
            alt="Even Stensberg"
            src={require("./logos/avatar.jpg")}
            className={classes.avatar}
          />
          }
          title={title}
          subheader={new Date(createdAt).toDateString()}
        />
            <CardMedia
              className={classes.media}
              image={imgUrl}
              title="Paella dish"
            />
            <CardContent>
              <Typography variant="body2" color="textSecondary" component="p">
                {description}
              </Typography>
            </CardContent>
            <CardActions disableSpacing>
              <IconButton aria-label="Add to favorites">
                <FavoriteIcon />
              </IconButton>
              <IconButton aria-label="Share">
                <ShareIcon />
              </IconButton>
              <IconButton
                className={clsx(classes.expand, {
                  [classes.expandOpen]: expanded,
                })}
                onClick={this.handleExpandClick}
                aria-expanded={expanded}
                aria-label="Show more"
              >
                <ExpandMoreIcon />
              </IconButton>
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
              <CardContent>
                  {blogContentComponent}
              </CardContent>
            </Collapse>
          </Card>
          );
    }
}

Internal.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Internal);