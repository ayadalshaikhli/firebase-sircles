import React from 'react'

export default function Header() {
  return (
    <div className='bg-yellow-400 h-16 border-b-2 border-black flex justify-between w-full px-32'>
      <div> 
        <h1 className='text-4xl'>Sircles</h1>
      </div>
      <div className='text-2xl mt-3 mr-32'>
        <ul className='flex justify-between space-x-4'>
          <li>Home</li>
          <li>Blog</li>
          <li>Services</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </div>
    </div>
  )
}
