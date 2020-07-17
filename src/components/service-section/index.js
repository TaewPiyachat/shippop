import React from 'react'
import styled from 'styled-components'

import { services } from '../data'

export const ServiceSection = () => {
  return (
    <Root>
      <Headline2>บริการของเรา</Headline2>
      <Headline3>ทำให้การส่งสินค้า สะดวกและง่ายมากขึ้น</Headline3>
      <ServiceGroup>
        {services.map((service, key) => (
          <ServiceBox key={ key }>
            <Image src={ service.src } alt={ service.title } />
            <Title>{ service.title }</Title>
            <Caption>{ service.caption }</Caption>
          </ServiceBox>
        ))}
      </ServiceGroup>
    </Root>
  )
}

const Root = styled.div`
  width: 100%;
  max-width: 1000px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px 0;
`

const Headline2 = styled.h2`
  font-size: 2.8em;
  color: #0b9dd2;
  margin: 5px 0;
  padding-bottom: 5px;
`

const Headline3 = styled.h3`
  font-size: 1.8em;
  color: #58595b;
  margin-top: -5px;
  margin-bottom: 25px;
`

const ServiceGroup = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 10px;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
}
`

const ServiceBox = styled.div`
  height: 210px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 8px;
  background: #f8f8f8;
  cursor: pointer;

  :hover {
      box-shadow: 0 0 59px -9px rgba(0,0,0,.25);
  }
`

const Image = styled.img`
  max-width: 100%;
  margin: 10px;
  object-fit: contain;
`

const Title = styled.span`
  margin-bottom: 5px;
  font-size: 1.8em;
  color: #0b9dd2;
`

const Caption = styled.span`
  color: #555;
  text-align: center;
`
