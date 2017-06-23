import React, { Component } from 'react';
import './App.css';
import { Helmet } from "react-helmet";

import Header from './Header';
import Footer from './Footer';
import Complexes from './Complexes/List/Index'
import Complex from './Complexes/Show/Index';


import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Helmet>
            <title>Сайт агентства недвижимости</title>
          </Helmet>
          <Header />
          <Route exact path="/" component={Complexes} />
          <Route path="/complex" component={Complex} />
          <Footer />
        </div>
      </Router>
    )
  };
};

export default App;
