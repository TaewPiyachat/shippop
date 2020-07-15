import React, { useState } from 'react'
import styled from 'styled-components'
import Slider from "react-slick"

const images = [
  { name: 'Best Express', url: '//www.shippop.com/assets/images/logistic/bestexpress.png?v=1.0324', desc: '-' },
  { name: 'ไปรษณีย์ไทย', url: 'https://www.shippop.com/assets/images/logistic/thailandpost.png?v=1497285980', desc: 'ขนส่งทั่วประเทศไทยที่ใหญ่ที่สุด' },
  { name: 'ninjavan', url: 'https://www.shippop.com/assets/images/logistic/ninjavan.png?v=1497285980', desc: 'ขนส่งรับถึงบ้าน' },
  { name: 'lalamove', url: 'https://www.shippop.com/assets/images/logistic/lalamove.png?v=1497285980', desc: 'มอเตอร์ไซค์ รับส่งด่วนในกรุงเทพ' },
  { name: 'Skootar', url: 'https://www.shippop.com/assets/images/logistic/skootar.png?v=1497285980', desc: 'มอเตอร์ไซต์รับและส่งด่วนในกรุงเทพ' },
  { name: 'Alphafast', url: 'https://www.shippop.com/assets/images/logistic/alphafast.png?v=1497285980', desc: 'ขนส่งทั่วกรุงเทพและปริมณฑล รับของถึงหน้าบ้าน' },
  { name: 'SCG Yamato Express', url: '//upload.shippop.com/courier/scg-yamato-express-logo.png?v=1497285980', desc: 'ขนส่งของเย็น รับของถึงหน้าบ้าน' },
  { name: 'CJ Logistic', url: '//www.shippop.com/assets/images/logistic/cjlogistics.png?v=1.0324', desc: 'เข้ารับสินค้าตั้งแต่ 3 ชิ้นขึ้นไป สำหรับที่อยู่ต้นทางเดียวกัน' },
  { name: 'Flash Express', url: '//www.shippop.com/assets/images/logistic/flash_express.png?v=1.0324', desc: 'เข้ารับสินค้าถึงบ้านตั้งแต่ชิ้นแรก ส่งได้ทั่วประเทศ' },
]
const settings = {
  centerMode: true,
  infinite: true,
  slidesToShow: 5,
  swipeToSlide: true,
}

export const Partner = () => {
  const [activePartner, setPartner] = useState(1)

  return (
    <Root>
      <SliderWrapper>
        <Slider { ...settings }>
          {images.map((image, key) => (
            <Image
              src={ image.url }
              alt={ image.name }
              active={ key === activePartner }
              onClick={ () => setPartner(key) }
            />
          ))}
        </Slider>
      </SliderWrapper>
      <Text>[ กดที่โลโก้เพื่อดูคำอธิบาย ]</Text>
      <Description>{ images[activePartner].desc }</Description>
    </Root>
  )
}

const Root = styled.div`
  width: 100%;
  height: 110px;
  background: #f8f8f8;
  display: flex;
  flex-direction: column;
  align-items: center;

  .slick-slider {
    width: 100%;
  }
`

const SliderWrapper = styled.div`
  max-width: 1000px;
  display: flex;
  align-items: center;
  padding-top: 12px;
`

const Image = styled.img`
  max-height: 40px;
  width: auto;
  object-fit: contain;
  cursor: pointer;
  filter: ${p => (p.active ? 'grayscale(0)' : 'grayscale(100%)')};
  opacity: ${p => (p.active ? 1 : 0.5)};
`

const Text = styled.span`
  color: #ccc;
  font-size: 0.8em;
  margin-top: 5px;
`

const Description = styled.span`
  margin-top: 5px;
  font-size: 1.1em;
  color: #636363;
`
