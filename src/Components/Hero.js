import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Hero  () {
  return (
    


    
<div className="text-center bg-blue-200 p-10">
    
    
    <div className='w-60 mx-auto'>
<Image src={"/undraw_home_cinema.png"} width={200} height={200}  />
    </div>
    <h1 className="text-2xl text-green-900 uppercase font-bold">welcome to watch me..</h1>
    
    <p className="text-danger   text-blue-900 text-2xl">product FILM feature , TELEVISION , ana GAME </p>
    <Link href={"/contact"}> 
       <button className='bg-gray-700 text-white p-5 rounded text-sm mt-4'>Contact Us..</button>
      </Link>
    </div>    
    
  ) 
}

