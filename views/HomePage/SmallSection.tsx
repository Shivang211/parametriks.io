import React from 'react';
import styled, { keyframes } from 'styled-components';

export default function SmallSection() {
  return (
    <Container><H1> Parametriks is a team of {"{"}highly{"}"} qualified data scientists, software engineers and insurance experts who came together to solve this.
      </H1></Container>
  );
}

const Container = styled.div`
  position: relative;
  // max-width: 130em;
  width: 100%;
  // margin: 0 auto;
  // padding: 0 2rem;
  background-color: #DD3166;
  height: 10vh;
`;

const H1 = styled.div`
color: white;
font-family: tahoma;
font-size: 2.5rem;
font-weight: 100;
line-height: 10vh;
// text-transform: uppercase;
// white-space: nowrap;
// overflow: hidden;
position: relative;
width: 100h;
font-style: italic;

text-align: center; /* Center the text horizontally */
`;