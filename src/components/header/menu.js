import React from 'react'
import styled from 'styled-components'
import { FiMapPin } from 'react-icons/fi'

import { Input } from '../input'
import { Text } from '../text'

const menu = [
  { name: 'หน้าแรก', path: '/' },
  { name: 'บริการของเรา', path: '/' },
  { name: 'คำถามที่พบบ่อย', path: '/' },
  { name: 'เครื่องมือ', path: '/' },
  { name: 'ติดต่อเรา', path: '/' },
]

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
