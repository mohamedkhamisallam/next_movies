import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <>
    <div className='container mx-auto fluid'>
    <nav className='bg-gray-700 font-try '>
      <div className='font-bold text-neutral-100 max-w-7xl mx-auto container tracking-widest my-2 '>

        <Link href={"/"}  >
        <div className='text-base md:text-2xl ml-8'>watch<span className='text-red-600'>me</span></div>
        </Link>
      </div>
    </nav>
    </div>
    
    </>
  )
}

export default Navbar