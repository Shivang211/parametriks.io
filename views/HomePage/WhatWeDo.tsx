import React from 'react';
import styled, { keyframes } from 'styled-components';

export default function WhatWeDo() {
  return (
    <Container> <H1>What Parametriks does {"{"}and why it’s better{"}"}</H1>
      <Box>
        <BoxLeft><H3>Real-Time Data Flow <hr></hr></H3>
        <Para>The Parametriks solution begins with obtaining historical and real-time (IoT) data from insured parties. Using the data, <b>we build algorithms</b> that predict where and when issues in the asset might arise ahead of time, enabling pre-emptive action. A user-friendly dashboard is also built for each stakeholder.</Para>
        
        </BoxLeft>
        <BoxRight><img src = './laptop.png' width= {400} height = {300} style = {{marginTop : '30%', marginLeft: '80%'}}/></BoxRight>

      </Box>
      <Box>
        <BoxLeftTwo>
        <img src = './ai-artificial-intelligence-technology-robot-cartoon-001-vector.jpg' width= {480} height = {400} style = {{marginTop : '25%', }}/>
        </BoxLeftTwo>
        <BoxCenter><H4>Generative AI <hr></hr></H4>
        <ParaTwo>Generative AI provides a whole new way for users to interact with data. Our GenAI chatbot trains specifically on our <b>client data</b>, and our <b>LLM models enable it to respond to simple queries</b> regarding this data. Consider this as a ChatGPT but for your insurance data. It also increases the understandability and readability of this data.</ParaTwo></BoxCenter>

      </Box>
    </Container>
    
  );
}

const Box = styled.div`
width: 100%;
  display: flex;
`;

const BoxLeft = styled.div`
width: 55%;
  // display: flex;
`;
const BoxLeftTwo = styled.div`
width: 25%;
   display: flex;
`;

const BoxCenter = styled.div`
width: 75%;
  // display: flex;
`;

const BoxRight = styled.div`
width: 25%;
  display: flex;
`;

const Container = styled.div`
  position: relative;
  max-width: 130em;
  width: 100%;
  margin: 0 auto;
  padding: 0 2rem;
  color: black;
  height: 100vh;
  // background-color: black;
`;

const H1 = styled.div`
color: #DD3166;
font-family: tahoma;
font-size: 3rem;
font-weight: 100;
line-height: 1.5;
text-transform: uppercase;
white-space: nowrap;
overflow: hidden;
position: relative;
width: 100h;

text-align: center; /* Center the text horizontally */
`;

const Para = styled.div`
color: black;
// font-family: tahoma;
font-size: 2rem;
font-weight: 100;
line-height: 1.5;
// text-transform: uppercase;
// white-space: nowrap;
// overflow: hidden;
position: relative;
width: 100h;

// text-align: center; /* Center the text horizontally */
`;

const ParaTwo = styled.div`
color: black;
// font-family: tahoma;
font-size: 2rem;
font-weight: 100;
line-height: 1.5;
// text-transform: uppercase;
// white-space: nowrap;
// overflow: hidden;
position: relative;
width: 100h;
margin-left:22%;
text-align: right; /* Center the text horizontally */
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
color: black;
// margin-left: 10%;
margin-top: 20%;
font-size: 2.5rem;
font-weight: bold;
line-height: 1.5;
text-transform: uppercase;
white-space: nowrap;
//overflow: hidden;
position: relative;
width: 100h;
// margin-top: 5rem;
// text-align: center; /* Center the text horizontally */
`;

const H4 = styled.div`
color: black;
margin-left: 30%;
margin-top: 20%;
font-size: 2.5rem;
font-weight: bold;
line-height: 1.5;
text-transform: uppercase;
white-space: nowrap;
//overflow: hidden;
position: relative;
width: 100h;
// margin-top: 5rem;
text-align: right; /* Center the text horizontally */
`;

const TextBody = styled.div`
color: black;
font-family: tahoma;
font-size: 1.8rem;
font-weight: 100;
line-height: 1.5;
// white-space: nowrap;
// overflow: hidden;
position: relative;
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
position: relative;
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
position: relative;
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
  position: absolute;
  padding-left: 0.5rem;
  top: 0.2rem;
  left: 270px;
  animation: openclose 5s ease-in-out infinite;
`;