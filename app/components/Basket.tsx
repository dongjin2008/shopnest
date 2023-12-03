import React from 'react'
import { Dialog } from '@headlessui/react'
import { useBasketStore, useUserStore } from '../store/store'
import Close from '../assets/Close.svg'
import Trash from '../assets/Trash.svg'
import Image from 'next/image'
import axios from 'axios'
import Cookies from 'universal-cookie'
import { useState, useEffect } from 'react'
import { toast } from 'sonner'
import { useShoppingCart } from 'use-shopping-cart'
import { redirect } from 'next/dist/server/api-utils'

interface BasketProps {
  id: string
  name: string
  description: string
  price: number
  image: string
  basketId: string
  quantity: number
}

const Basket = () => {
  const { cartDetails, removeItem, totalPrice, redirectToCheckout } = useShoppingCart()
  const { basket, added, setBasket, setAdded } = useBasketStore()
  useEffect(() => {
  }, [])

  const handleClick = async (id: string) => {
    removeItem(id)
  }

  const handleCheckout = async (event: any) => {
    event.preventDefault()
    try {
      const result = await redirectToCheckout()
      if (result.error) {
        console.log(result.error.message)
      }
    } catch (error: any) {
      console.log(error.message)
    }
  }


  return (
    <Dialog open={basket} onClose={() => setBasket(false)} className="absolute top-0 right-0 w-[35rem] h-full bg-primary shadow z-10">
        <button className='fixed top-1 right-1' onClick={() => {setBasket(false)}}>
          <Image className='w-[2rem] h-[2rem]' src={Close} alt='close'></Image>
        </button>
        <div className='flex flex-col gap-20'>
          <h1 className='text-4xl text-center text-accent font-extrabold'>Basket</h1>
          <div className='h-[25rem] overflow-x-hidden overflow-scroll flex flex-col gap-6 px-9'>
            {Object.values(cartDetails ?? {}).map((entry) => (
              <div key={entry.id} className="w-full flex">
                <Image className='mr-10' width={200} height={30} src={entry.image as string} alt='close'></Image>
                <div className="w-full flex gap-7 flex-col items-center">
                  <div className='w-full flex justify-between'>
                    <h1 className='text-2xl text-accent font-extrabold'>{entry.name}</h1>
                    <h1 className='text-2xl text-accent font-extrabold'>{`$${entry.price}`}</h1>
                  </div>
                  <div className='flex w-full justify-between'>
                    <input className='w-[6rem] bg-primary text-accent font-bold text-[1.25rem]' value={entry.quantity} type="number" />
                    <button onClick={() => {handleClick(entry.id)}}>
                      <Image className='w-[1.5rem] h-[1.5rem]' src={Trash} alt='trash'></Image>
                    </button>
                  </div>
               </div>
              </div>
            ))}
          </div>
          <div className='flex justify-between px-9'>
            <h1 className='text-accent text-3xl font-bold'>Total: ${totalPrice}</h1>
            <button onClick={handleCheckout} className='w-[8rem] h-[3rem] rounded-full text-center text-primary bg-accent text-2xl font-bold'>Pay Now</button>
          </div>
        </div>

    </Dialog>
  )
}

export default Basket