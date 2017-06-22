import React from 'react';
import logo from './i/header-logo.svg';
import styled from "styled-components";
import { Grid } from "react-flexbox-grid";
import { Link } from 'react-router-dom'

const Header = styled.header`
  padding: 20px 0;
  background-color: #ffffff;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const NavLink = styled.a`
  text-align: left;
  margin-left: 2rem;
  color: var(--charcoal-grey);
  margin-left: 1.8rem;

  &:hover {
    opacity: 0.8;
  }
`;

const Logo = styled.img`
  width: 179.1px;
  height: 24px;
  object-fit: contain;
`;

export default () => {
  return (
    <Header>
      <Grid>
        <Wrapper>
          <Link to='/'>
            <Logo src={logo} className="App-logo" alt="logo" />
          </Link>
          <nav>
            <NavLink href="">Buy</NavLink>
            <NavLink href="">Rent</NavLink>
            <NavLink href="">Our Agents</NavLink>
          </nav>
        </Wrapper>
      </Grid>
    </Header>
  );
};
