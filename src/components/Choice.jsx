import React,{Component} from 'react';
export default class Choice extends Component {

  render() {
    let {choice,index,updateOrder,isOrderFinished,launchGallery,launchWebcam} = this.props;

    return (
      <div>
        <article key={`article-${index}`} className="choice">
          <h2 key={`h2-${index}`}>{choice.text}</h2>
          <p key={`p-${index}`}>{choice.description}</p>
          <img key={`img-${index}`} src={choice.image} alt={choice.text} onClick={() => launchGallery(choice.orderKey, choice.imageList)}/>
          {!isOrderFinished &&
            <button key={`btn-${index}`} onClick={() => (choice.choiceKey === 'ownShirt') ? launchWebcam() : updateOrder(choice.orderKey, choice.choiceKey)}>Select</button>
          }
        </article>
      </div>
    )
  }
}
