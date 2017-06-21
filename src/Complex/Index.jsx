import React, { Component } from "react";
import './complex.css';

import Subheader from "./Subheader";
import Gallery from './Gallery';
import Summary from './Summary';

class Complex extends Component {
  render() {
    return (
      <div>
        <Subheader />
        <Gallery />
        <Summary />
      </div>
    )
  }
};

export default Complex;