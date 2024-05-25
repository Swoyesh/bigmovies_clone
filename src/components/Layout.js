import React from 'react'
import Footer from './Footer'

const Layout = ({children}) => {
  return (
    <div style={{height: "300px"}}>
        {children}
        <Footer/>
    </div>
  )
}

export default Layout