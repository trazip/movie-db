import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Navbar() {
  const router = useRouter();
  const href = '/new';

  return (
    <>
      <nav className="bg-gray-800">
        <div className="flex items-center justify-between h-16 mx-8 -inset-x-0">
          <div>
            <Link href="/">
              <a className="font-extrabold text-white">Trackt</a>
            </Link>
          </div>

          <div
            className={`${
              router.pathname === href && 'hidden'
            } flex items-center h-10 px-6 py-4 font-medium text-white bg-indigo-600 rounded-full`}
          >
            <Link href={href}>
              <a>Add a new film</a>
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
}
