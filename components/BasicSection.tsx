import NextImage from 'next/image';
import React, { PropsWithChildren } from 'react';
import styled from 'styled-components';
import { media } from 'utils/media';
import Container from './Container';
import OverTitle from './OverTitle';
import RichText from './RichText';

export interface BasicSectionProps {
  // id : string;
  imageUrl: string;
  title: string;
  reversed?: boolean;
}

export default function BasicSection({ imageUrl, title, reversed, children }: PropsWithChildren<BasicSectionProps>) {
  return (
    <BasicSectionWrapper reversed={reversed}>
      <ImageContainer>
        <NextImage src={imageUrl} alt={title} layout="fill" objectFit="cover" />
      </ImageContainer>
      <ContentContainer>
        <Title>{title}</Title>
        <RichText>{children}</RichText>
      </ContentContainer>
    </BasicSectionWrapper>
  );
}

const Title = styled.h1`
  font-size: 5.2rem;
  font-weight: bold;
  line-height: 1.1;
  margin-bottom: 2rem;
  letter-spacing: -0.03em;
  margin-top : 4rem;

  ${media('<=tablet')} {
    font-size: 4.6rem;
    margin-bottom: 2rem;
    height 
  }

`;

const CustomOverTitle = styled(OverTitle)`
  margin-bottom: 2rem;
`;

const ImageContainer = styled.div`
  flex: 1;

  position: relative;
  &:before {
    display: block;
    content: '';
    height : 100%
    width: 100%;
    padding-top: calc((9 / 16) * 100%);
  }

  & > div {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }

  ${media('<=desktop')} {
    width: 100%;
  }
`;

const ContentContainer = styled.div`
  flex: 1;
  color: white;
  background-color: white;
`;

type Props = Pick<BasicSectionProps, 'reversed'>;
const BasicSectionWrapper = styled(Container)`
  display: flex;
  align-items: center;
  flex-direction: ${(p: Props) => (p.reversed ? 'row-reverse' : 'row')};

  ${ImageContainer} {
    margin: ${(p: Props) => (p.reversed ? '0 0 0 5rem' : '0 5rem 0 0')};
  }

  ${media('<=desktop')} {
    flex-direction: column;

    ${ImageContainer} {
      margin: 0 0 2.5rem 0;
    }
  }
`;
