import React from 'react'
import styled from 'styled-components'
import { FaTruckMoving, FaUserCircle } from 'react-icons/fa'
import { GiHamburgerMenu } from 'react-icons/gi'
import { FiKey } from 'react-icons/fi'

import { Button } from '../button'
import { Dropdown } from '../dropdown'

export const Login = ({ setOpenSidebar }) => {
  return (
    <Root>
      <Image alt='SHIPPOP' src='//www.shippop.com/assets/images/frontpage/logo_shippop.png?v=1.03498' />
      <Group>
        <Tracking>
          <TruckIcon />
          ติดตามพัสดุ
        </Tracking>
        <Button
          width='165px'
          height='41px'
          marginRight='5px'
        >
          <Wrapper>
            <KeyIcon />
            Login
          </Wrapper>
        </Button>
        <Dropdown />
      </Group>
      <IconGroup>
        <TruckIcon />
        <FaUserCircle />
        <GiHamburgerMenu onClick={ setOpenSidebar } />
      </IconGroup>
    </Root>
  )
}
const Root = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const Image = styled.img`
  width: 191px;
  height: 40px;

  @media (max-width: 768px) {
    height: 32px;
    width: auto;
  }
`

const Group = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    display: none;
  }
`

const IconGroup = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: flex;
    align-items: center;

    svg {
      font-size: 24px;
      color: #959595;
      margin: 8px;
    }
  }
`

const Tracking = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.25em;
  margin-right: 16px;
  cursor: default;

  :hover {
    color: rgb(11, 157, 210);

    svg {
      color: rgb(11, 157, 210);
    }
  }
`

const TruckIcon = styled(FaTruckMoving)`
  transform: scaleX(-1);
  color: rgb(155, 155, 155);
  margin-right: 6px;
`

const KeyIcon = styled(FiKey)`
  transform: scaleX(-1);
  transform: scaleY(-1);
  margin-right: 6px;
`

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`
