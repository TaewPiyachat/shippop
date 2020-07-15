import React from 'react'
import styled from 'styled-components'

// import { Layout } from './components/layout'
import { Header } from './components/header'
import { Carousel } from './components/carousel'

import 'antd/dist/antd.css'
import './App.css'

function App() {
  return (
    <Layout>
      <Header />
      <Carousel />
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
