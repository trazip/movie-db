import React from 'react';
import Movie from './Movie';

function MoviesList({ movies }) {
  return (
    <div className="grid grid-cols-8 gap-1">
      {movies.map((movie) => (
        <div className="flex justify-center">
          <Movie />
        </div>
      ))}
    </div>
  );
}

export default MoviesList;
