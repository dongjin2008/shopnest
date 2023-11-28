import React from 'react'
import Image from 'next/image'


type CardProps = {
  ProductName: string
  Description: string
  Price: number
  Thumbnail: string
}

const Card: React.FC<CardProps> = ({ ProductName, Description, Price, Thumbnail }) => {
  return (
    <div className='flex flex-col gap-[0.5rem] w-[19.5rem] h-[18.25rem]'>
      <Image width={312} height={200} src={Thumbnail} alt="product Image"></Image>
      <div className='flex justify-between'>
        <h1 className='text-[1.5rem] text-accent font-extrabold'>{ProductName}</h1>
        <h1 className='text-[1.5rem] text-accent font-extrabold'>{`$${Price}`}</h1>
      </div>
      <div className='flex justify-between'>
        <h1 className='text-[1rem] w-[13.5rem] text-accent font-medium'>{Description}</h1>
        <div className='bg-primary shadow rounded-full w-[2rem] h-[2rem]'></div>
      </div>
    </div>
  )
}

export default Card