import React from 'react';
import styled, { keyframes } from 'styled-components';

export default function Problem() {
  return (
    <Container>
      <H1>
      The {"{"}Problematic{"}"} Status Quo
      </H1>
      <H2>Conventional insurance is driven only by historical claims data. This is problematic because…</H2>
      <Box>
      <BoxLeft>
        <Container>
      <img src ="./Stack of money and gold coins 3d cartoon style icon.jpg" width= {300} height = {180} style = {{marginTop : '7rem'}}/>
      <H3>Unnecessary costs</H3>
      <TextBodyLeft>Lots of claims are preventable with the data made available through sensors.
Most of this data is not being harnessed, leading to a missed opportunity to save on such damages,{"{"}and more importantly, to make people safer{"}"}.</TextBodyLeft>
      </Container>
      </BoxLeft>
      <BoxCenter>
      <Container><img src ="./5462318.jpg" width= {300} height = {180} style = {{marginTop : '7rem', marginLeft: '25%'}}/>
      <H3>Inefficient System</H3>
      <TextBody>Claims take forever to process, since none of the processes are automated, and all inspections
        etc are manual rather than data-driven</TextBody>
      </Container></BoxCenter>
<BoxRight><Container><img src = './45702.jpg' width= {300} height = {180} style = {{marginTop : '6rem', marginLeft: '10%'}}/>
<H3 style={{marginLeft: '7rem', marginTop: '1rem'}}>Low Navigability</H3>
<TextBodyRight>The complexities of insurance and facilities management make it difficult for all parties to navigate. </TextBodyRight>
</Container></BoxRight>
</Box>
    </Container>
  );
}

const Box = styled.div`
width: 100%;
  display: flex;
  // padding-bottom: 10%
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
  max-width: 130em;
  width: 100%;
  margin: 0 auto;
  padding: 0 2rem;
  color: black;
  // height: ;
  
`;

const H1 = styled.div`
color: #DD3166;
font-family: tahoma;
font-size: 3rem;
font-weight: 100;
line-height: 1.5;
text-transform: uppercase;
// white-space: nowrap;
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
// white-space: nowrap;
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
// white-space: nowrap;
width: 100h;
// margin-top: 5rem;
text-align: center; /* Center the text horizontally */
font-weight: bold;
// max-width:0%
`;

const TextBody = styled.div`
color: black;
font-family: tahoma;
font-size: 1.8rem;
font-weight: 100;
line-height: 1.5;
// white-space: nowrap;
// overflow: hidden;
width: 50%;
margin-top: 3rem;
text-align: center; /* Center the text horizontally */
// font-weight: bold
margin-left: 25%
`;

const TextBodyLeft = styled.div`
color: black;
font-family: tahoma;
font-size: 1.8rem;
font-weight: 100;
line-height: 1.5;
// white-space: nowrap;
// overflow: hidden;
width: 100%;
margin-top: 3rem;
text-align: center; /* Center the text horizontally */
// font-weight: bold
// margin-left: 25%
`;

const TextBodyRight = styled.div`
color: black;
font-family: tahoma;
font-size: 1.8rem;
font-weight: 100;
line-height: 1.5;
// white-space: nowrap;
// overflow: hidden;
width: 100%;
margin-top: 3rem;
text-align: center; /* Center the text horizontally */
// font-weight: bold
margin-left: 15%
`;

const Message = styled.div`
  background-color: yellow;
  color: #333;
  display: block;
  font-weight: 900;
  overflow: hidden;
  padding-left: 0.5rem;
  top: 0.2rem;
  left: 270px;
  animation: openclose 5s ease-in-out infinite;
`;
