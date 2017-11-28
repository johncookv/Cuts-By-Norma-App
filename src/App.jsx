//Import Dependencies
import React, { Component } from 'react';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';

//Stylesheets
import './App.css';

//Import all global components here
import Header from './components/header';
import Footer from './components/footer';

//Import all your pages here for the Router to handle
import Homepage from './_templates/Homepage';


class App extends Component {
  render() {
    return (
      <div>
        <div>
          <Header />
        </div>

        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Homepage} />
            {/* <Route path="/about" component={About} /> */}
          </Switch>
        </BrowserRouter>

        <div>
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;
