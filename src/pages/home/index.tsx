import { useEffect, useState } from 'react';
import MovieCard from '../../components/MovieCard';
import { Movie } from '../../types/movie';
import { API_KEY } from '../../utils/Api_key';
import './styles.css'

function Home() {

  const [movies, setMovies] = useState<Movie[]>([])



  useEffect(() => {
    
    fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`)
      .then(response => response.json())
      .then(data => setMovies(data.results)
      )
  }, [])

    return (
      <div>
        <h1 className="home-title">Movies</h1>
        <div className='home-cards'>
          {
            movies.map(movie => {
              return (
                  <MovieCard key={movie.id} mov={movie}/>
              )
            })
          }
        </div>
        
      </div>
    );
  }
  
  export default Home
  