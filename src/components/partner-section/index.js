import React, { useState } from 'react'
import styled from 'styled-components'
import Slider from "react-slick"

import { partner_images } from '../data'

const settings = {
  centerMode: true,
  infinite: true,
  slidesToShow: 5,
  swipeToSlide: true,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 3,
      }
    },
  ]
}

export const PartnerSection = () => {
  const [activePartner, setPartner] = useState(1)

  return (
    <Root>
      <SliderWrapper>
        <Slider { ...settings }>
          {partner_images.map((image, key) => (
            <Image
              key={ key }
              src={ image.url }
              alt={ image.name }
              active={ key === activePartner }
              onClick={ () => setPartner(key) }
            />
          ))}
        </Slider>
      </SliderWrapper>
      <Text>[ กดที่โลโก้เพื่อดูคำอธิบาย ]</Text>
      <Description>{ partner_images[activePartner].desc }</Description>
    </Root>
  )
}

const Root = styled.div`
  width: 100%;
  height: 110px;
  background: #f8f8f8;
  display: flex;
  flex-direction: column;
  align-items: center;

  .slick-slider {
    width: 100%;
  }
`

const SliderWrapper = styled.div`
  max-width: 1000px;
  width: 100%;
  display: flex;
  align-items: center;
  padding-top: 12px;
`

const Image = styled.img`
  max-height: 40px;
  width: auto;
  object-fit: contain;
  cursor: pointer;
  filter: ${p => (p.active ? 'grayscale(0)' : 'grayscale(100%)')};
  opacity: ${p => (p.active ? 1 : 0.5)};
`

const Text = styled.span`
  color: #ccc;
  font-size: 0.8em;
  margin-top: 5px;
`

const Description = styled.span`
  margin-top: 5px;
  font-size: 1.1em;
  color: #636363;
`
