import React from 'react';
import MovieData from '../data/MovieData.jsx';
import Movie from './Movie.jsx';

const MovieList = ({movies}) => {
  return (
    <ul>
      {movies.map(movie => (
        <Movie
          movie={movie}
          key={movie.title}
        />
      ))}
    </ul>
  )
};

export default MovieList;