import React from 'react';

export default function Movie({ hit }) {
  return (
    <a href={`https://www.imdb.com/title/${hit.imdbID}/`}>
      <img
        src={hit.image}
        alt="movie poster"
        style={{ width: 154, height: 231 }}
      />
    </a>
  );
}
