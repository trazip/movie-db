import React from 'react';
import Movie from './Movie';

function MoviesList({ movies }) {
  return (
    <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-8 gap-x-1 gap-y-4">
      {movies.map((movie) => (
        <div className="flex justify-center">
          <Movie movie={movie} />
        </div>
      ))}
    </div>
  );
}

export default MoviesList;
