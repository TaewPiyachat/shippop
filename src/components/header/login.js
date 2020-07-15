import React from 'react'
import styled from 'styled-components'

import { Button } from '../button'
import { Dropdown } from '../dropdown'

export const Login = () => {
  return (
    <Root>
      <Image alt='SHIPPOP' src='//www.shippop.com/assets/images/frontpage/logo_shippop.png?v=1.03498' />
      <Group>
        <Tracking>ติดตามพัสดุ</Tracking>
        <Button
          width='165px'
          height='41px'
        >
          Login
        </Button>
        <Dropdown />
      </Group>
    </Root>
  )
}
const Root = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const Image = styled.img`
  width: 191px;
  height: 40px;
`

const Group = styled.div`
  display: flex;
  align-items: center;
`

const Tracking = styled.div`
  font-size: 1.25em;
  margin-right: 16px;
`
