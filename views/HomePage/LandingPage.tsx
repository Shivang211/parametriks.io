import React from 'react';
import styled, { keyframes } from 'styled-components';

export default function LandingPage() {
  return (
    <Container>
      <h1>
        <span>Real-Time Data + GenAI = </span>
        <div id="message">
          <div id="word1">close</div>
          <div id="word2">code</div>
          <div id="word3">creating</div>
        </div>
      </h1>
    </Container>
  );
}

const Container = styled.div`
  position: relative;
  max-width: 130em;
  width: 100%;
  margin: 0 auto;
  padding: 0 2rem;
  color: black;
  height: 100vh;
`;

const H1 = styled.div`
  color: #333;
  font-family: tahoma;
  font-size: 3rem;
  font-weight: 100;
  line-height: 1.5;
  text-transform: uppercase;
  white-space: nowrap;
  overflow: hidden;
  position: relative;
  width: 550px;
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

const Word1 = styled.div`
  font-family: tahoma;
`;

const Word2 = styled.div`
  font-family: tahoma;
`;

const Word3 = styled.div`
  font-family: tahoma;
`;

const openclose = keyframes`
  0% {
    top: 0.2rem;
    width: 0;
  }
  /* Rest of your keyframes rules */
`;

// Apply the styles to your components
const h1 = styled(H1)`
  font-size: 40px;
  margin-left: 40px;
`;

const message = styled(Message)`
  /* Styles for message component */
`;

const word1 = styled(Word1)`
  /* Styles for word1 component */
`;

const word2 = styled(Word2)`
  /* Styles for word2 component */
`;

const word3 = styled(Word3)`
  /* Styles for word3 component */
`;

export { h1, message, word1, word2, word3, openclose };
