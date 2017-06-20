import React, { Component } from "react";
import Card from './Card';
import HeroUnit from './HeroUnit';
import Promo from './Promo';

class Complexes extends Component {
  render() {
    return (
      <main>
        <Promo />
        <HeroUnit />
        <Card />
      </main>
    )
  }
};

export default Complexes;