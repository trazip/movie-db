import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Form() {
  const router = useRouter();

  const addFilm = async (event) => {
    event.preventDefault();

    await fetch('http://localhost:3000/api/v1/movies', {
      body: JSON.stringify({
        title: event.target.title.value,
        year: event.target.year.value,
        image: event.target.image.value,
        imdbID: event.target.imdbID.value,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
    });

    router.push('/');
  };

  return (
    <div className="grid grid-cols-8 gap-2">
      <div className="col-span-4 col-start-3 mt-5">
        <form onSubmit={addFilm}>
          <div className="shadow sm:rounded-md sm:overflow-hidden">
            <div className="px-4 py-5 space-y-6 bg-gray-700 border border-gray-600 sm:p-6">
              <div className="grid grid-cols-6 gap-6">
                <div className="col-span-5">
                  <label
                    htmlFor="title"
                    className="block text-sm font-medium text-gray-200"
                  >
                    Title
                  </label>
                  <div className="flex mt-1 rounded-md shadow-sm">
                    <input
                      type="text"
                      name="title"
                      id="title"
                      autoComplete="off"
                      className="flex-1 block w-full h-12 text-white bg-gray-800 rounded-none rounded-md focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      placeholder="The Green Mile"
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-6 gap-6">
                <div className="col-span-4">
                  <label
                    htmlFor="ImdbID"
                    className="block text-sm font-medium text-gray-200"
                  >
                    Imdb ID
                  </label>
                  <div className="flex mt-1 rounded-md shadow-sm">
                    <input
                      type="text"
                      name="imdbID"
                      id="imdbID"
                      className="flex-1 block w-full h-12 text-white bg-gray-800 rounded-none rounded-md focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      placeholder="tt0120689"
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-6 gap-6">
                <div className="col-span-4">
                  <label
                    htmlFor="year"
                    className="block text-sm font-medium text-gray-200"
                  >
                    Release date
                  </label>
                  <div className="flex mt-1 rounded-md shadow-sm">
                    <input
                      type="text"
                      name="year"
                      id="year"
                      className="flex-1 block w-full h-12 text-white bg-gray-800 rounded-none rounded-md focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      placeholder="December 10, 1999"
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-6">
                <div className="col-span-3">
                  <label
                    htmlFor="image"
                    className="block text-sm font-medium text-gray-200"
                  >
                    Cover picture
                  </label>
                  <div className="flex mt-1 rounded-md shadow-sm">
                    <input
                      type="text"
                      name="image"
                      id="image"
                      className="flex-1 block w-full h-12 text-white bg-gray-800 rounded-none rounded-md focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      placeholder="https://www.themoviedb.org/t/p/w440_and_h660_face/yQx12qEP0HZDOPcwVE4FR4ma12.jpg"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-end px-4 py-3 space-x-2 text-right bg-gray-700 sm:px-6">
              <div>
                <Link href="/">
                  <a className="inline-flex justify-center px-4 py-2 text-sm font-medium text-white border border-transparent rounded-md shadow-sm opacity-70 hover:opacity-100 focus:outline-none">
                    Cancel
                  </a>
                </Link>
              </div>
              <button
                type="submit"
                className="inline-flex justify-center px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Save
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
