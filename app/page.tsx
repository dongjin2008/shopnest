"use client";
import Image from 'next/image'
import { useState, useEffect } from 'react'
import React from 'react'
import NavBar from './components/NavBar'
import Card from './components/Card'
import axios from 'axios'
import { z } from 'zod';

interface ProductSchema {
  id: string
  name: string
  description: string
  price: number
  thumbnail: string
}

export default function Home() {
  const [products, setProducts] = useState([])
  useEffect(() => {
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
      <main className='w-screen h-screen bg-primary px-[3.75rem]  mt-[7.5rem]'>
        <div className='flex justify-center'>
          <div className='grid grid-rows-4 grid-cols-3 gap-[3.75rem]'>
            {products.map((product: ProductSchema) => (
              <Card key={product.id} ProductId={product.id} ProductName={product.name} Description={product.description} Price={product.price} Thumbnail={product.thumbnail} />
            ))}
          </div>
        </div>
      </main>
    </>
  )
}
