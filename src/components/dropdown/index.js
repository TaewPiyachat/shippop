import React from 'react'
import styled from 'styled-components'

import { Menu as AntdMenu, Dropdown as AntdDropdown, Button } from 'antd'

export const Dropdown = props => {
  const { children, ...rest } = props

  const menu = (
    <Menu>
      <MenuItem>EN</MenuItem>
    </Menu>
  )

  return (
    <CustomDropdown overlay={ menu } style={ rest }>
      <Button>TH</Button>
    </CustomDropdown>
  )
}

const CustomDropdown = styled(AntdDropdown)`
  width: 45px;
  height: 41px;
  color: #959595;
  font-size: 1.25em;
  padding: 7px 10px;
  background: #ebebeb;
  border-radius: 5px;

  :hover {
      background: #0b9dd1;
      color: #fff;
      border: 1px solid #0b9dd1;
  }
`

const Menu = styled(AntdMenu)`
  background: #ebebeb;
  padding: 0;
  height: 41px;
`

const MenuItem = styled(Menu.Item)`
  width: 45px;
  height: 41px;
  color: #959595;
  font-size: 1.25em;
  border-radius: 0 0 5px 5px;
  border: 1px solid #ccc;
  padding: 10px 12px;

  :hover {
      background: #0b9dd1;
      color: #fff;
      border: 1px solid #0b9dd1;
  }
`
