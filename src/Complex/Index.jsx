import React, { Component } from "react";

import Subheader from "./Subheader";
import Gallery from './Gallery';
import Summary from './Summary';
import Apartments from './Apartments';
import Guide from './Guide';
import Map from './Map';

class Complex extends Component {
  render() {
    return (
      <div>
        <Subheader />
        <Gallery />
        <Summary />
        <Apartments />
        <Guide />
        <Map />
      </div>
    )
  }
};

export default Complex;