import React,{Component} from 'react';
export default class Choice extends Component {

  render() {
    let {choice,index,updateOrder,isCustomerSelected,isOrderFinished,launchGallery,launchWebcam} = this.props;

    return (
      <div>
        <article key={`article-${index}`} className="choice">
          <h2 key={`h2-${index}`}>{choice.text}</h2>
          <p key={`p-${index}`}>{choice.description}</p>
          <img key={`img-${index}`} src={choice.image} alt={choice.text} onClick={() => launchGallery(choice.orderKey, choice.imageList)}/>
          {/* Button appears on Order page, but will not
            appear on Order Summary or Customer Orders pages  */}
          {!isOrderFinished && !isCustomerSelected &&
            <button key={`btn-${index}`} onClick={() => (choice.choiceKey === 'ownShirt') ? launchWebcam() : updateOrder(choice.orderKey, choice.choiceKey)}>Select</button>
          }
        </article>
      </div>
    )
  }
}
