import React from 'react'
import Hero from './Hero'
import Navbar from './navbar'
import Footer from './footer'
import Categories from './Categories'

const Home = () => {
  return (
    <div className='w-full h-full flex flex-col gap-4'>
        <Navbar/>
        <Hero/>
        <Categories/>
        <Footer/>
    </div>
  )
}

export default Home