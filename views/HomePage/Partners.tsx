import NextImage from 'next/image';
import styled from 'styled-components';
import  SwiperCore, { Autoplay, Pagination } from 'swiper';
import { Swiper,SwiperSlide } from 'swiper/react';
import Container from 'components/Container';
import { media } from 'utils/media';
import React, { useEffect } from 'react';

SwiperCore.use([Pagination]);
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
const nonHDILogos = PARTNER_LOGOS.filter(logo => logo != 'HDI-Logo.svg_.png')
          .map((logo, index) => (
            <SwiperSlide key ={logo}>
              <img src={'/partners/' + logo} alt={logo.replace('.svg', '')} width={128} height={128} />
            </SwiperSlide>
          ))
const HDILogos = PARTNER_LOGOS.filter(logo => logo == 'HDI-Logo.svg_.png')
          .map((logo, index) => (
            <SwiperSlide key ={logo} style={{paddingTop : 35}}>
              <img src={'/partners/' + logo} alt={logo.replace('.svg', '')} width={128} height={58} />
            </SwiperSlide>
          ))

export default function Partners() {
  return (
    <PartnersWrapper>
      <Title>official partners with</Title>
      <Swiper
        modules={[Autoplay]}
        slidesPerView={8}
        pagination={ {clickable: true }}
        navigation={{ nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' }}
        spaceBetween={30}
        // loop= {true}
        // autoplay={{ delay: 0, disableOnInteraction: false, pauseOnMouseEnter: false, waitForTransition: false, stopOnLastSlide: false }}
        // speed={3000}
        breakpoints={{
          320: { slidesPerView: 2 },
          768: { slidesPerView: 4 },
          1025: { slidesPerView: 6 },
        }}
        className="swiper-wrapper"
      >
        {nonHDILogos}
        {HDILogos}
      </Swiper>
    </PartnersWrapper>
  );
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
    height: 170px;
  }

  .swiper-slide {
    opacity: 1;
    transition: opacity 0.2s;

    &:hover {
      opacity: 1;
    }
  }
  .swiper-pagination-bullet {
    /* Your styles here */
    background-color: white; 
  }
  .swiper-pagination-bullet-active {
    background-color: 520cfa; // Change to your desired color
  }
  .swiper-pagination {
    /* Your styles here */
    transform: translateY(10px); // Adjust the value as needed
  }
`;
