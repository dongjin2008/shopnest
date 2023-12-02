import React from 'react'
import { Dialog } from '@headlessui/react'
import { useBasketStore, useUserStore } from '../store/store'
import Close from '../assets/Close.svg'
import Image from 'next/image'
import axios from 'axios'
import Cookies from 'universal-cookie'
import { useState, useEffect } from 'react'
import { toast } from 'sonner'

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
  const { isLogin } = useUserStore()
  const { basket, added, setBasket, setAdded } = useBasketStore()
  const [products, setProducts] = useState([])
  const [total, setTotal] = useState(0)
  const cookie = new Cookies()
  useEffect(() => {
    getOrderedProducts()
  }, [])

  useEffect(() => {
    if (isLogin) {
      getOrderedProducts()
    }
  }, [isLogin])

  const getOrderedProducts = async () => {
    try {
      const response = await axios.get(`/api/users/${cookie.get('userId')}`)
      const products_list = await axios.get(`/api/baskets/${response.data.id}`)
      const total = await axios.get(`/api/total/${response.data.id}`)
      setTotal(total.data)
      setProducts(products_list.data)
    } catch (error: any) {
      console.log(error)
    }
  }
  const changeHandler = async (productId: string, quantity: number) => {
    if (quantity < 1) {
      toast.error('Quantity must be greater than 0')
      return
    }
    try {
      await axios.put(`/api/baskets/${productId}`, {
        quantity: quantity
      })
      getOrderedProducts()
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
              <div key={product.id} className="w-full flex">
                <Image className='mr-10' width={200} height={30} src={product.image} alt='close'></Image>
                <div className="w-full flex gap-7 flex-col items-center">
                  <div className='w-full flex justify-between'>
                    <h1 className='text-2xl text-accent font-extrabold'>{product.name}</h1>
                    <h1 className='text-2xl text-accent font-extrabold'>{`$${product.price}`}</h1>
                  </div>
                  <input className='w-[10rem] bg-primary text-accent font-bold text-[1.25rem]' value={product.quantity} onChange={(e) => {changeHandler(product.id, parseInt(e.target.value))}} type="number" />
                </div>
              </div>
            ))}
          </div>
          <div className='flex justify-between px-9'>
            <h1 className='text-accent text-3xl font-bold'>Total: ${total}</h1>
            <button className='w-[8rem] h-[3rem] rounded-full text-center text-primary bg-accent text-2xl font-bold'>Pay Now</button>
          </div>
        </div>

    </Dialog>
  )
}

export default Basket