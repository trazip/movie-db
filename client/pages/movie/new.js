import React from 'react';

export default function Form() {
  const addFilm = async (event) => {
    event.preventDefault();

    const res = await fetch('http://localhost/', {
      body: JSON.stringify({
        name: event.target.name.value,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
    });

    const result = await res.json();
    // result.user => 'Ada Lovelace'
  };

  return (
    <form
      onSubmit={addFilm}
      className="flex flex-col items-center w-8/12 p-12 mx-auto bg-gray-700 border border-gray-600 rounded-lg justify-evenly h-3/4"
    >
      <div className="flex flex-col w-full">
        <label htmlFor="title" className="text-sm text-gray-200">
          Title
        </label>
        <input
          id="name"
          name="name"
          type="text"
          className="w-8/12 h-12 text-white bg-gray-800 rounded-lg focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 pl-7 sm:text-sm"
          autoComplete="off"
          required
        />
      </div>
      <div className="flex flex-col w-full">
        <label htmlFor="title" className="text-sm text-gray-200">
          Year
        </label>
        <input
          id="name"
          name="name"
          type="text"
          className="w-8/12 h-12 text-white bg-gray-800 rounded-lg focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 pl-7 sm:text-sm"
          autoComplete="off"
          required
        />
      </div>
      <div className="flex flex-col w-full">
        <label htmlFor="title" className="text-sm text-gray-200">
          Image Url
        </label>
        <input
          id="name"
          name="name"
          type="text"
          className="w-8/12 h-12 text-white bg-gray-800 rounded-lg focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 pl-7 sm:text-sm"
          autoComplete="off"
          required
        />
      </div>
      <button
        type="submit"
        className="flex items-center self-end h-10 px-6 py-4 font-medium text-white bg-indigo-600 rounded-lg"
      >
        Add Film
      </button>
    </form>
  );
}
