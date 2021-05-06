import React from 'react';

export default function Navbar() {
  return (
    <>
      <nav className="bg-gray-800">
        <div className="flex items-center justify-between h-16 mx-8 -inset-x-0">
          <div>
            <h1 className="font-extrabold text-white">Trackt</h1>
          </div>
          <div className="flex space-x-6">
            <a className="flex items-center h-10 px-6 py-4 font-medium text-white bg-indigo-600 rounded-full">
              Add a new film
            </a>
          </div>
        </div>
      </nav>
    </>
  );
}
