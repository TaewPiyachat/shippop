import React from 'react'
import styled from 'styled-components'

import { Login } from './login'
import { Menu } from './menu'

export const Header = () => {
  return (
    <Root>
      <Wrapper>
        <Login />
        <Menu />
      </Wrapper>
    </Root>
  )
}

const Root = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  background: #fff;
  height: 135px;
  position: fixed;
  top: 0;
  padding: 20px 0;
  z-index: 999;
`

const Wrapper = styled.div`
  max-width: 1000px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`
