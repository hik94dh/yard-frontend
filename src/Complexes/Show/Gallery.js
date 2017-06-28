import React from "react";
import styled from "styled-components";
import { Grid } from "react-flexbox-grid";
import image1 from '../Show/i/gallery-1.png';
import image2 from '../Show/i/gallery-2.png';
import image3 from '../Show/i/gallery-3.png';
import image4 from '../Show/i/gallery-4.png';
import image5 from '../Show/i/gallery-5.png';

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
        <Image src={image1} alt="gallery" />
        <Image src={image2} alt="gallery" />
        <Image src={image3} alt="gallery" />
        <Image src={image4} alt="gallery" />
        <Image src={image5} alt="gallery" />
      </ImageWrap>
      <Grid>
        <ButtonWrap>
          <Button>41 фотография</Button>
        </ButtonWrap>
      </Grid>
    </Section>
  )
};