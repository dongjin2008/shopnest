import React from 'react'
import Image from 'next/image'
import Plus from '../assets/Plus.svg'
import axios from 'axios'
import Cookies from 'universal-cookie'
import { useBasketStore, useUserStore } from '../store/store'
import { toast } from 'sonner'
import { useShoppingCart } from 'use-shopping-cart'

type CardProps = {
  ProductId: string
  ProductName: string
  PriceId: string
  Description: string
  Price: number
  Thumbnail: string
}

const Card: React.FC<CardProps> = ({ ProductId, ProductName, Description, Price, PriceId, Thumbnail }) => {
  const { addItem } = useShoppingCart()
  const product = {
    name: ProductName,
    description: Description,
    price: Price,
    price_id: PriceId,
    image: Thumbnail,
    quantity: 1,
    currency: 'USD'
  }
  const cookie = new Cookies()
  const { isLogin } = useUserStore()
  const { setAdded } = useBasketStore()
  const handleClick = async () => {
    if (!isLogin) {
      toast.error('Please login first')
      return
    } 
    addItem(product)
    try {
      await axios.post("/api/baskets", {
        userId: cookie.get('userId'),
        products: [
          {
            productId: ProductId,
            quantity: 1
          }
        ]
      })
      toast.success('Added to cart')
      setAdded(true)
    } catch (error: any) {
      console.log(error)
    }
  }

  return (
    <div className='flex flex-col gap-[0.5rem] w-[19.5rem] h-[18.25rem]'>
      <div className='w-full h-[10rem] overflow-hidden'>
        <Image width={312} height={200} src={Thumbnail} alt="product Image"></Image>
      </div>
      <div className='flex justify-between'>
        <h1 className='text-[1.5rem] text-accent font-extrabold'>{ProductName}</h1>
        <h1 className='text-[1.5rem] text-accent font-extrabold'>{`$${Price}`}</h1>
      </div>
      <div className='flex justify-between'>
        <h1 className='text-[1rem] w-[13.5rem] text-accent font-medium'>{Description}</h1>
        <button onClick={handleClick} className='flex justify-center items-center bg-primary shadow rounded-full w-[2rem] h-[2rem]'>
          <Image className='w-[1.3rem] h-[1.3rem]' src={Plus} alt='plus'></Image>
        </button>
      </div>
    </div>
  )
}

export default Card