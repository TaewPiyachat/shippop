import React, { useState } from 'react'
import styled from 'styled-components'
import { TiCalculator } from 'react-icons/ti'
import { Input as AntdInput } from 'antd'

import { Input } from '../input'
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
        <Search placeholder='รหัสปณ. ปลายทาง' enterButton={ <TiCalculator /> } />
        <Button>ตรวจเช็คราคา</Button>
      </Wrapper>
    </Root>
  )
}

const Root = styled.div`
  height: 94px;
  max-width: 910px;
  width: 100%;
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

const Search = styled(AntdInput.Search)`
  .ant-input-group .ant-input {
    height: 40px;
    background: #ebebeb;
    border-radius: 5px 0 0 5px;
    border: none;
    box-shadow: none;
    font-size: 1em;

    ::placeholder {
      color: #333333;
    }
  }

  [type="button"] {
    height: 40px;
    width: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #ebebeb;
    border: none;
    border-left: 1px solid #ccc;
    border-radius: 0 5px 5px 0;
    box-shadow: none;
    font-size: 20px;
    color: rgb(11, 157, 209);
    padding: 0;

    :hover {
      color: rgb(255, 255, 255);
      background: rgb(11, 157, 209);
    }
  }
`
