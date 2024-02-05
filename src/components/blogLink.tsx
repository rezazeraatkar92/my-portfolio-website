import React from "react";
import Link from "next/link";
import { ImNewTab } from "react-icons/im";

// interface IblogLinkProps {}

export default function BlogLink() {
  return (
    <Link
      href='/blog'
      target='_blank'
      className='group fixed right-3 flex items-center justify-center gap-1 whitespace-nowrap rounded-full
                          border border-white border-opacity-40
                          bg-gray-900 p-1 leading-4 text-white 
                          shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] 
                          dark:border-black/40
                          dark:bg-orange-700 dark:bg-opacity-75 dark:text-gray-300 
                          max-sm:left-1/2 max-sm:top-10 max-sm:-translate-x-1/2 sm:relative sm:py-3'
    >
      My blog
      <ImNewTab className='opacity-60 transition group-hover:-translate-y-1 group-hover:translate-x-1' />
    </Link>
  );
}
