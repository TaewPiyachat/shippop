import React from 'react'
import styled from 'styled-components'

export const Layout = props => {
  const { children } = props

  return (
    <Root>{ children }</Root>
  )
}
const Root = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`
