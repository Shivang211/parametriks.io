import NextLink from 'next/link';
import React from 'react';
import styled from 'styled-components';
import Button from 'components/Button';
import ButtonGroup from 'components/ButtonGroup';
import Container from 'components/Container';
import OverTitle from 'components/OverTitle';
import SectionTitle from 'components/SectionTitle';
import { media } from 'utils/media';

export default function Cta() {
  return (
    <CtaWrapper id = 'our-awesome-team'>
      <Container>
        <Stack>
          {/* <OverTitle>Lorem ipsum dolor sit amet</OverTitle> */}
          <SectionTitle >Our {"{"}Awesome{"}"} Team</SectionTitle>
          <img src = "Screenshot 2023-04-20 at 11.15.30 AM.png" style = {{marginLeft : '0rem'}}/>
          {/* <ButtonGroup>
            <NextLink href="#nothing" passHref>
              <Button>
                Contact Us <span>&rarr;</span>
              </Button>
            </NextLink>
            
          </ButtonGroup> */}
        </Stack>
      </Container>
    </CtaWrapper>
  );
}

const Description = styled.div`
  font-size: 1.8rem;
  color: black, 0.8);
`;

const Stack = styled.div`
  display: flex;
  flex-direction: column;
  padding: 12.5rem 0;
  color: black;
  text-align: center;
  align-items: center;
  justify-content: center;

  & > *:not(:first-child) {
    max-width: 80%;
    margin-top: 4rem;
  }

  ${media('<=tablet')} {
    text-align: center;

    & > *:not(:first-child) {
      max-width: 100%;
      margin-top: 2rem;
    }
  }
`;

const OutlinedButton = styled(Button)`
  border: 1px solid rgb(var(--textSecondary));
  color: rgb(var(--textSecondary));
`;

const CtaWrapper = styled.div`
  background: white;
  padding-top : 3rem;
`;
