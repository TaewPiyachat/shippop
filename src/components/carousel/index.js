import React from 'react'
import styled from 'styled-components'

import { Carousel as AntdCarousel } from 'antd'

import { TrackingBox } from './tracking-box'
import { carousel_images } from '../data'

import * as FONTS from '../../constant'

export const Carousel = () => {
  return (
    <Root>
      <DescriptionWrapper>
        <DescriptionBox>
          <Headline1>ส่งของ</Headline1>
          <Headline2>จองขนส่งออนไลน์</Headline2>
          <Span>
            เปรียบเทียบราคา ติดตามสถานะการจัดส่ง และ ชำระค่าขนส่งผ่านทางออนไลน์ได้ทันที
          </Span>
        </DescriptionBox>
        <TrackingBox />
      </DescriptionWrapper>
      <AntdCarousel>
        { carousel_images.map((i, key) => (
          <Background idx={ key } key={ key }>
            <Image url={ i } />
          </Background>
        )) }
      </AntdCarousel>
    </Root>
  )
}

const Root = styled.div`
  width: 100%;
  height: 450px;
  margin-top: 135px;
  position: relative;

  .ant-carousel .slick-dots li.slick-active {
    width: 16px;
  }

  .slick-dots li button:before {
    content: '';
  }

  .ant-carousel .slick-dots-bottom {
    max-width: 1000px;
    display: flex;
    justify-content: flex-end;
    margin: auto;
    position: relative;
    top: -135px;

    li {
      margin: 5px 0;
    }
    
    button {
      width: 8px;
      height: 8px;
      border-radius: 20px;
    }
  }

  @media (max-width: 768px) {
    margin-top: 50px;
    height: 400px;
  }

  @media (max-width: 480px) {
    height: 200px;

    .ant-carousel .slick-dots-bottom {
      top: -310px;
    }
  }
`

const Background = styled.div`
  height: 450px;
  ${p => {
    if (p.idx === 1) return `background: #f5f5f5`
    if (p.idx === 2) {
      return `
        background-image: url(https://www.shippop.com/assets/images/frontpage/slider/slide3bg.png?v=1497285980);
        background-position: center;
        background-size: contain;
      `
    } return `background: #fff`
  }};
`

const Image = styled.div`
  height: 450px;
  background-image: ${p => `url(${p.url})`};
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  @media (max-width: 768px) {
    height: 400px;
  }

  @media (max-width: 488px) {
    height: 200px;
  }
`

const DescriptionWrapper = styled.div`
  max-width: 1000px;
  height: 100%;
  margin-top: 135px;
  margin: 0 auto;
  position: absolute;
  left: 0;
  right: 0;
  z-index: 1;
`

const DescriptionBox = styled.div`
  width: 290px;
  height: 450px;
  position: absolute;
  top: 0;
  background-color: rgba(10,142,190,.85);
  color: #fff;
  padding: 0 20px;

  @media (max-width: 768px) {
    display: none;
  }
`

const Headline1 = styled.h1`
  font-family: ${FONTS.CLOUD_BOLD};
  font-size: 52px;
  color: #fff;
  margin: 48px 0 0 0;
`

const Headline2 = styled.h2`
  font-size: 28px;
  color: #fff;
`

const Span = styled.span`
  font-size: 20px;
`
