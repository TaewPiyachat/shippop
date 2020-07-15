import React from 'react'
import styled from 'styled-components'

import { Button } from '../button'

export const Tab = () => {
  return (
    <Root>
      <TabWrappr>
        <Group>
          <Image src="//www.shippop.com/assets/images/frontpage/service.png?v=1496788999" alt="ระบบ API สำหรับเชื่อมโยงร้านค้า" />
          <TextWrapper>
            <Title>ระบบ API สำหรับเชื่อมโยงร้านค้า</Title>
            <Caption>
              {`ไม่ว่าคุณจะพัฒนาร้านค้าด้วยภาษาไหนระบบอะไร 
            คุณก็สามารถเชื่อมต่อกับ SHIPPOP ผ่านทาง API ที่ทางเราจัดเตรียมไว้ให้ ได้เช่นกัน`}
            </Caption>
          </TextWrapper>
        </Group>
        <Button theme='white' width='180px'>เรียนรู้เพิ่มเติม</Button>
      </TabWrappr>
    </Root>
  )
}

const Root = styled.div`
    width: 100%;
    height: 140px;
    background-color: #0b9dd2;
    color: #fff;
`

const TabWrappr = styled.div`
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;
    padding: 10px 0;
    max-width: 840px;
`

const Group = styled.div`
    display: flex;
    align-items: center;
`

const Image = styled.img`
    max-width: 100%;
`

const TextWrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 20px;
`

const Title = styled.span`
    font-size: 1.5em;
`

const Caption = styled.span`
    color: rgba(255,255,255,.7);
    max-width: 450px;
`
