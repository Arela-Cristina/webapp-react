import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ReviewCard from '../../components/ReviewCard';
import axios from 'axios';
import StarsRating from '../../components/StarsRating';
import FormReview from '../../components/FormReview';

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
        <FormReview id={id} onSucces={fetchMovie} />
      </section>
      {/* form per nuova recensione */}
    </> :
      <div>Loading...</div>
  )
}

export default MoviePage;