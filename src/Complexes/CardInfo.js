import React from 'react';
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Card = styled(Link)`
  margin: 3rem auto;
  text-align: center;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  max-width: 1184px;

  &:hover {
    box-shadow: 0 0 20px rgba(0, 0, 0, .3);
    transition: .5s cubic-bezier(0, 1, 1, 1);
  }
`;

export default (props) => {
  return (
    <Card to={`/complex/${props.id}`}>
      <img src={process.env.PUBLIC_URL + '.i/build-' + props.id +'.jpg'} className="card-img"  alt="card" />
      <div className="card-info">
        <p className="card-info_place">{props.geo}</p>
        <h3 className="card-info_title">{props.title}</h3>
        <p className="card-info_text">{props.text}</p>
      </div>
    </Card>
  )
};