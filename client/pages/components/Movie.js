import React from 'react';
import Image from 'next/image';

export default function Movie({ movie }) {
  return (
    <a href={`https://www.imdb.com/title/${movie.imdbID}/`}>
      <img
        src={movie.image}
        alt="movie poster"
        style={{ width: 154, height: 231 }}
      />
    </a>
  );
}
