import React, { useState } from 'react'
import styled from 'styled-components'

const services = [
  {
    src: '//www.shippop.com/assets/images/frontpage/icon_service_01.png?v=1496789498',
    title: 'เปรียบเทียบราคา',
    caption: 'สามารถเช็คได้ทันที ขนส่งไหนถูกสุด ขนส่งไหนส่งไวสุด หรือมีส่วนลดพิเศษ',
  },
  {
    src: '//www.shippop.com/assets/images/frontpage/icon_service_02.png?v=1496789498',
    title: 'ขนส่งที่เหมาะ',
    caption: 'ไม่ต้องเสียเวลาอีกต่อไป ระบบแนะนำขนส่งที่เหมาะสมกับผู้ใช้',
  },
  {
    src: '//www.shippop.com/assets/images/frontpage/icon_service_03.png?v=1496789498',
    title: 'ชำระค่าขนส่ง',
    caption: 'ชำระค่าขนส่งผ่านออนไลน์ ด้วยบัตรเครดิตหรือบัตรเดบิต',
  },
  {
    src: '//www.shippop.com/assets/images/frontpage/icon_service_04.png?v=1496789498',
    title: 'ใบปะหน้า',
    caption: 'หมดปัญหาอ่านไม่ออก พิมพ์ใบปะหน้าจากระบบได้ทันที',
  },
  {
    src: '//www.shippop.com/assets/images/frontpage/icon_service_05.png?v=1496789498',
    title: 'ติดตามพัสดุ',
    caption: 'สามารถทราบหมายเลขติดตามพัสดุได้ล่วงหน้าจากระบบ',
  },
  {
    src: '//www.shippop.com/assets/images/frontpage/icon_service_06.png?v=1496789498',
    title: 'คุมรายจ่ายง่ายขึ้น',
    caption: 'ทราบราคาขนส่งล่วงหน้า วางแผนการเลือกใช้งานได้ทันที',
  },
  {
    src: '//www.shippop.com/assets/images/frontpage/icon_service_07.png?v=1496789498',
    title: 'จัดส่งง่ายขึ้น',
    caption: 'รับของถึงบ้าน หรือ ไม่ต้องรับคิวเข้าแถว',
  },
  {
    src: '//www.shippop.com/assets/images/frontpage/icon_service_08.png?v=1496789498',
    title: 'เชื่อมต่อง่าย',
    caption: 'รองรับทุกการเชื่อมต่อ ภายใต้ระบบเดียว',
  },
]

export const Service = () => {
  return (
    <Root>
      <Headline2>บริการของเรา</Headline2>
      <Headline3>ทำให้การส่งสินค้า สะดวกและง่ายมากขึ้น</Headline3>
      <ServiceGroup>
        {services.map(service => (
          <ServiceBox>
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
