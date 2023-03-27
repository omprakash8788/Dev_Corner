import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'
import Header from './Header'

const Layout = () => {
  return (
    <>
    <Header/>
    <Outlet/>
    {/* here we pass child elements */}
    <Footer/>
    
    </>
  )
}

export default Layout