import React, { Component } from "react";
import Cards from './Cards';
import HeroUnit from './HeroUnit';
import Promo from './Promo';

class Complexes extends Component {
  render() {
    return (
      <main>
        <Promo />
        <HeroUnit />
        <Cards />
      </main>
    )
  }
};

export default Complexes;