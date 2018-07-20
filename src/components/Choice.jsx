import React,{Component,Fragment} from 'react';
import { withStyles } from '@material-ui/core/styles';
import {Card,CardActions,CardContent,CardMedia,Button,Typography} from '@material-ui/core';

// default maxWidth: 345
const styles = {
  card: {
    maxWidth: 410,
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
    let {DB,choice,index,updateOrder,isOrderFinished,launchGallery,launchWebcam,
      currentStep,sizeText,cut,deleteAndChangeOrder,ownShirtImage} = this.props;
    const { classes } = this.props;
    return (
      <div>
        <Card className={classes.card}>

          {/* Different card content based on if order is finished */}
          {isOrderFinished ?
            // Layout for Summary pages
            <Fragment>
              <CardMedia
                className={classes.media}
                image={(ownShirtImage === "") ? choice.image : ownShirtImage}
                title={choice.text}
                onClick={() => launchGallery(choice.orderKey, choice.imageList)}
              />
              <CardContent>
                <Typography gutterBottom variant="headline" component="h2">
                  {choice.text}
                </Typography>
                <Typography gutterBottom variant="headline" component="h3">
                  Size: {sizeText}
                </Typography>
                <Typography gutterBottom variant="headline" component="h3" onClick={() => launchGallery(cut.orderKey, cut.imageList)}>
                  Cut: {cut.text}
                </Typography>
              </CardContent>
            </Fragment>
              :
            // Layout for Order page
            <Fragment>
              <CardMedia
                className={classes.media}
                image={choice.image}
                title={choice.text}
                onClick={() => launchGallery(choice.orderKey, choice.imageList)}
              />
              <CardContent>
                <Typography gutterBottom variant="headline" component="h2">
                  {choice.text}
                </Typography>
                <Typography component="p">
                  {choice.description}
                </Typography>
              </CardContent>
            </Fragment>
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
