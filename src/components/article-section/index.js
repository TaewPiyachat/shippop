import React from 'react'
import styled from 'styled-components'

import { Button } from '../button'
import { articles } from '../data'

export const ArticleSection = () => {
  return (
    <Root>
      <Wrapper>
      <Headline2>บทความและโปรโมชั่น</Headline2>
      <Headline3>บทความข่าวสารและโปรโมชั่นที่เราเสิร์ฟให้</Headline3>
      <ItemGroup>
        {articles.map((d, key) => (
          <Item key={ key }>
            <Image src={ d.src } />
            <ItemHeadline2>
              { d.title }
            </ItemHeadline2>
            <ItemText>{ d.desc }</ItemText>
          </Item>
        ))}
      </ItemGroup>
      <Button
        width='250px'
        height='64px'
        fontSize='1.5em'
        theme='primary_inverted'
      >
        อ่านต่อทั้งหมด
      </Button>
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

const ItemGroup = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 300px);
  margin-bottom: 20px;
  grid-gap: 10px;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 360px);
  }

  @media (max-width: 480px) {
    grid-template-columns: repeat(2, 200px);
  }
`

const Item = styled.div`
  border-radius: 5px;
  background: #f8f8f8;
  margin: 5px;
  padding: 5px;
  cursor: pointer;

  :hover {
    box-shadow: 10px 10px 34px -20px rgba(0,0,0,.75);
  }
`

const Image = styled.img`
  height: 125px;
  width: 100%;
  object-fit: cover;
`

const ItemHeadline2 = styled.h2`
  font-size: 1.12em;
  color: #28a8d7;
  height: 48px;
  padding: 10px 10px 0;
  margin: 0;
  line-height: 1.3em;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`

const ItemText = styled.p`
  margin-top: 5px;
  font-size: 1em;
  color: #555;
  padding: 0 10px 10px;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`
