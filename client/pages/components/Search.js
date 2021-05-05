import React from 'react';

export default function Search() {
  return (
    <div className="flex justify-center my-12">
      <input
        type="text"
        className="block w-8/12 h-12 pr-12 text-white bg-gray-700 border-gray-600 rounded-md focus:ring-indigo-500 focus:border-indigo-500 pl-7 sm:text-sm"
        placeholder="Search a movie"
      />
    </div>
  );
}
