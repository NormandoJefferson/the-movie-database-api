import { useEffect, useState} from 'react';
import { useParams, Link } from 'react-router-dom'
import { Movie } from '../../types/movie';
import { API_KEY } from '../../utils/Api_key';

import './styles.css'

type UrlParams = {
    id: string
}

function Details() {

    let {id} = useParams<UrlParams>()
  
    const image_path = 'https://image.tmdb.org/t/p/w500'

    const [movie, setMovie] = useState<Movie>()
    
    useEffect(() => {
    
        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=en-US&page=1`)
          .then(response => response.json())
          .then(data => setMovie(data)
          )
      }, [id])

    return (

        <div className='container'>
            <div className='movie'>
                <img src={`${image_path}${movie?.poster_path}`} alt={movie?.title} />
                <div className='details'>
                    <h1>{movie?.title}</h1>
                    <span className='sinopse'>{movie?.overview}</span>
                    <span className='release-date'>Release date: {movie?.release_date}</span>
                    <Link to='/'>
                        <button>Go back</button>
                    </Link>
                    
                </div>
            </div>
        </div>

    )
}

export default Details
