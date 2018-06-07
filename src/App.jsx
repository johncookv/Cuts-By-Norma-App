import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import PubSub from 'pubsub-js'
import PageChange from './components/PageChange'
import './App.css';

// Global components
import UtilityNav from './components/UtilityNav';
import Header from './components/Header';
import Footer from './components/Footer';

// Interior pages
import Homepage from './_templates/Homepage';
import StyleGuide from './_templates/StyleGuide';
import Components from './_templates/Components';
import Icons from './_templates/Icons';

class App extends Component {

  constructor(props){
    super(props)
    this.pageChangeToken = null
    this.pageChanged = this.pageChanged.bind(this)
  }

  componentDidMount(){
    this.pageChangeToken = PubSub.subscribe('PAGE_CHANGED', this.pageChanged)
  }

  componentWillUnmount() {
    PubSub.unsubscribe(this.pageChangeToken)
  }

  pageChanged(action, obj) {
    window.scrollTo(0,0);
  }

  render() {
    return (
      <BrowserRouter>
        <div>
          <UtilityNav />
          <Header />
          <Switch>
            <Route exact path="/" component={Homepage} />
            <Route path="/components" component={Components} />
            <Route path="/styleguide" component={StyleGuide} />
            <Route path="/icons" component={Icons} />
            {/*Need a 404 page? Make 404 component and assign here*/}
            {/*Default, sends non matching URLs to homepage*/}
            <Route component={Homepage} />
          </Switch>
          <Footer />

          {/* Handles resetting page to top on navigation (typical website behavior)*/}
          {/* Event "PAGE_CHANGED" can be subscribed to anywhere for other purposes (sends previous and current page strings)*/}
          <PageChange />

        </div>
      </BrowserRouter>
    );
  }
}

export default App;
