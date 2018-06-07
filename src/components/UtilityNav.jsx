import React, {Component} from 'react'
import { withRouter } from 'react-router-dom'

class UtilityNav extends Component {
  render() {
    return (
      <div className="utility-nav">
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="py-3">
                UtilityNav
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default withRouter(UtilityNav)