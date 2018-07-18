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

class Choice extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isAddButtonDisabled: true,
      size: "",
    }
  }

  sizeOnClick(size) {
    if (this.state.isAddButtonDisabled) {
      this.setState({
        isAddButtonDisabled: false,
      });
    }
    this.setState({
      size: size
    })
  }

  render() {
    let {DB,choice,index,updateOrder,isCustomerSelected,isOrderFinished,launchGallery,launchWebcam,updateSize,currentStep,sizeText,cutText,deleteAndChangeOrder} = this.props;
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
            onClick={() => launchGallery(choice.orderKey, choice.imageList)}
          />

          {/* Different card content based on if order is finished */}
          {isOrderFinished ?
            // Layout for Summary pages
            <CardContent>
              <Typography gutterBottom variant="headline" component="h2">
                {choice.text}
              </Typography>
              <Typography gutterBottom variant="headline" component="h3">
                Size: {sizeText}
              </Typography>
              <Typography gutterBottom variant="headline" component="h3">
                Cut: {cutText}
              </Typography>
            </CardContent>
              :
            // Layout for Order page
            <CardContent>
              <Typography gutterBottom variant="headline" component="h2">
                {choice.text}
              </Typography>
              <Typography component="p">
                {choice.description}
              </Typography>
            </CardContent>
          }

          {/* Show size buttons on step 1 of Order page */}
          {currentStep === 0 &&
            <CardActions disableActionSpacing={true}>
              {DB.choices.sizes.map((size,index) => {
                return (
                  <Button onClick={() => this.sizeOnClick(size.choiceKey)} size="small" color="primary">
                    {size.text}
                  </Button>
                )
              })}
            </CardActions>
          }

          {/* Different card actions based on if order is finished */}
          {isOrderFinished ?

            <CardActions>
              <Button variant="contained" color="primary" fullWidth={true} onClick={() => deleteAndChangeOrder(index)}>
                Update this Order
              </Button>
            </CardActions>
            :
            <CardActions>
              <Button disabled={currentStep === 0 ? this.state.isAddButtonDisabled : false} variant="contained" color="primary" fullWidth={true} onClick={() => (choice.choiceKey === 'ownShirt') ? launchWebcam(this.state.size) : updateOrder(choice.orderKey, choice.choiceKey, this.state.size)}>
                Add to cart
              </Button>
            </CardActions>
          }
        </Card>
      </div>
    )
  }
}

export default withStyles(styles)(Choice);
