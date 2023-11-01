import React from 'react';
import styled, { keyframes } from 'styled-components';

export default function ContactUs() {
  return (
    <Container>
      <Box>
        <H1>
        Real-Time Data + GenAI = Better Insurance</H1>
</Box>
    </Container>
  );
}

const Box = styled.div`
width: 100%;
  // display: flex;
  bg-color: #320CFA;
  text-align: center;
`;

const BoxLeft = styled.div`
width: 25%;
  display: flex;
`;

const BoxCenter = styled.div`
width: 50%;
  display: flex;
`;

const BoxRight = styled.div`
width: 25%;
  display: flex;
`;

const Container = styled.div`
  position: relative;
  // max-width: 130em;
  // width: 100%;
  margin: 0 auto;
  padding: 0 2rem;
  color: black;
  height: 70vh;
  
`;

const H1 = styled.div`
color: #DD3166;
font-family: arial;
font-size: 6rem;
font-weight: bold;
line-height: 1.5;
text-transform: uppercase;
white-space: nowrap;
overflow: hidden;
position: relative;
width: 100h;

text-align: center; /* Center the text horizontally */
`;

const H2 = styled.div`
color: black;
// font-family: tahoma;
font-size: 2rem;
font-weight: 100;
line-height: 1.5;
text-transform: uppercase;
white-space: nowrap;
overflow: hidden;
position: relative;
width: 100h;
margin-top: 5rem;
text-align: center; /* Center the text horizontally */
`;
const H3 = styled.div`
color: #DD3166;
// font-family: tahoma;
font-size: 2rem;
font-weight: 100;
line-height: 1.5;
text-transform: uppercase;
white-space: nowrap;
overflow: hidden;
position: relative;
width: 100h;
// margin-top: 5rem;
text-align: center; /* Center the text horizontally */
font-weight: bold
`;

const Message = styled.div`
  background-color: yellow;
  color: #333;
  display: block;
  font-weight: 900;
  overflow: hidden;
  position: absolute;
  padding-left: 0.5rem;
  top: 0.2rem;
  left: 270px;
  animation: openclose 5s ease-in-out infinite;
`;
