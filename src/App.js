import React from 'react'
import styled from 'styled-components'

import { Header } from './components/header'
import { Carousel } from './components/carousel'
import { Partner } from './components/partner'

import 'antd/dist/antd.css'
import './App.css'

function App() {
  return (
    <Layout>
      <Header />
      <Carousel />
      <Partner />
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
