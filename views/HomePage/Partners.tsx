import NextImage from 'next/image';
import React from 'react';
import styled from 'styled-components';
import { Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import Container from 'components/Container';
import { media } from 'utils/media';

const PARTNER_LOGOS = [
  'university-of-california-berkeley-logo-vector.svg',
  'uc-davis-logo.png',
  'uc-merced-seeklogo.com.svg',
  'uc berkeley.png',
  'image2vector (1).svg',
  'UC Riverside Highlanders.svg',
  'UC Santa Cruz Banana Slug UCSC.svg',
  'HDI-Logo.svg_.png'
];

function isHDI(logo: string) {
  return logo == 'HDI-Logo.svg_.png';
}

function isNotHDI(logo: string) {
  return logo != 'HDI-Logo.svg_.png';
}

export default function Partners() {
  return (
    <PartnersWrapper>
      <Title>official partners with</Title>
      <Swiper
        modules={[Autoplay]}
        slidesPerView={6}
        spaceBetween={30}
        loop={true}
        autoplay={{ delay: 0, disableOnInteraction: false, pauseOnMouseEnter: false, waitForTransition: false, stopOnLastSlide: false }}
        speed={3000}
        breakpoints={{
          320: { slidesPerView: 2 },
          768: { slidesPerView: 4 },
          1025: { slidesPerView: 6 },
        }}
        className="swiper-wrapper"
      >
        {PARTNER_LOGOS.filter(isNotHDI).map((logo, index) => (
          <SwiperSlide key={logo}>
            <NextImage src={'/partners/' + logo} alt={normalizePartnerLogoName(logo)} width={128} height={128}/>
          </SwiperSlide>
        ))}
        {PARTNER_LOGOS.filter(isHDI).map((logo, index) => (
          <SwiperSlide key={logo} style={{paddingTop : 35}}>
            <NextImage src={'/partners/' + logo} alt={normalizePartnerLogoName(logo)} width={128} height={58} />
          </SwiperSlide>
        ))}
      </Swiper>
    </PartnersWrapper>
  );
}

function normalizePartnerLogoName(logo: string) {
  return logo.replace('.svg', '');
}

const Title = styled.h3`
  font-size: 1.3rem;
  letter-spacing: 0.02em;
  line-height: 0;
  text-transform: uppercase;
  
  margin-bottom: 5rem;
  text-align: center;
  opacity: 0.8;

  ${media('<=desktop')} {
    line-height: 1.5;
  }
`;

const PartnersWrapper = styled(Container)`
  .swiper-wrapper {
    will-change: transform;
    transition-timing-function: linear;
    user-select: none;
  }

  .swiper-slide {
    opacity: 1;
    transition: opacity 0.2s;

    &:hover {
      opacity: 1;
    }
  }
`;
