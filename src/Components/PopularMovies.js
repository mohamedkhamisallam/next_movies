import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const PopularMovies = ({movies}) => {
  return (
    <>
    <div className='bg-gray-700 container max-w7xl ma-auto pb-10 px-4'>
        <div className=''>
        <h1 className='text-white text-2xl mt-8 mb-5'>what is popular</h1>

<div className='grid   sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5'>
{movies.map((ele,index)=>{
     return (
         
        <Link href={`/movie/${ele.id}`}>
         <div className="bg-white shadow-sm rounded-md cursor-pointer m-4 h-96" >
         
         <Image className='p-5 mx-auto' src={`https://image.tmdb.org/t/p/w500${ele.poster_path}`} width={900} height={500}/>
         <div className='px-6 py-2'>
             <div className='font-bold text-xl mb-1'>{ele.title}</div>
             <p className='text-gray-700 text-base mb-1'>{ele.release_date}</p>
         </div>
         
         </div>
        </Link>
         
     )
 })}
</div>
        </div>
    </div>
    </>
  )
}

export default PopularMovies