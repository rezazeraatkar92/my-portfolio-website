import React from "react";
import Link from "next/link";
import { ImNewTab } from "react-icons/im";

// interface IblogLinkProps {}

export default function BlogLink() {
  return (
    <Link
      href='/blog'
      target='_blank'
      className='group fixed right-3 top-0 z-[950] flex h-[4.5rem] w-16
                          items-center justify-center gap-1 rounded-none 
                          border border-white border-opacity-40 bg-white 
                          bg-opacity-80 leading-4 shadow-lg 
                          shadow-black/[0.03] backdrop-blur-[0.5rem]
                          dark:border-black/40 dark:bg-gray-950 dark:bg-opacity-75 
                          sm:top-6 sm:h-[3.25rem] sm:rounded-full'
    >
      blog
      <ImNewTab className='opacity-60 transition group-hover:-translate-y-1 group-hover:translate-x-1' />
    </Link>
  );
}
