import React from 'react'

import './App.css'
import Navbar2 from './components/Navbar2'
import Home from './components/Home'
import Clients from './components/Clients'
import About from './components/About'
import Products from './components/Products'
import OurServices from './components/OurServices'
import Footer from './components/MyFooter'
import OurTeam from './components/OurTeam'


function App() {

  return (
    <>
   <div className='w-full overflow-x-hidden'>
   <Navbar2/>
    <Home/>
    <OurServices/>
    <Clients/>
    <About/>
    <Products/>
    <OurTeam/>
    <Footer/>
   </div>
  
    </>
  )
}

export default App
