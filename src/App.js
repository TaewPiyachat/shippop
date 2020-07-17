import React, { useState } from 'react'
import styled from 'styled-components'

import { Header } from './components/header'
import { Carousel } from './components/carousel'
import { TrackingBoxMobile } from './components/carousel/tracking-box-mobile'
import { PartnerSection } from './components/partner-section'
import { ServiceSection } from './components/service-section'
import { TabSection } from './components/tab-section'
import { ArticleSection } from './components/article-section'
import { TestimonialSection } from './components/testimonial-ssection'
import { PressSection } from './components/press-section'
import { Footer } from './components/footer'
import { Sidebar } from './components/sidebar'
import { Question } from './components/question'

import 'antd/dist/antd.css'
import './App.css'

function App() {
  const [openSidebar, setOpenSidebar] = useState(false)

  return (
    <Layout>
      <Header setOpenSidebar={ () => setOpenSidebar(!openSidebar) } />
      <Carousel />
      <TrackingBoxMobile />
      <PartnerSection />
      <ServiceSection />
      <TabSection />
      <ArticleSection />
      <TestimonialSection />
      <PressSection />
      <Footer />
      <Sidebar openSidebar={ openSidebar } />
      <Question />
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
  overflow-x: hidden;
  position: relative;
`
