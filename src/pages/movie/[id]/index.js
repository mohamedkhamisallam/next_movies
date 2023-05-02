import axios from 'axios';
import Head from 'next/head';
import Image from 'next/image';
import React from 'react'

const movie = ({movie}) => {
    console.log(movie);
  return (
    
    <>
    <Head><title>{movie.title}</title></Head>
    <div className="container max-w-4xl mx-auto pt-1">
      <div className='px-2'>
      <Image className='p-2 mx-auto' src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`} width={500} height={500}/>
     <div className='bg-gray-200 p-5 m-5'>
     <h1 className='font-bold text-2xl my-2'>{movie.title}</h1>
      <p className=' text-sm m-4'>{movie.overview}</p>
        <p className='mt-5 text-grey-500 text-sm'>Genres : <span className='font-bold '>{movie.genres.map((ele)=>{
          return ele.name
        }).join(` , `)}</span></p>
        <div className='text-gray-600 text-sm '>Release Date : <span className='font-bold'>{movie.release_date}</span></div>
     </div>
      </div>
    </div>

    </>
  )
}
export async function getStaticProps(context){
    const{id}=context.params;
    const res=await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=9c6f638ac6e35dafb9502cbb9a9a8495&language=en-US&page=1`)
    const movie=res.data;
    return {
      props: {
        movie
    }
  }
  }
  export async function getStaticPaths(){
    const res=await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=9c6f638ac6e35dafb9502cbb9a9a8495&language=en-US&page=1`)
    const movies=res.data.results;
    const ids=movies.map((ele)=>{
        return ele.id;
    })
    const paths=ids.map((ele)=>{
        return ({params:{id:ele.toString()}})
    })
    
    return {
      paths,
      fallback:false
  }
  }
  

export default movie