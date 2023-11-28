import Image from 'next/image'
import React from 'react'
import NavBar from './components/NavBar'
import Card from './components/Card'

export default function Home() {
  return (
    <>
      <NavBar />
      <main className='w-screen h-screen bg-primary px-[3.75rem] mt-[7.5rem]'>
        <div className='grid grid-cols-3 gap-[3.75rem]'>
          <Card ProductName='Keyboard' Description='This is a sentence about something important' Price={50} Thumbnail='https://images.unsplash.com/photo-1595044426077-d36d9236d54a?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGtleWJvYXJkfGVufDB8MHwwfHx8MA%3D%3D'/>
          <Card ProductName='Keyboard' Description='This is a sentence about something important' Price={50} Thumbnail='https://images.unsplash.com/photo-1595044426077-d36d9236d54a?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGtleWJvYXJkfGVufDB8MHwwfHx8MA%3D%3D'/>
          <Card ProductName='Keyboard' Description='This is a sentence about something important' Price={50} Thumbnail='https://images.unsplash.com/photo-1595044426077-d36d9236d54a?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGtleWJvYXJkfGVufDB8MHwwfHx8MA%3D%3D'/>
          <Card ProductName='Keyboard' Description='This is a sentence about something important' Price={50} Thumbnail='https://images.unsplash.com/photo-1595044426077-d36d9236d54a?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGtleWJvYXJkfGVufDB8MHwwfHx8MA%3D%3D'/>
          <Card ProductName='Keyboard' Description='This is a sentence about something important' Price={50} Thumbnail='https://images.unsplash.com/photo-1595044426077-d36d9236d54a?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGtleWJvYXJkfGVufDB8MHwwfHx8MA%3D%3D'/>
          <Card ProductName='Keyboard' Description='This is a sentence about something important' Price={50} Thumbnail='https://images.unsplash.com/photo-1595044426077-d36d9236d54a?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGtleWJvYXJkfGVufDB8MHwwfHx8MA%3D%3D'/>
          <Card ProductName='Keyboard' Description='This is a sentence about something important' Price={50} Thumbnail='https://images.unsplash.com/photo-1595044426077-d36d9236d54a?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGtleWJvYXJkfGVufDB8MHwwfHx8MA%3D%3D'/>
          <Card ProductName='Keyboard' Description='This is a sentence about something important' Price={50} Thumbnail='https://images.unsplash.com/photo-1595044426077-d36d9236d54a?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGtleWJvYXJkfGVufDB8MHwwfHx8MA%3D%3D'/>
          <Card ProductName='Keyboard' Description='This is a sentence about something important' Price={50} Thumbnail='https://images.unsplash.com/photo-1595044426077-d36d9236d54a?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGtleWJvYXJkfGVufDB8MHwwfHx8MA%3D%3D'/>
          <Card ProductName='Keyboard' Description='This is a sentence about something important' Price={50} Thumbnail='https://images.unsplash.com/photo-1595044426077-d36d9236d54a?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGtleWJvYXJkfGVufDB8MHwwfHx8MA%3D%3D'/>
          <Card ProductName='Keyboard' Description='This is a sentence about something important' Price={50} Thumbnail='https://images.unsplash.com/photo-1595044426077-d36d9236d54a?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGtleWJvYXJkfGVufDB8MHwwfHx8MA%3D%3D'/>
          <Card ProductName='Keyboard' Description='This is a sentence about something important' Price={50} Thumbnail='https://images.unsplash.com/photo-1595044426077-d36d9236d54a?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGtleWJvYXJkfGVufDB8MHwwfHx8MA%3D%3D'/>
        </div>
      </main>
    </>
  )
}
