"use client"; // Error components must be Client Components

import Link from "next/link";

export default function Error() {
  return (
    <div className="h-screen w-screen bg-gray-100 flex items-center">
      <div className="container flex flex-col md:flex-row items-center justify-center px-5 text-gray-700">
        <div className="max-w-md">
          <div className="text-5xl font-dark font-bold">
            Uppsss...
            <strong> 500 </strong>
          </div>
          <br />
          <br />
          <p className="text-2xl md:text-3xl font-light leading-normal">
            <strong>Server Error</strong>
          </p>
          <br />
          <br />

          <p className="mb-8">
            Please, contact support <strong>Thanks!</strong>
            <br />
          </p>

          <Link
            href="/"
            className="px-4 inline py-2 text-sm font-medium leading-5 shadow text-white transition-colors duration-150 border border-transparent rounded-lg focus:outline-none focus:shadow-outline-blue bg-red-600 active:bg-red-600 hover:bg-blue-500 pointer"
          >
            Reload
          </Link>
        </div>
        <div className="max-w-lg"></div>
      </div>
    </div>
  );
}
