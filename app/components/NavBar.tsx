import React from 'react'
import Image from 'next/image'
import Shop from '../assets/Shop.svg'
import Shopping from '../assets/Shopping.svg'
import User from '../assets/User.svg'
import { useUserStore } from '../store/store';

const NavBar = () => {
  const { login, setLogin } = useUserStore() as { login: boolean, setLogin: (login: boolean) => void }
  return (
    <div className='flex justify-between px-[3.75rem] bg-primary w-[screen] h-[9.5rem] sticky top-0 shadow'>
      <div className='flex items-center gap-[0.5rem]'>
        <Image className='w-[2rem] h-[2rem]' src={Shop} alt='shop'/>
        <h1 className='text-accent font-extrabold text-[1.938rem]'>ShopNest</h1>
      </div>
      <div className='flex items-center gap-[6rem]'>
        <Image className='w-[2rem] h-[2rem]' src={Shopping} alt='cart'></Image>
        <button onClick={() => {setLogin(true)}}>
          <Image className='w-[2rem] h-[2rem]' src={User} alt='user'></Image>
        </button>
      </div>

    </div>
  )
}

export default NavBar