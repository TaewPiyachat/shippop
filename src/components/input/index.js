import React from 'react'
import styled from 'styled-components'

import { Input as AntdInput } from 'antd'

export const Input = props => {
  return (
    <CustomInput { ...props } />
  )
}

export const InputWithButton = props => {
  return (
    <Search { ...props } enterButton />
  )
}

const CustomInput = styled(AntdInput)`
  max-width: 300px;
  height: 40px;
  background: #ebebeb;
  border-radius: 5px;
  border: none;
  box-shadow: none;
  font-size: 1em;

  ::placeholder {
    color: #333333;
  }
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
  background: #ebebeb;
  border: none;
  border-left: 1px solid #ccc;
  border-radius: 0 5px 5px 0;
}
`
