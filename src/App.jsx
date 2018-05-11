import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import './App.css';

// Global components
import UtilityNav from './components/UtilityNav';
import Header from './components/Header';
import Footer from './components/Footer';

// Interior pages (router nested)
import Homepage from './_templates/Homepage';
import StyleGuide from './_templates/StyleGuide';
import Components from './_templates/Components';
import Icons from './_templates/Icons';


class App extends Component {
  render() {
    return (
      <div>
        <UtilityNav />
        <Header />
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Homepage} />
            <Route path="/components" component={Components} />
            <Route path="/styleguide" component={StyleGuide} />
            <Route path="/icons" component={Icons} />
          </Switch>
        </BrowserRouter>
        <Footer />
      </div>
    );
  }
}

export default App;
