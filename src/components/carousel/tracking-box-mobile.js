import React, { useState } from 'react'
import styled from 'styled-components'
import { TiCalculator } from 'react-icons/ti'
import { Input as AntdInput } from 'antd'

import { Input } from '../input'
import { Button } from '../button'

export const TrackingBoxMobile = () => {
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
        <Grid>
          <Input placeholder='รหัสปณ. ต้นทาง' />
          <Input placeholder='รหัสปณ. ปลายทาง' />
        </Grid>
        <Search placeholder='รหัสปณ. ปลายทาง' enterButton={ <TiCalculator /> } />
        <Button>ตรวจเช็คราคา</Button>
      </Wrapper>
    </Root>
  )
}

const Root = styled.div`
  min-height: 94px;
  width: 100%;
  display: none;
  position: relative;
  padding: 20px;
  border-radius: 0 5px 5px 5px;
  background-color: #fff;

  @media (max-width: 768px) {
    display: block;
  }
`

const Tabs = styled.div`
  height: 32px;
  width: 100%;
  position: absolute;
  top: -32px;
  left: 0;
  display: flex;
`

const Tab = styled.div`
  height: 100%;
  width: 100%;
  font-size: 1.1em;
  background: ${p => (p.active ? '#fff' : '#58595b')};
  color: ${p => (p.active ? '#29a9d7' : '#fff')};
  padding: 5px 20px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  cursor: pointer;
  text-align: center;
`

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr 1fr 1fr;
  grid-gap: 10px;

  @media (max-width: 480px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`

const Grid = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 10px;
`

const Text = styled.span`
  font-size: 1.1em;
  color: #333333;
  text-align: center;
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

@media (max-width: 480px) {
  margin: 10px;
}
`
