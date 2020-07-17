import React from 'react'
import styled from 'styled-components'

export const Sidebar = ({ openSidebar }) => {
  return (
    <Root open={ openSidebar }>
      <List>
        <Item>Login</Item>
        <Item>ติดตามพัสดุ</Item>
        <Header>เมนูบริการ</Header>
        <Item>หน้าแรก</Item>
        <Item>บริการของเรา</Item>
        <Item>คำถามที่พบบ่อย</Item>
        <Item>เครื่องมือ</Item>
        <SubMenu>Widgets</SubMenu>
        <SubMenu>ค้นหาจุด Dropoff</SubMenu>
        <SubMenu>โปรแกรมแยกไฟล์พื้นที่พิเศษ</SubMenu>
        <Item>ติดต่อเรา</Item>
        <Language>
          <span>เปลี่ยนภาษา</span>
          <Wrapper>
            <LanguageButton active>TH</LanguageButton>
            <LanguageButton>EN</LanguageButton>
          </Wrapper>
        </Language>
      </List>
      <Contact>
        <span>ติดต่อเรา</span>
        <span>เลขที่ 128/239-240 ชั้น 22 อาคารพญาไทพลาซ่า ถนนพญาไท แขวงทุ่งพญาไท เขตราชเทวี กรุงเทพมหานคร 10400</span>
        <br />
        <span>โทร. (+66) 92-905-3355</span>
        <span>อีเมล์. contact@shippop.com </span>
      </Contact>
    </Root>
  )
}

const Root = styled.div`
  width: 100%;
  left: ${p => (p.open ? 0 : '100%')};
  height: 100%;
  margin-top: 50px;
  position: fixed;
  transition: all 0.5s;
  z-index: 99;
  background: #fff;
`

const List = styled.div`
  display: flex;
  flex-direction: column;
`

const Item = styled.div`
  height: 46px;
  display: flex;
  align-items: center;
  font-size: 1.25em;
  padding: 10px 20px;
  color: #58595b;
  border-bottom: 1px solid #ebebeb;
  background: #f8f8f8;
`

const Header = styled.div`
  font-size: 1.5em;
  padding: 10px 20px;
  border-bottom: 1px solid #ebebeb;
  color: #0b9dd2;
  background: #fff;
`

const SubMenu = styled.div`
  padding: 10px 33px;
  border-bottom: 1px solid #ebebeb;
  background: #f8f8f8;
  color: #58595b;
  font-size: 1.2em;
`

const Wrapper = styled.div`
  display: flex;
  align-items: center;
`

const Language = styled(Item)`
  height: 100%;
  justify-content: space-between;
  background: #fff;
  border: none;
`

const LanguageButton = styled.div`
  width: 42px;
  height: 42px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${p => (p.active ? '#fff' : '#959595')};
  background: ${p => (p.active ? '#0b9dd1' : '#ebebeb')};
  border: ${p => (p.active ? '1px solid #0b9dd1' : '1px solid #ccc')};
  font-size: 1em;
  padding: 7px 10px;
  border-radius: 5px;
  margin: 0 2px;
`

const Contact = styled.div`
  display: flex;
  flex-direction: column;
  padding: 40px 20px;
  color: #333;
`