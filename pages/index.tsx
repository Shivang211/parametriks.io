import { InferGetStaticPropsType } from 'next';
import Head from 'next/head';
import styled from 'styled-components';
import BasicSection from 'components/BasicSection';
import Link from 'components/Link';
import { EnvVars } from 'env';
import { getAllPosts } from 'utils/postsFetcher';
import Cta from 'views/HomePage/Cta';
import Features from 'views/HomePage/Features';
import FeaturesGallery from 'views/HomePage/FeaturesGallery';
import Hero from 'views/HomePage/Hero';
import Partners from 'views/HomePage/Partners';
import ScrollableBlogPosts from 'views/HomePage/ScrollableBlogPosts';
import Testimonials from 'views/HomePage/Testimonials';

export default function Homepage({ posts }: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <Head>
        <title>{EnvVars.SITE_NAME}</title>
        <meta
          name="description"
          content="Parametriks"
        />
      </Head>
      <HomepageWrapper>
        <WhiteBackgroundContainer>
          <Hero />
          <Partners />
          <br id = 'what-we-do'></br>
          <BasicSection  imageUrl="/7sYl.gif" title="What We Do">
            <p>
            We aim at revolutionizing the integration of unparalleled and unique risk assessment data points in the way insurance services are designed.
            </p>
            <br></br>
            <p>
Composed of {"{"}very{"}"} qualified data scientist and software engineers, our team Thinks, reThinks, Tests, Modifies, reTests, Implements and Erases any frontier that would curb the road for insurance companies and brokers to deliver parametric insurance X.0 (establishing new “standards”).

            </p>
          </BasicSection>
          <br id = 'application-spectrum'></br>
          <BasicSection  imageUrl="/giphy.gif" title="Application Spectrum" reversed>
            <p>
            We {"{"}widely{"}"} broaden parametric insurance’s scope.<br></br>
Mainly focused on technologies that can be embedded in insurance products, our work reimagines the way brokers and big insurance companies generate, receive and then analyze data to optimize policies and make their clients at the center of everything.
            </p>
          </BasicSection>
      
        </WhiteBackgroundContainer>
        
      </HomepageWrapper>
    </>
  );
}


const HomepageWrapper = styled.div`
  & > :last-child {
    margin-bottom: 15rem;
    background: black;
  }
`;

const DarkerBackgroundContainer = styled.div`
  background: black;

  & > *:not(:first-child) {
    margin-top: 10rem;
  }
`;

const WhiteBackgroundContainer = styled.div`
  background: black;

  & > :last-child {
    // padding-bottom: 5rem;
    background: black;
  }

  & > *:not(:first-child) {
    margin-top: 10rem;
  }
`;

export async function getStaticProps() {
  return {
    props: {
      posts: await getAllPosts(),
    },
  };
}
