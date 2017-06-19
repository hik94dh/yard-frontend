import React from 'react';
import logo from './i/header-logo.svg';

export default () => {
  return (
      <header className="header">
        <div className="container">
          <div className="header-wrapper">
            <a href="">
              <img src={logo} className="App-logo" alt="logo" />
            </a>
            <nav className="header-menu">
              <a href="" className="header-menu_link">Buy</a>
              <a href="" className="header-menu_link">Rent</a>
              <a href="" className="header-menu_link">Our Agents</a>
            </nav>
          </div>
        </div>
      </header>
  );
};
