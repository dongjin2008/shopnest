"use client"
import React from 'react'

// payment success page button for going back to home page
const page = () => {
  return (
    <div className='w-screen h-screen gap-5 flex justify-center flex-col items-center'>
      <h1 className='text-4xl text-accent font-bold'>Payment Success</h1>
      <button className='w-[8rem] h-[3rem] rounded-full font-bold bg-accent text-primary text-lg ' onClick={() => window.location.href = '/'}>Go Home</button>
    </div>
  )
}

export default page