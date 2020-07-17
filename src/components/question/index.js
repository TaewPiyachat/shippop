import React, { useState } from 'react'
import styled from 'styled-components'
import { FaRegQuestionCircle, FaLine, FaTimes } from 'react-icons/fa'
import { IoMdPlayCircle } from 'react-icons/io'
import { MdAnnouncement } from 'react-icons/md'

export const Question = () => {
  const [open, setOpen] = useState(false)

  return (
    <React.Fragment>
      <IconWrapper>
        { open ? <FaTimes onClick={ () => setOpen(false) } /> : <FaRegQuestionCircle onClick={ () => setOpen(true) } /> }
      </IconWrapper>
      <Wrapper open={ open }>
        <Header>
        <img src='https://www.shippop.com/assets/images/chi.png?v=1501583198' alt='question' />
          สอบถาม
          <br />
          น้องป๊อปได้นะครับ
        </Header>
        <Item>
          <IoMdPlayCircle />
          Clip สอนการใช้งาน SHIPPOP
        </Item>
        <Item>
          <FaLine />
          ตอบปัญหาด่วนรวดเร็วทันใจที่ทางไลน์ @SHIPPOP
          <br />
          วัน จันทร์-ศุกร์ เวลา 09.00-18.00
        </Item>
        <Item>
          <MdAnnouncement />
          ใช้งานครั้งแรกส่งฟรี 50 บาท ใช้รหัส
          <br />
          "NEW2020"
        </Item>
      </Wrapper>
    </React.Fragment>
  )
}

const IconWrapper = styled.div`
  position: fixed;
  right: 20px;
  width: 60px;
  height: 60px;
  bottom: 20px;
  border-radius: 40px;
  z-index: 99999;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 30px;
  color:  #b3e9fc;
  background: #0b9dd2;
  box-shadow: 10px 10px 5px -12px rgba(0,0,0,.4);
`

const Wrapper = styled.div`
  width: 300px;
  height: 280px;
  display: flex;
  flex-direction: column;
  position: fixed;
  right: 20px;
  bottom: 100px;
  border: 1px solid #f8f8f8;
  border-radius: 3px;
  background: #fff;
  z-index: 99999;
  opacity: ${p => (p.open ? 1 : 0)};
  transition: all 1s;
`

const Header = styled.div`
  height: 100px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  position: relative;
  background: #0b9dd2;
  border-radius: 3px 3px 0 0;
  font-size: 22px;
  color: #fff;
  padding: 0 24px;

  img {
    position: absolute;
    left: 20px;
    top: -43px;
  }
`

const Item = styled.div`
  display: flex;
  padding-top: 10px;
  min-height: 40px;
  cursor: pointer;
  font-size: 14px;
  color: #636363;
  padding: 10px 24px;

  svg {
    font-size: 20px;
    margin-right: 12px;
  }
`