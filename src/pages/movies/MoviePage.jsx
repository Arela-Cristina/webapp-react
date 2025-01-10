import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ReviewCard from '../../components/ReviewCard';
import axios from 'axios';
import StarsRating from '../../components/StarsRating';

function MoviePage() {

  // recuperare l'id del libro dal path della rotta
  const [movie, setMovie] = useState(null)

  const { id } = useParams()


  function fetchMovie() {
    axios.get(`http://localhost:3000/api/movies/${id}`)
      .then(res => {
        setMovie(res.data)
      })
      .catch(err => {
        console.error(err)
        // qui dovremmo fare un redirect alla pagina 404
      })
  }

  useEffect(() => {
    fetchMovie()
  }, [id])

  return (
    movie ? <>
      <section>
        <div className="container flex gap-6 items-start py-3 my-3 border-b">
          <div>
            <img className='w-[100px]' src={`http://localhost:3000/${movie.image}`} alt="" />
          </div>
          <div>
            <h1 className='text-3xl font-bold'>{movie.title}</h1>
            <div className='text-lg text-gray-600 italic font-bold'>
              {movie.director}
            </div>
            <p className='text-sm'>
              {movie.abstract}
            </p>
          </div>
          {/* media valutazioni con stelline */}
        </div>
      </section>
      <section>
        <div className="container flex justify-between items-center gap-4 mb-4">
          <h2 className='font-bold text-lg'>Tutte le recensioni</h2>
          <div className='flex gap-3 items-center'>
            <strong className='text-sm'>Media:</strong> <StarsRating vote={movie.avg_vote} />
          </div>
        </div>
        {movie.reviews.length ?
          <ul className="container flex gap-6 flex-col">
            {movie.reviews.map(review => (
              <ReviewCard review={review} key={review.id} />
            ))}
          </ul> :
          <div>Nessuna recensione</div>
        }
        <div className="container border my-6 rounded-lg">
          <div className='border rounded-lg'>
            <div className=' bg-gray-200 px-4 py-2'>
              <strong>
                Aggiungi recensione
              </strong>
            </div>
          </div>
          <div className='p-4'>
            <form className='flex flex-col gap-3'>
              <p className='form-control'>
                <label htmlFor="name">Nome</label>
                <input type="text" placeholder='Anonymous' name='name' id='name' />
              </p>
              <p className='form-control'>
                <label htmlFor="text">Recensione</label>
                <textarea rows="4" name="text" id="text" placeholder='Scrivi la tua recensione'></textarea>
              </p>
              <p className='form-control'>
                <label htmlFor="vote">Voto</label>
                <select name="vote" id="vote">
                  <option value="1">1</option>
                  <option value="1">2</option>
                  <option value="1">3</option>
                  <option value="1">4</option>
                  <option value="1">5</option>
                </select>
              </p>
              <button className='self-end bg-blue-950 hover:bg-blue-800 text-white h-10 rounded-lg px-6'>Invia</button>
            </form>
          </div>
        </div>
      </section>
      {/* form per nuova recensione */}
    </> :
      <div>Loading...</div>
  )
}

export default MoviePage;