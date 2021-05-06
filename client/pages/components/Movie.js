import React from 'react';
import Router, { useRouter } from 'next/router';

export default function Movie({ hit }) {
  const router = useRouter();

  const handleClick = (imdbID) => {
    router.push(`https://www.imdb.com/title/${imdbID}/`);
  };

  const handleDelete = async (id) => {
    await fetch(`http://localhost:3000/api/v1/movies/${id}`, {
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'DELETE',
    });

    Router.reload(window.location.pathname);
  };

  return (
    <div>
      <div
        onClick={() => handleDelete(hit.objectID)}
        className="absolute text-red-500 transform translate-x-32 translate-y-2 fill-current"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6 cursor-pointer"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
          />
        </svg>
      </div>
      <img
        onClick={() => handleClick(hit.imdbID)}
        title={hit.title}
        src={hit.image}
        alt="movie poster"
        className="cursor-pointer"
        style={{ width: 154, height: 231 }}
      />
    </div>
  );
}
