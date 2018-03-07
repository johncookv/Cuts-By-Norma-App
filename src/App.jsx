//Import Dependencies
import React, { Component } from 'react';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';

//Stylesheets
import './App.css';

//Import all global components here
import Header from './components/header';
import Hero from './components/hero';
import Footer from './components/footer';
import UtilityNav from './components/utility_nav';
import MainNav from './components/main_nav';

//Import all your pages here for the Router to handle
import Homepage from './_templates/Homepage';


class App extends Component {
  render() {
    return (
    <div>
      <UtilityNav />
      <div className="container">
        <div className="row">
          <MainNav />
          <Hero />
        </div>
      </div>
      <div className="container">
         <div className="row">
             <BrowserRouter>
               <Switch>
                 <Route exact path="/" component={Homepage} />
                 {/* <Route path="/about" component={About} /> */}
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
