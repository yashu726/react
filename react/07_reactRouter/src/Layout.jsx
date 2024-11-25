import React from 'react'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import { Outlet } from 'react-router-dom'

function Layout() {
  return (
    <>
      <Header />
      {/* The Outlet renders the matched child route component */}
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  )
}

export default Layout
