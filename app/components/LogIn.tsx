"use client";
import React from 'react'
import Image from 'next/image'
import Close from '../assets/Close.svg'
import axios from 'axios'
import Cookies from 'universal-cookie'
import { useUserStore } from '../store/store';

const LogIn = () => {
  const { name, password, isLogin, setLogin, setName, setPassword, setIsLogin } = useUserStore() 
  const cookie = new Cookies()
  const handleClick = async (name: string, password: string) => {
    try {
      const response = await axios.post("/api/login", {
        username: name,
        password: password

      })
      console.log(response.data)
      cookie.set('userId', response.data.id, { sameSite: 'strict' })
      setLogin(false)
      setIsLogin(true)
    } catch (error: any) {
      console.log(error)
    }
  }
  
  return (
    <main className='absolute shadow top-1/2 left-1/2 mr-[-50%] translate-x-[-50%] translate-y-[-50%]  bg-primary h-[35rem] w-[40rem] mx-auto'>
      <button className='fixed top-1 right-1' onClick={() => {setLogin(false)}}>
        <Image className='w-[2rem] h-[2rem]' src={Close} alt='close'></Image>
      </button>
      { isLogin ? (
        <h1 className='text-accent text-center font-extrabold text-[2.438rem]'>Your Name: {name}</h1>
      ) : (
        <div className='flex flex-col gap-[4rem] justify-center'>
          <h1 className='text-accent text-center font-extrabold text-[1.938rem]'>Log In</h1>
          <div className='flex flex-col items-center justify-center gap-9'>
            <div className='flex flex-col gap-3'>
              <div className='flex flex-col'>
                <label className='text-[1.25rem] text-accent font-bold' htmlFor="name">Name</label>
                <input className='w-[18rem] h-[3rem] text-accent rounded-full bg-primary shadow pl-6 placeholder:text-[#6B6F78]' value={name} onChange={(e) => {
                  setName(e.target.value)
                }} placeholder='Enter the name' type="text" name="name"/>
              </div>
              <div className='flex flex-col'>
                <label className='text-[1.25rem] text-accent font-bold' htmlFor="password">Password</label>
                <input className='w-[18rem] h-[3rem] rounded-full text-accent bg-primary shadow pl-6 placeholder:text-[#6B6F78]' value={password} onChange={(e) => {
                  setPassword(e.target.value)
                }} placeholder='Enter the password' type="password" name="password"/>
              </div>
              <h1 className='text-accent font-light text-center'>Name: guest, Password: Guest</h1>
            </div>

            <button onClick={() => {handleClick(name, password)}} className='h-[3rem] w-[10rem] rounded-full bg-accent text-primary font-bold text-[1.25rem]'>LogIn</button>
          </div>
        </div>
      )}

    </main>
  )
}

export default LogIn