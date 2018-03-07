//Import Dependencies
import React, { Component } from 'react';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';

//Stylesheets
import './App.css';

//Import all global components here
import Header from './components/header';

import Footer from './components/footer';
import UtilityNav from './components/utility_nav';
import MainNav from './components/main_nav';

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

      <div className="container">
         <div className="row">
             <BrowserRouter>
               <Switch>
                 <Route exact path="/" component={Homepage} />
                 <Route path="/components" component={Components} />
                 <Route path="/styleguide" component={StyleGuide} />
                 <Route path="/icons" component={Icons} />
               </Switch>
             </BrowserRouter>
          </div>
       </div>


       <Footer />
      </div>
    );
  }
}

export default App;
