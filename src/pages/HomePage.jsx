import { useContext, useEffect, useState } from 'react';
import loaderContext from '../context/LoaderContext';
import MovieCard from '../components/MovieCard';
import axios from 'axios';

function HomePage() {

  const {setLoading} = useContext(loaderContext)

  const [movies, setMovies] = useState([])
  const [search, setSearch] = useState('')

  function fetchMovies() {

    setLoading(true)

    axios.get('http://localhost:3000/api/movies',{
      params: {
        search: search
      }
    })
      .then(response => {
        // console.log(response)
        setMovies(response.data)
      })
      .catch(err => {
        console.error(err)
      })
      .finally(() => {
        setLoading(false)
      })
  }

  function searchMovies(e) {
    e.preventDefault()

   fetchMovies()
  }

  useEffect(() => {
   fetchMovies()
  },[])

  return <>
    <section>
      <div className="container py-6 flex justify-between items-end">
        <div>
          <h1 className='text-blue-950 font-bold text-3xl'>Bool Movies</h1>
          <h2 className='text-lg'>Movies... </h2>
        </div>
        <form onSubmit={searchMovies} className='flex gap-3'>
          <input className='border rounded-lg py-2 px-3' type="text" placeholder='Cerca libro' value={search} onChange={(e) => setSearch(e.target.value ) } />
          <button className='rounded-lg py-2 px-3 bg-blue-950 active:bg-blue-700 hover:bg-blue-800 text-white'>cerca</button>
        </form>
      </div>
    </section>
    <section>
      {movies.length ? <ul className="container grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-10">
        {
          movies.map(movie => {
            return <li key={movie.id}>
               <MovieCard movie={movie}></MovieCard>
            </li>
          })
        }
      </ul> : 
      <div className='italic text-center text-gray-500'>
        Nessun risultato
      </div>
      }
    </section>
  </>
}

export default HomePage;