import React from 'react'
import styled from 'styled-components'

import { Button } from '../button'
import { testimonial } from '../data'

export const TestimonialSection = () => {
  return (
    <Root>
      <Wrapper>
        <Headline2>เสียงตอบรับจากผู้ใช้งานจริง</Headline2>
        <Headline3>พิสูจน์จากเสียงตอบรับจากผู้ใช้จริงกว่า 2,000 รายในระบบ</Headline3>
        <CustomerGroup>
          {testimonial.map((d, key) => (
            <Customer key={ key }>
              <Image src={ d.src } />
              <Name>{ d.name }</Name>
              <Position>{ d.position }</Position>
              <Feedback>{ d.feedback }</Feedback>
            </Customer>
          ))}
        </CustomerGroup>
        <Headline3>คุณอาจเป็นอีก 1 ในนั้น อย่าเชื่อจนกว่าจะได้ลองเอง</Headline3>
        <Button
          width='250px'
          height='64px'
          fontSize='1.5em'
          theme='primary_inverted'
        >
          ใช้บริการ SHIPPOP
        </Button>
      </Wrapper>
    </Root>
  )
}

const Root = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  background: #f8f8f8;
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
  text-align: center;
`

const Headline3 = styled.h3`
  font-size: 1.8em;
  color: #58595b;
  margin-top: -5px;
  margin-bottom: 25px;
  text-align: center;

`

const CustomerGroup = styled.div`
  display: grid;
  grid-template-columns: repeat(4, auto);
  padding-top: 10px;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`

const Customer = styled.div`
  width: 100%;
  padding: 0 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Image = styled.img`
  width: 131px;
  border-radius: 50%;
  padding: 10px 0;
`

const Name = styled.span`
  color: #0b9dd2;
  font-size: 1.5em;
`

const Position = styled.span`
  color: #959595;
  font-size: 1em;
`

const Feedback = styled.span`
  color: #555;
  font-size: 1em;
  margin-top: 18px;
  margin-bottom: 25px;
  text-align: center;
`
