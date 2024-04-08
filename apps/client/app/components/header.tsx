import Image from "next/image";
import Link from "next/link";

export const Header = () => {
  return (
    <header className="flex w-full items-center justify-between border-b-2 border-gray-200 bg-white p-2 fixed">
      <div className="flex items-center space-x-2">
        <button type="button" className="text-3xl">
          <i className="bx bx-menu"></i>
        </button>
        <Link href="/" className="font-bold text-gray-700 text-2xl">
          Shop.
        </Link>
      </div>

      <div className="flex items-center space-x-4">
        <div className="relative hidden md:block">
          <input
            type="search"
            className="pl-10 pr-2 h-10 py-1 rounded-lg border border-gray-200 focus:border-gray-300 focus:outline-none focus:shadow-inner leading-none"
            placeholder="Search"
          />
          <svg
            className="h-6 w-6 text-gray-300 ml-2 mt-2 stroke-current absolute top-0 left-0"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>

        <a
          href="#"
          className="flex h-10 items-center px-2 rounded-lg border border-gray-200 hover:border-gray-300 focus:outline-none hover:shadow-inner"
        >
          <svg
            className="h-6 w-6 leading-none text-gray-300 stroke-current"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
            />
          </svg>
          <span className="pl-1 text-gray-500 text-md">0</span>
        </a>

        <Link href={"/profile"}>
          <button
            type="button"
            className="hidden md:block w-10 h-10 rounded-lg bg-gray-100 border border-gray-200 flex justify-center items-center"
          >
            <img
              src="https://avatars.dicebear.com/api/bottts/2.svg"
              alt="button"
              width="28"
              height="28"
              className="rounded-lg mx-auto"
            />
          </button>
        </Link>
      </div>
    </header>
  );
};
