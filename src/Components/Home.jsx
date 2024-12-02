import React from 'react'
import Hero from './Hero'
import Navbar from './navbar'
import Footer from './footer'

const Home = () => {
  return (
    <div className='w-full h-full flex flex-col gap-4'>
        <Navbar/>
        <Hero/>
        <Footer/>
    </div>
  )
}

export default Home