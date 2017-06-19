import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'
import styled from 'styled-components';

import Header from './Header';
import Promo from './Promo';
import Main from './Main';
import Footer from './Footer';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Promo />
        <Main />
        <Footer />
      </div>
    );
  }
};

export default App;
