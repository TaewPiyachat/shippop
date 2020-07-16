import React from 'react'
import styled from 'styled-components'

import { InputWithButton } from '../input'
import { Button } from '../button'
import * as FONTS from '../../constant'

export const Footer = () => {
  return (
    <Root>
      <Wrapper>
        <EmailSection>
          <img src='https://www.shippop.com/assets/images/logo-white.png?v=1497926693' alt='SHIPPOP' />
          <EmailText>
            เราคือพันธมิตรที่รวบรวมบริษัทขนส่ง
            <br />
            มาไว้ในระบบเดียว ง่ายต่อการเชื่อมต่อ
            <br />
            และเลือกใช้บริการ
          </EmailText>
          <Input
            placeholder='กรอกอีเมล์เพื่อรับข่าวสาร'
          />
        </EmailSection>
        <Column>
          <Title>Sitemap</Title>
          <Link href='https://www.shippop.com/'>หน้าแรก</Link>
          <Link href='https://www.shippop.com/service/'>บริการของเรา</Link>
          <Link href='https://www.shippop.com/trLinkcking/'>ติดตามพัสดุ</Link>
          <Link href='https://www.shippop.com/terms/'>เงื่อนไขการให้บริการ</Link>
          <Link href='https://www.shippop.com/privLinkcy/'>ความเป็นส่วนตัว</Link>
          <Link href='https://www.shippop.com/Linkbout/'>เกี่ยวกับเรา</Link>
          <Link href='https://www.shippop.com/fLinkq/'>คำถามที่พบบ่อย</Link>
          <Link href='https://www.fLinkcebook.com/shippop'>โปรโมชั่น</Link>
          <Link href='https://www.shippop.com/jobs/'>สมัครงาน</Link>
        </Column>
        <Column>
          <Column>
            <Title>กลุ่มลูกค้า</Title>
            <Link href='https://www.shippop.com/'>ลูกค้าทั่วไป</Link>
            <Link href='https://www.shippop.com/service/'>ลูกค้าธุรกิจ</Link>
            <Link href='https://www.shippop.com/contact/'>ขนส่ง (ติดต่อ)</Link>
          </Column>
          <br />
          <Column>
            <Title>ประชาสัมพันธ์</Title>
            <Link href='//blog.shippop.com'>ข่าวสาร</Link>
            <Link href='//blog.shippop.com/category/%E0%B8%9B%E0%B8%A3%E0%B8%B0%E0%B8%81%E0%B8%B2%E0%B8%A8/'>ประกาศ</Link>
          </Column>
        </Column>
        <Column>
          <Title>ติดต่อเรา</Title>
          <Text>
            {`เลขที่ 128/239-240 ชั้น 22 อาคารพญาไทพลาซ่า ถนนพญาไท 
            แขวงทุ่งพญาไท เขตราชเทวี กรุงเทพมหานคร 10400`}
          </Text>
          <br />
          <Title>
            อีเมล์.
            <Link href='mailto:contact@shippop.com'>contact@shippop.com</Link>
          </Title>
          <Title>ฝ่ายบริการลูกค้า (+66) 92-905-3355</Title>
          <br />
          <Button height='43px' theme='footer'>ดูข้อมูลเพิ่มเติม</Button>
        </Column>
      </Wrapper>
      <Copyright>
        <Text>© Copyright 2015 - 2018 All Rights Reserved by SHIPPOP</Text>
      </Copyright>
    </Root>
  )
}

const Root = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: rgb(255, 255, 255);
    min-height: 150px;
    background: linear-gradient(rgb(11, 157, 210) 0%, rgb(11, 157, 210) 27%, rgb(11, 156, 209) 30%, rgb(4, 130, 176) 100%);
`

const Wrapper = styled.div`
    width: 100%;
    max-width: 1000px;
    display: flex;
    justify-content: space-between;
    padding: 40px 0;
`

const EmailSection = styled.div`
    display: flex;
    flex-direction: column;

    img {
        width: 160px;
    }
`

const EmailText = styled.span`
    color: rgba(255, 255, 255, 0.7);
    margin-top: 10px;
    font-size: 1.1em;
`

const Input = styled(InputWithButton)`
    border-radius: 0 5px 5px 0;
    [type="button"] {
        height: 40px;
        background: rgb(2, 118, 160) !important;
        border: none;
        border-left: 1px solid #ccc;
        border-radius: 0 5px 5px 0;
        box-shadow: none;
    }
    .ant-input-group-addon {
        border-radius: 0 5px 5px 0;
    }
`

const Column = styled.div`
    max-width: 250px;
    display: flex;
    flex-direction: column;
`

const Title = styled.span`
    font-family: ${FONTS.CLOUD_BOLD};
`

const Text = styled.span`
    color: rgba(255, 255, 255, 0.7);
`

const Link = styled.a`
    color: #fff;
`

const Copyright = styled.div`
    padding: 20px;
`
