import React from 'react'
import styled from 'styled-components'

const data = [
  { name: 'AIS The StartUP', src: '//www.shippop.com/assets/images/frontpage/press_ais.png?v=1496763786' },
  { name: 'ZipEvent', src: '//www.shippop.com/assets/images/frontpage/press_zipevent.png?v=1496763786' },
  { name: 'blognone', src: '//www.shippop.com/assets/images/frontpage/press_blognone.png?v=1496763786' },
  { name: 'techsauce', src: '//www.shippop.com/assets/images/frontpage/press_techsauce.png?v=1496763786' },
  { name: 'เว็บแบไต๋', src: '//www.shippop.com/assets/images/frontpage/press_beartai.png?v=1496763786' },
  { name: 'ผู้จัดการ', src: '//www.shippop.com/assets/images/frontpage/press_manager.png?v=1496763786' },
  { name: 'กรุงเทพธุรกิจ', src: '//www.shippop.com/assets/images/frontpage/press_bangkokbiz.png?v=1496763786' },
]

export const Press = () => {
  return (
    <Root>
      <Wrapper>
        <Headline2>คุณอาจเคยพบเรามาบ้าง</Headline2>
        <Headline3>ลูกค้าบางท่าน อาจจะเคยพบเจอเรามาก่อนจากแหล่งต่าง ๆ นี้</Headline3>
        <ImageWrapper>
          {data.map(d => (
            <Image src={ d.src } alt={ d.name } />
          ))}
        </ImageWrapper>
      </Wrapper>
    </Root>
  )
}

const Root = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
`

const Wrapper = styled.div`
    width: 100%;
    max-width: 1000px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 40px 0;
`

const Headline2 = styled.h2`
    font-size: 2.8em;
    color: #0b9dd2;
    margin: 5px 0;
    padding-bottom: 5px;
`

const Headline3 = styled.h3`
    font-size: 1.8em;
    color: #58595b;
    margin-top: -5px;
    margin-bottom: 25px;
`

const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`

const Image = styled.img``
