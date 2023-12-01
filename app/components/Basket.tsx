import React from 'react'
import { Dialog } from '@headlessui/react'
import { useBasketStore } from '../store/store'
import Close from '../assets/Close.svg'
import Image from 'next/image'
import axios from 'axios'
import Cookies from 'universal-cookie'
import { useState, useEffect } from 'react'

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
  const { basket, added, setBasket, setAdded } = useBasketStore()
  const [products, setProducts] = useState([])
  const cookie = new Cookies()
  useEffect(() => {
    getOrderedProducts()
  }, [])

  useEffect(() => {
    if (added) {
      getOrderedProducts()
      setAdded(false)
    }
  }, [added])

  const getOrderedProducts = async () => {
    try {
      const response = await axios.get(`/api/users/${cookie.get('userId')}`)
      const products_list = await axios.get(`/api/baskets/${response.data.id}`)
      setProducts(products_list.data)
    } catch (error: any) {
      console.log(error)
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
            {products.map((product: BasketProps) => (
              <div className="w-full flex">
                <Image className='mr-10' width={200} height={30} src={product.image} alt='close'></Image>
                <div className="w-full flex flex-col">
                  <div className='w-full flex justify-between'>
                    <h1 className='text-2xl text-accent font-extrabold'>{product.name}</h1>
                    <h1 className='text-2xl text-accent font-extrabold'>{`$${product.price}`}</h1>
                  </div>
                  <h1>{product.quantity}</h1>
                </div>
              </div>
            ))}
          </div>
        </div>

    </Dialog>
  )
}

export default Basket