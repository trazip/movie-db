import React from 'react';
import Image from 'next/image';

export default function Movie() {
  return (
    <div>
      <Image
        src="/gog.jpeg"
        alt="Picture of the author"
        width={154}
        height={231}
      />
    </div>
  );
}
