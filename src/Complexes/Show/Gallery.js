import React from "react";
import styled from "styled-components";
import { Grid } from "react-flexbox-grid";


const Section = styled.section`
  background-color: #fff;
`;

const Image = styled.img`
  height: 400px;
`;

const ImageWrap = styled.div`
  display: flex;
  overflow-x: auto;
`;

const ButtonWrap = styled.div`
  position: relative;
  top: -2.5rem;
`;

const Button = styled.button`
  border: none;
  border-radius: 2px;
  background-color: #00779a;
  color: #fff;
  line-height: 1;
  font-size: 10px;
  font-weight: 300;
  padding: 7px 15px;
  opacity: 0.8;
  font-family: 'Fira Sans', sans-serif;
  &:hover {
    opacity: 1;
  }
`;

export default () => {
  return (
    <Section>
      <ImageWrap>
        <Image src={process.env.PUBLIC_URL + 'i/gallery-1' + '.png'} alt="gallery" />
        <Image src={process.env.PUBLIC_URL + 'i/gallery-2' + '.png'} alt="gallery" />
        <Image src={process.env.PUBLIC_URL + 'i/gallery-3' + '.png'} alt="gallery" />
        <Image src={process.env.PUBLIC_URL + 'i/gallery-4' + '.png'} alt="gallery" />
        <Image src={process.env.PUBLIC_URL + 'i/gallery-5' + '.png'} alt="gallery" />
      </ImageWrap>
      <Grid>
        <ButtonWrap>
          <Button>41 фотография</Button>
        </ButtonWrap>
      </Grid>
    </Section>
  )
};