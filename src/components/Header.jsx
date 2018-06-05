import React, {Component} from 'react'
import { Link } from 'react-router-dom'

export default class Header extends Component {
  render() {
    return (
      <header>
        <div className="container">
          <div className="row py-4">

            <div className="col-3 header-left">
              <Link to={"/"}><img className="logo" src={require('../assets/img/header-logo.png')} alt="Giant Creative Strategy" /></Link>
            </div>

            <div className="col-2"></div>

            <div className="col-7 header-right">
              <div className="d-flex flex-row justify-content-end align-items-center page-btns-flex">
                <div className="pl-3"><Link to={"/components"}>Components</Link></div>
                <div className="pl-3"><Link to={"/styleguide"}><span className="no-wrap">Style Guide</span></Link></div>
                <div className="pl-3"><Link to={"/icons"}>Icons</Link></div>
              </div>
            </div>
          </div>
        </div>
      </header>
    )
  }
}