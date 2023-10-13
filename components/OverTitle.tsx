import styled from 'styled-components';
import { media } from 'utils/media';

const OverTitle = styled.span`
  display: block;
  &::before {
    position: relative;
    bottom: -0.1em;
    content: '';
    display: inline-block;
    width: 0.9em;
    height: 0.9em;
    background-color: #DD3166;
    line-height: 0;
    margin-right: 1em;
    font-color: black !important;
  }

  font-size: 1.3rem;
  letter-spacing: 0.02em;
  font-weight: bold;
  line-height: 0;
  text-transform: uppercase;
  font-color: black !important;

  ${media('<=desktop')} {
    line-height: 1.5;
  }
`;

export default OverTitle;
