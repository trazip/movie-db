import React from 'react';
import Image from 'next/image';

export default function HeroSection() {
  return (
    <>
      <div className="relative flex justify-center mt-8">
        <Image
          src="/got.jpeg"
          alt="game of thrones poster"
          width={1300}
          height={400}
          objectFit="cover"
          quality={100}
          className="rounded-lg shadow"
        />
      </div>
    </>
  );
}
