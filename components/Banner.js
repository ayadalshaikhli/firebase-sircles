import React from 'react'

function Banner() {
  return (
    <div className='h-96 bg-yellow-400 text-black flex flex-col space-y-10 justify-left  place-content-center'>
        <div className='flex flex-col  '>
            <h1 className='text-8xl font-serif '>Sircles Admin</h1>
            <p className='text-2xl'>eaque enim ducimus rem eum vitae, aspernatur, nulla sint, facilis quas porro.</p>
        </div>
        <div>
            <button className='' type='submit'>Start Reading</button>
        </div>
    </div>
  )
}

export default Banner