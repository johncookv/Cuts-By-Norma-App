import React, {Component} from 'react';

export default class Components extends Component {
  render() {
    return (<div className="container">
      <div className="row">
        <div className="col">
          <h1 className="display-4">Reuable Components</h1>

          <h2>Websites</h2>

          <ul>
            <li>ISI Trays</li>
            <li>Dynamic References</li>
            <li>Modals/Overlays</li>
          </ul>

          <h2>Convention Panels</h2>

          <h2>iOS Apps</h2>

          <h2>Banners</h2>

          <h2>Emails</h2>
          <hr />

            <ol>
              <li>Build the React Component  foundationality with it's own Git Repo and detailed README.md</li>
              <li>Get feedback from your teammates</li>
              <li>Add the component to this React Starter Kit</li>
              <li>Once we notice their is high usage or before turn into an npm package</li>
            </ol>

        </div>
      </div>
    </div>)
  }
}
