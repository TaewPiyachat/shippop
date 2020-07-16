import React from 'react'
import styled from 'styled-components'

import { Button } from '../button'

const data = [
  {
    src: '//www.shippop.com/assets/images/frontpage/customer1.png?v=1496751996',
    name: 'Dote Clothing',
    position: 'ร้านขายเสื้อผ้า',
    feedback: `ผมพอใจในการให้บริการของ SHIPPOP ใช้งานง่าย "ปริ้น แปะ ส่ง" สะดวกมากๆ ทำให้ผมมีเวลาทำการตลาดมากขึ้น ตอบโจทย์ธุรกิจผมได้ดีทีเดียว`,
  },
  {
    src: '//www.shippop.com/assets/images/frontpage/customer2.png?v=1496751996',
    name: 'Korabag',
    position: 'ร้านขายกระเป๋าเครื่องสำอางค์',
    feedback: `ตลอดเวลาที่ใช้ SHIPPOP ผมได้รับการบริการที่ดี มีทีมงานที่ช่วยตอบข้อสงสัยและแก้ไขปัญหาให้ผมได้ตลอดเวลา`,
  },
  {
    src: '//www.shippop.com/assets/images/frontpage/customer5.jpg?v=1496751996',
    name: '55 INK',
    position: 'ร้านทำป้ายบ้านเลขที่',
    feedback: `SHIPPOP เข้ามาช่วยได้มากเลยครับ ทั้งเรื่องใบปะหน้าที่ไม่ต้องมานั่งเขียนเองแล้ว และพิมพ์ออกมาได้ทีละหลายๆ รายการ แก้ไขปัญหาเรื่องเข้าแถวส่งของ และการชำระเงินที่สะดวกยิ่งขึ้น`,
  },
  {
    src: '//www.shippop.com/assets/images/frontpage/customer4.png?v=1496751996',
    name: 'LSWGOLD',
    position: 'ห้างทองรูปพรรณออนไลน์',
    feedback: `ผมเชื่อมั่นในคุณภาพและมาตรฐานของ SHIPPOP ซึ่งช่วยให้ผมสามารถติดตามสถานะได้ง่าย สะดวก รวดเร็ว พร้อมตรวจสอบได้ตลอดเวลา และทีมงานที่ช่วยแก้ไขปัญหาต่างๆให้ผมได้ทันที`,
  },
]

export const Testimonial = () => {
  return (
    <Root>
      <Wrapper>
        <Headline2>เสียงตอบรับจากผู้ใช้งานจริง</Headline2>
        <Headline3>พิสูจน์จากเสียงตอบรับจากผู้ใช้จริงกว่า 2,000 รายในระบบ</Headline3>
        <CustomerGroup>
          {data.map(d => (
            <Customer>
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
`

const Headline3 = styled.h3`
    font-size: 1.8em;
    color: #58595b;
    margin-top: -5px;
    margin-bottom: 25px;
`

const CustomerGroup = styled.div`
    display: flex;
    justify-content: center;
    padding-top: 10px;
`

const Customer = styled.div`
    max-width: 240px;
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
