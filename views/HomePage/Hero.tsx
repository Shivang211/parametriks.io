import NextLink from 'next/link';
import styled from 'styled-components';
import Button from 'components/Button';
import ButtonGroup from 'components/ButtonGroup';
import Container from 'components/Container';
import HeroIllustration from 'components/HeroIllustation';
import OverTitle from 'components/OverTitle';
import { useNewsletterModalContext } from 'contexts/newsletter-modal.context';
import { media } from 'utils/media';

export default function Hero() {
  const { setIsModalOpened } = useNewsletterModalContext();

  return (
    <HeroWrapper>
      <Contents>
        <CustomOverTitle id = "">changing the {"{"}insurance{"}"} world, the parametriks way</CustomOverTitle>
        <Heading>DISTRIBUTE INTELLIGENCE | GAIN CONTROL</Heading>
        <Description>
        Insurance is expensive, inefficient and hard to navigate. With today’s technology, we can do better. Parametriks is a team of highly qualified data scientists, software engineers and insurance experts who came together to solve this. By plugging Generative AI into IoT-generated dataflows, we optimise the insurance experience for all stakeholders.
        </Description>
        <CustomButtonGroup>
          <Button onClick={() => setIsModalOpened(true)}>
            Subscribe to the newsletter <span>&rarr;</span>
          </Button>
        </CustomButtonGroup>
        {/* <Quote>Insurance is the embodiment of preparedness, offering a safety net when situations takes an unexpected turn.
</Quote> */}
      </Contents>
      
      <ImageContainer>
        <HeroIllustration />
      </ImageContainer>
    </HeroWrapper>
    
  );
}



const HeroWrapper = styled(Container)`
  display: flex;
  padding-top: 7rem;
  padding-left : 3rem;

  ${media('<=desktop')} {
    padding-top: 10rem;
    flex-direction: column;
    align-items: center;
  }
`;

const Contents = styled.div`
  flex: 1;
  max-width: 60rem;

  ${media('<=desktop')} {
    max-width: 100%;
  }
`;

const CustomButtonGroup = styled(ButtonGroup)`
  margin-top: 5rem;margin-botton:100rem;
  
`;

const ImageContainer = styled.div`
display: flex;
flex: 1;
justify-content: flex-start; /* Change this to flex-start */
align-items: flex-start;
// margin-left: 15%;

svg {
  max-width: 100rem;
  margin-left: 15%;
  padding-top: 10rem;
}

${media('<=desktop')} {
  margin-top: 2rem;
  justify-content: center;
  svg {
    // max-width: 80%;
    margin-left: 15%;
  }
}
`;

const Description = styled.p`
  font-size: 1.8rem;
  opacity: 0.8;
  line-height: 1.6;
  color: black;
  margin-top: 20%
  font-family: tahoma;
  

  ${media('<=desktop')} {
    font-size: 1.5rem;
  }
`;

const CustomOverTitle = styled(OverTitle)`
  margin-bottom: 2rem;
  color : black !important;
  .waviy {
  position: relative;
}

.waviy {
  position: relative;
}
.waviy span {
  position: relative;
  display: inline-block;
  font-size: 40px;
  text-transform: uppercase;
  animation: flip 2s infinite;
  animation-delay: calc(.2s * var(--i))
}
@keyframes flip {
  0%,80% {
    transform: rotateY(360deg) 
  }
}

`;

const Heading = styled.h1`
  font-size: 7.2rem;
  font-weight: bold;
  line-height: 1.1;
  margin-bottom: 4rem;
  letter-spacing: -0.03em;
  margin-top: 5rem;
  background-image: url(https://media.giphy.com/media/3o752oeUYz6S2SHi5W/giphy.gif);
  background-size: cover;
  color: transparent;
  -moz-background-clip: text;
  -webkit-background-clip: text;
  // text-transform: uppercase;
  // font-size: 120px;
  // margin: 10px 0;


  ${media('<=tablet')} {
    font-size: 4.6rem;
    margin-bottom: 2rem;
  }
`;

const Quote = styled.div`
font-style: italic;
font-size: 25px
`;
