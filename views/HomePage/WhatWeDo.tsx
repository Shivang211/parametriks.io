import React from 'react';
import styled, { keyframes } from 'styled-components';

export default function WhatWeDo() {
  return (
    <Container> <H1>What Parametriks does {"{"}and why it’s better{"}"}</H1>
    <Box>
<BoxLeft></BoxLeft>
<BoxRight><img src ="./laptop.png" width= {350} height = {300} style = {{marginTop : '11rem', marginLeft: '40%'}}/></BoxRight>
</Box>
      </Container>
  );
}

const Container = styled.div`
  position: relative;
  // max-width: 130em;
  width: 100%;
  // margin: 0 auto;
  // padding: 0 2rem;
  background-color: white;
  height: 80vh;
`;

const H1 = styled.div`
color: black;
font-family: Arial;
font-size: 3rem;
font-weight: 500;
line-height: 1.5;
text-transform: uppercase;
white-space: nowrap;
overflow: hidden;
position: relative;
width: 100h;
// height: 10h

text-align: center; /* Center the text horizontally */
`;

const Box = styled.div`
width: 100%;
  display: flex;
`;

const BoxLeft = styled.div`
width: 50%;
  display: flex;
`;

const BoxRight = styled.div`
width: 50%;
  display: flex;
`;