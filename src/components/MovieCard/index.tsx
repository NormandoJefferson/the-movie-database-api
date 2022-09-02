import { Link } from 'react-router-dom'
import { Movie } from '../../types/movie'

import './styles.css'


type Props = {
    mov: Movie
}


function MovieCard({mov} : Props) {

    const image_path = 'https://image.tmdb.org/t/p/w500'
    
    return (

        <ul className='card-container'>
            <li className='card-element'>
                <Link to={`/details/${mov.id}`}>
                    <img src={`${image_path}${mov.poster_path}`}alt={mov.title} />
                </Link>
                
                <span >{mov.title}</span>
            </li>
        </ul>

    )
}

export default MovieCard