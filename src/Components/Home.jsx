import React from 'react'
import Hero from './Hero'
import Navbar from './navbar'

const Home = () => {
  return (
    <div className='w-full h-full flex flex-col gap-4'>
        <Navbar/>
        <Hero/>
       
    </div>
  )
}

export default Home