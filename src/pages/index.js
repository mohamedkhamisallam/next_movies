
import Hero from '@/Components/Hero'
import PopularMovies from '@/Components/PopularMovies'
import axios from 'axios'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home({movies}) {
  console.log(movies);
  return (
  

    <div>
      

<Hero/> 
<PopularMovies  movies={movies.results} />
    </div>
  )
}



export async function getStaticProps(){
  const res=await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=9c6f638ac6e35dafb9502cbb9a9a8495&language=en-US&page=1`)
  const movies=res.data;
  return {
    props: {
      movies
  }
}
}








