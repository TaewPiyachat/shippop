import React from 'react'
import styled from 'styled-components'

export const Text = props => {
  const { children, ...rest } = props

  return (
    <CustomText style={ rest }>
      {children}
    </CustomText>
  )
}

const CustomText = styled.span`
    font-size: 1.5em;
    color: #818284;

    :hover {
        color: #0b9dd2;
    }
`
