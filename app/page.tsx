"use client";
import { useState, useEffect } from 'react'
import React from 'react'
import NavBar from './components/NavBar'
import Card from './components/Card'
import axios from 'axios'
import LogIn from './components/LogIn';
import Basket from './components/Basket';
import { useUserStore } from './store/store';
import Cookies from 'universal-cookie'

interface ProductSchema {
  id: string
  name: string
  description: string
  price: number
  priceId: string
  image: string
}

export default function Home() {
  const cookie = new Cookies()
  const [products, setProducts] = useState([])
  const { setIsLogin } = useUserStore()
  


  useEffect(() => {
    if (cookie.get('userId')) {
      setIsLogin(true)
    }
    const getproducts = async () => {
      try {
        const response = await axios.get('/api/products')
        setProducts(response.data)
      } catch (error) {
        console.log(error)
      }
    }
    getproducts()
  }, [])

  return (
    <>
      <NavBar />
      <LogIn />
      <Basket />
      <main className='w-screen h-screen bg-primary px-[3.75rem]  mt-[7.5rem]'>
        <div className='flex justify-center'>
          <div className='grid grid-rows-4 grid-cols-3 gap-[3.75rem]'>
            {products.map((product: ProductSchema) => (
              <Card key={product.id} ProductId={product.id} ProductName={product.name} Description={product.description} Price={product.price} PriceId={product.priceId} Thumbnail={product.image} />
            ))}
          </div>
        </div>
      </main>
    </>
  )
}
