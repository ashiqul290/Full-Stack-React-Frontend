import React from 'react'
import { Outlet } from 'react-router'
import Header from './Header'
import Footer from './Footer'
import ScrollToTop from '../Components/ScrollToTop'

const Rootlayout = () => {
  return (
    <>
    <ScrollToTop />
    <Header />
    <Outlet />
    <Footer />
    </>
  )
}

export default Rootlayout