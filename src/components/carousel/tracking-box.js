import React, { useState } from 'react'
import styled from 'styled-components'

import { Input, InputWithButton } from '../input'
import { Button } from '../button'

export const TrackingBox = () => {
  const [tab, setTab] = useState(0)

  return (
    <Root>
      <Tabs>
        <Tab active={ tab === 0 } onClick={ () => setTab(0) }>เช็คค่าขนส่ง</Tab>
        <Tab active={ tab === 1 } onClick={ () => setTab(1) }>สำหรับลูกค้า Business</Tab>
      </Tabs>
      <Wrapper>
        <Text>
          กรอกรหัสไปรษณีย์
          <br />
          สำหรับเทียบราคาขนส่ง
        </Text>
        <Input placeholder='รหัสปณ. ต้นทาง' />
        <Input placeholder='รหัสปณ. ปลายทาง' />
        <InputWithButton placeholder='รหัสปณ. ปลายทาง' enterButton />
        <Button>ตรวจเช็คราคา</Button>
      </Wrapper>
    </Root>
  )
}

const Root = styled.div`
  height: 94px;
  width: 910px;
  position: absolute;
  top: 340px;
  margin-left: 20px;
  padding: 20px;
  border-radius: 0 5px 5px 5px;
  background-color: #fff;
  box-shadow: 10px 10px 33px -12px rgba(0,0,0,.47);
`

const Tabs = styled.div`
  height: 32px;
  position: absolute;
  top: -32px;
  left: 0;
  display: flex;
`

const Tab = styled.div`
  height: 100%;
  font-size: 1.1em;
  background: ${p => (p.active ? '#fff' : '#58595b')};
  color: ${p => (p.active ? '#29a9d7' : '#fff')};
  padding: 5px 20px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  cursor: pointer;
`

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr 2fr;
  grid-gap: 10px;
`

const Text = styled.span`
  font-size: 1.1em;
  color: #333333;
`
