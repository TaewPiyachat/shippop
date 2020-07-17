import React from 'react'
import styled from 'styled-components'
import { FiMapPin } from 'react-icons/fi'

import { Input } from '../input'
import { Text } from '../text'

import { menu } from '../data'

export const Menu = () => {
  return (
    <Root>
      <MenuGroup>
        {menu.map(m => (
          <Link key={ m.name } href={ m.path }>
            <Text>{ m.name }</Text>
          </Link>
        ))}
      </MenuGroup>
      <Wrapper>
        <Input placeholder='กรอกหมายเลขพัสดุ' />
        <Icon />
      </Wrapper>
    </Root>
  )
}

const Root = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-top: 8px;

  @media (max-width: 768px) {
    display: none;
  }
`

const MenuGroup = styled.div`
  display: flex;
`

const Link = styled.a`
  padding: 15px 35px 0 10px;
`

const Wrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex: 1;
`

const Icon = styled(FiMapPin)`
  font-size: 26px;
  margin: 10px;
`
