import React,{Component} from 'react';
import { withStyles } from '@material-ui/core/styles';
import {Card,CardActions,CardContent,CardMedia,Button,Typography} from '@material-ui/core';

const styles = {
  card: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
};
/*
<div>
      <Card className={classes.card}>
        <CardMedia
          className={classes.media}
          image="/static/images/cards/contemplative-reptile.jpg"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="headline" component="h2">
            Lizard
          </Typography>
          <Typography component="p">
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" color="primary">
            Share
          </Button>
          <Button size="small" color="primary">
            Learn More
          </Button>
        </CardActions>
      </Card>
    </div>
*/
class Choice extends Component {

  render() {
    let {choice,index,updateOrder,isCustomerSelected,isOrderFinished,launchGallery,launchWebcam} = this.props;
    const { classes } = this.props;
    return (
      <div>
        {/* <article key={`article-${index}`} className="choice">
          <h2 key={`h2-${index}`}>{choice.text}</h2>
          <p key={`p-${index}`}>{choice.description}</p>
          <img key={`img-${index}`} src={choice.image} alt={choice.text} onClick={() => launchGallery(choice.orderKey, choice.imageList)}/>
            <button key={`btn-${index}`} onClick={() => (choice.choiceKey === 'ownShirt') ? launchWebcam() : updateOrder(choice.orderKey, choice.choiceKey)}>Select</button>

        </article> */}
        <Card className={classes.card}>
          <CardMedia
            className={classes.media}
            image={choice.image}
            title={choice.text}
          />
          <CardContent>
            <Typography gutterBottom variant="headline" component="h2">
              {choice.text}
            </Typography>
            <Typography component="p">
              {choice.description}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small" color="primary">
              S
            </Button>
            <Button size="small" color="primary">
              M
            </Button>
            <Button size="small" color="primary">
              L
            </Button>
            <Button size="small" color="primary">
              XL
            </Button>
            <Button size="small" color="primary">
              XXL
            </Button>
          </CardActions>
        </Card>
      </div>
    )
  }
}

export default withStyles(styles)(Choice);
