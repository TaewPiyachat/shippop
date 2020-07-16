import React from 'react'
import styled from 'styled-components'

import { Header } from './components/header'
import { Carousel } from './components/carousel'
import { Partner } from './components/partner'
import { Service } from './components/service'
import { Tab } from './components/tab'
import { Article } from './components/article'
import { Testimonial } from './components/testimonial'
import { Press } from './components/press'

import 'antd/dist/antd.css'
import './App.css'

function App() {
  return (
    <Layout>
      <Header />
      <Carousel />
      <Partner />
      <Service />
      <Tab />
      <Article />
      <Testimonial />
      <Press />
    </Layout>
  )
}

export default App

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
`
