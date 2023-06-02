import React, { useEffect, useState } from 'react'
import MovieCard from '../MovieCard/MovieCard';
import "./MovieList.css"

export default function MovieList() {
    const [movies, setMovies] = useState([])

    useEffect(() => {
        fetch('https://api.tvmaze.com/search/shows?q=all')
          .then(response => response.json())
          .then(data => {
            setMovies(data);
          })
          .catch(error => {
            console.error('Error:', error);
          });
      }, []);

    return (
        <div className='movie_list'>
            {console.log(movies)}
      {
        movies.map((movie,i)=>{
            return <MovieCard movie={movie} key={i} />
        })
      }
    </div>
    )
}
