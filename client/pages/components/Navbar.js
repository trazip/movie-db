import React from 'react';

export default function Navbar() {
  return (
    <>
      <nav className="bg-gray-800">
        <div className="flex items-center justify-between h-16 mx-8 -inset-x-0">
          <div>
            <h1 className="font-extrabold text-white">Trackt</h1>
          </div>
          {/* <div className="flex w-1/3 justify-evenly">
            <a
              href="#"
              className="font-light text-white opacity-60 hover:opacity-100"
            >
              Home
            </a>
            <a
              href="#"
              className="font-light text-white opacity-60 hover:opacity-100"
            >
              Movies
            </a>
            <a
              href="#"
              className="font-light text-white opacity-60 hover:opacity-100"
            >
              TV Shows
            </a>
            <a
              href="#"
              className="font-light text-white opacity-60 hover:opacity-100"
            >
              Upcoming
            </a>
          </div> */}
          <div className="flex space-x-6">
            <a className="flex items-center font-medium text-white">Login</a>
            <a className="flex items-center h-10 px-6 py-4 font-medium text-white bg-indigo-600 rounded-full">
              Signup
            </a>
          </div>
        </div>
      </nav>
    </>
  );
}
