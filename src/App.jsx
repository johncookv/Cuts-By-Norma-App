//Import Dependencies
import React, { Component } from 'react';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';

//Stylesheets
import './App.css';

//Import all global components here
import Header from './components/Header';

import Footer from './components/Footer';
import UtilityNav from './components/UtilityNav';
import MainNav from './components/MainNav';

//Import all your pages here for the Router to handle
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
