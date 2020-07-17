import React from 'react'
import styled from 'styled-components'

import { press } from '../data'

export const PressSection = () => {
  return (
    <Root>
      <Wrapper>
        <Headline2>คุณอาจเคยพบเรามาบ้าง</Headline2>
        <Headline3>ลูกค้าบางท่าน อาจจะเคยพบเจอเรามาก่อนจากแหล่งต่าง ๆ นี้</Headline3>
        <ImageWrapper>
          {press.map((d, key) => (
            <img key={ key } src={ d.src } alt={ d.name } />
          ))}
        </ImageWrapper>
      </Wrapper>
    </Root>
  )
}

const Root = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`

const Wrapper = styled.div`
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
  text-align: center;
`

const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`
