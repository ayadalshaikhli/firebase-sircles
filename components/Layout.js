import React from 'react'
import Footer from './Footer';
import Header from './Header';

export default function Layout(props) {
    const { children } = props;

  return (
    <div className='flex flex-col min-h-screen relative text-black max-w-7' >
        <Header/>
        <div className='flex-1 '>
            {children}
        </div>
        <Footer/>
    </div>
  )
}
