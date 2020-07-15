import React from 'react'
import styled from 'styled-components'

import { Login } from './login'
import { Menu } from './menu'

export const Header = () => {
  return (
    <Root>
      <Login />
      <Menu />
    </Root>
  )
}

const Root = styled.div`
  width: 100%;
  max-width: 1000px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: #fff;
  height: 135px;
  position: fixed;
  top: 0;

  padding: 20px 0;
`
