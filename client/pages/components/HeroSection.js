import React from 'react';

export default function HeroSection() {
  return (
    <>
      <div className="relative flex justify-center w-10/12 mx-auto mt-8">
        <img
          src="/got.jpeg"
          alt="game of thrones poster"
          className="z-0 w-full rounded-lg shadow h-80"
          style={{ objectFit: 'cover' }}
        />
        <div className="absolute left-4 bottom-4">
          <h1 className="text-6xl font-bold text-white">Game of Thrones</h1>
          <p className="font-light text-white">
            Series based on fantasy novels by George R. R. Martin, where several
            noble families fight for control of the mythical land of Westeros.
          </p>
        </div>
      </div>
    </>
  );
}
