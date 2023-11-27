import Image from 'next/image'
import React from 'react'
import NavBar from './components/NavBar'
import Card from './components/Card'

export default function Home() {
  return (
    <>
      <NavBar />
      <main className='w-screen h-screen bg-primary px-[3.75rem] mt-[7.5rem]'>
        <div className='flex flex-col gap-[3.75rem]'>

          <div className='flex justify-between'>
            <Card ProductName='Keyboard' Description='This is a sentence about something important' Price='$50'/>
            <Card ProductName='Keyboard' Description='This is a sentence about something important' Price='$50'/>
            <Card ProductName='Keyboard' Description='This is a sentence about something important' Price='$50'/>
            <Card ProductName='Keyboard' Description='This is a sentence about something important' Price='$50'/>
          </div>
          <div className='flex justify-between'>
            <Card ProductName='Keyboard' Description='This is a sentence about something important' Price='$50'/>
            <Card ProductName='Keyboard' Description='This is a sentence about something important' Price='$50'/>
            <Card ProductName='Keyboard' Description='This is a sentence about something important' Price='$50'/>
            <Card ProductName='Keyboard' Description='This is a sentence about something important' Price='$50'/>
          </div>
          <div className='flex justify-between'>
            <Card ProductName='Keyboard' Description='This is a sentence about something important' Price='$50'/>
            <Card ProductName='Keyboard' Description='This is a sentence about something important' Price='$50'/>
            <Card ProductName='Keyboard' Description='This is a sentence about something important' Price='$50'/>
            <Card ProductName='Keyboard' Description='This is a sentence about something important' Price='$50'/>
          </div>
        </div>
      </main>
    </>
  )
}
