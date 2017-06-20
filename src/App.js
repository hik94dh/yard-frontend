import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';
import './App.css';
import Complexes from './Complexes/Complexes'

import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <Route exact path="/" component={Complexes} />
          <Footer />
        </div>
      </Router>
    )
  };
};

export default App;
