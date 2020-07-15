import React from 'react'
import styled from 'styled-components'

import { Button as AntdButton } from 'antd'

import { buttonStyle } from './theme'

export const Button = props => {
  const { children, ...rest } = props

  return (
    <CustomButton theme='primary' style={ rest }>
      {children}
    </CustomButton>
  )
}

const CustomButton = styled(AntdButton)`
  ${p => buttonStyle[p.theme]};
  height: 41px;
`
