import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import './App.css';

// Global components
//import Header from './components/Header';
import Footer from './components/Footer';
import UtilityNav from './components/UtilityNav';
import MainNav from './components/MainNav';

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
        <MainNav />
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
