import React, {Component} from 'react';

export default class UtilityNav extends Component {
  render() {
    return (<nav className="navbar navbar-toggleable-md untility-nav">

      <div className="container">
        <div className="row">
          <div className="col">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <a className="nav-link" href="/">Patients and Caregivers
                  <span className="sr-only">(current)</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/hcp">Healthcare Professionals</a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="http://">Important Safety Information</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="http://">Full Prescribing Information & Patient Information
                </a>
              </li>
            </ul>
          </div>

        </div>
      </div>

    </nav>)
  }
}
