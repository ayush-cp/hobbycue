import React from 'react'
import Hero from './Hero'
import Navbar from './navbar'
import Categories from './Categories'

const Home = () => {
  return (
    <div className='w-full h-full flex flex-col gap-4'>
        <Navbar/>
        <Hero/>
       <Categories/>
    </div>
  )
}

export default Home