import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';
import Main from './Main';
import PromoLogo from './i/promo-logo.svg';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <section className="promo">
          <div className="container">
            <img src={PromoLogo} className="promo-logo" />
          </div>
        </section>
        <Main />
        <Footer />
      </div>
    );
  }
}

export default App;
