import React from 'react'
import styled from 'styled-components'

import { Button } from '../button'

const data = [
  {
    src: 'https://blog.shippop.com/wp-content/uploads/2020/04/S__21676066-300x188.jpg',
    title: 'SCG EXPRESS : Cool TA-Q-BIN ขยายพื้นที่บริการ เพิ่มขนาดใหม่ส่งได้ใหญ่ขึ้น',
    desc: `SCG EXPRESS บริการขนส่งพัสดุแบบเร่งด่วน ได้ขยายพื้นที่ให้บริการจัดส่งพัสดุได้ครอบคลุมยิ่งขึ้น 
        ซึ่งสามารถจัดส่งของได้ทุกพื้นที่ทั่วประเทศไทยแล้ว โดยลูกค้าสามารถส่งพัสดุกับ SCG EXPRESS ผ่าน SHIPPOP ได้แล้ว`,
  },
  {
    src: 'https://blog.shippop.com/wp-content/uploads/2020/04/TrueLogistic_1080x675-300x188.jpg',
    title: 'SHIPPOP เปิดตัว true e-Logistics จัดส่งพัสดุด่วนส่งไว พร้อมบริการเข้ารับถึงบ้าน เริ่มต้น 25 บาท',
    desc: `True e-Logistics บริษัทขนส่งที่มีศักยภาพในการส่งสินค้าถึงมือผู้รับอย่างมีประสิทธิภาพ ภายใต้บริษัทยักษ์ใหญ่อย่าง True ให้บริการขนส่งพัสดุภายในประเทศ`,
  },
  {
    src: 'https://blog.shippop.com/wp-content/uploads/2020/04/DSC2018-300x152.jpg',
    title: 'SHIPPOP จับมือ ninja van ร่วมกับมูลนิธิโรงเรียนแห่งชีวิต ส่งกล่องยังชีพให้กับผู้ตกทุกข์ได้ยากจากวิกฤตโรค Covid-19 ทั่วประเทศ',
    desc: `บริษัท ชิปป๊อป จำกัด จับมือกับ  บริษัท นินจา โลจิสติกส์ (ประเทศไทย) จำกัด ร่วมสนับสนุน “กองทุนประทังชีพเพื่อเพื่อนร่วมแผ่นดิน”`,
  },
  {
    src: 'https://blog.shippop.com/wp-content/uploads/2020/04/NinjaVan_1080x6751-300x188.jpg',
    title: 'ส่งเจลแอลกอฮอล์ หน้ากากอนามัยและอุปกรณ์การแพทย์กับ ninja van ผ่าน SHIPPOP ถึงรพ.ทั่วกรุงเทพ-ปริมณฑล ฟรี!!',
    desc: `ninja van ผู้ให้บริการธุรกิจโลจิสติกส์ ด้วยเทคโนโลยีที่ทันสมัย จัดเคมเปญให้บริการส่งเจลแอลกอฮอล์ หน้ากากอนามัยและอุปกรณ์การแพทย์”`,
  },
]

export const Article = () => {
  return (
    <Root>
      <Headline2>บทความและโปรโมชั่น</Headline2>
      <Headline3>บทความข่าวสารและโปรโมชั่นที่เราเสิร์ฟให้</Headline3>
      <ItemGroup>
        {data.map(d => (
          <Item>
            <Image src={ d.src } />
            <ItemHeadline2>
              { d.title }
            </ItemHeadline2>
            <ItemText>{ d.desc }</ItemText>
          </Item>
        ))}
      </ItemGroup>
      <Button
        width='250px'
        height='64px'
        fontSize='1.5em'
        theme='primary_inverted'
      >
        อ่านต่อทั้งหมด
      </Button>
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

const ItemGroup = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 20px;
`

const Item = styled.div`
    width: 245px;
    height: 100%;
    border-radius: 5px;
    background: #f8f8f8;
    margin: 5px;
    padding: 5px;
    cursor: pointer;

    :hover {
        box-shadow: 10px 10px 34px -20px rgba(0,0,0,.75);
    }
`

const Image = styled.div`
    height: 125px;
    background-image: ${p => `url(${p.src})`};
    background-size: cover;
`

const ItemHeadline2 = styled.h2`
    font-size: 1.12em;
    color: #28a8d7;
    height: 48px;
    padding: 10px 10px 0;
    margin: 0;
    line-height: 1.3em;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
`

const ItemText = styled.p`
    margin-top: 5px;
    font-size: 1em;
    color: #555;
    padding: 0 10px 10px;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
`
