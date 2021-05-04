import React from 'react'

export default function Navbar() {
  return (
    <>
     <nav className='bg-gray-800'>
        <div className='flex items-center justify-between h-16 mx-8 -inset-x-0'>
          <div>
            <h1 className='font-semibold text-white'>Trackt</h1>
          </div>
          <div className='flex w-1/3 justify-evenly'>
            <a href="#" className='font-light text-gray-100'>Home</a>
            <a href="#" className='font-light text-gray-100'>Movies</a>
            <a href="#" className='font-light text-gray-100'>TV Shows</a>
            <a href="#" className='font-light text-gray-100'>Upcoming</a>
          </div>
          <div>
            <h1 className='font-semibold text-white'>Se connecter</h1>
          </div>
        </div>
     </nav>
    </>
  )
}
