import React from 'react'
import styled from 'styled-components'

import { Button as AntdButton } from 'antd'

import { buttonStyle } from './theme'

export const Button = props => {
  const { children, theme = 'primary', ...rest } = props

  return (
    <CustomButton theme={ theme } style={ rest }>
      {children}
    </CustomButton>
  )
}

const CustomButton = styled(AntdButton)`
  ${p => buttonStyle[p.theme]};
  height: 41px;
`
