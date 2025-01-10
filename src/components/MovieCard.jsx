import { Link } from 'react-router-dom'
import StarsRating from './StarsRating';

function MovieCard({ movie }) {

  const { id, title, director, image, abstract, avg_vote } = movie;

  // console.log('id movie', id)

  return (
    <article className='relative border h-full'>
      <img src={image} alt="" className='w-full rounded-lg' />
      <div className='p-4 absolute bottom-0 w-full rounded-b-lg bg-blue-950/90 text-white'>
        <h3 className='font-bold text-sm'>
          {title}
        </h3>
        <p className='italic text-xs'>
          {director}
        </p>
        <p className='text-xs text-gray-200 my-4'>
          {abstract}
        </p>
        <div>
          <StarsRating className='size-4 pb-2' vote={avg_vote} />
        </div>
        <Link className='bg-blue-500 hover:bg-blue-600 text-white px-3 text-xs py-2 rounded-md inline-block' to={`movies/${id}`}>Read more</Link>
      </div>
    </article>
  )
}

export default MovieCard;