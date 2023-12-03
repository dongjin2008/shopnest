"use client"
import React from 'react'

const page = () => {
  return (
    <div className='w-screen h-screen gap-5 flex justify-center flex-col items-center'>
      <h1 className='text-4xl text-accent font-bold'>Payment Cancled </h1>
      <button className='w-[8rem] h-[3rem] rounded-full font-bold bg-accent text-primary text-lg ' onClick={() => window.location.href = '/'}>Go Home</button>
    </div>
  )
}

export default page