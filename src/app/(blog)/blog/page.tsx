import React from "react";

interface IpageProps {}

export default function Blog() {
  return (
    <main className='mx-auto px-6'>
      <p className='mb-12 mt-12 text-center text-3xl dark:text-white'>
        Hello and Welcome &nbsp;
        <span className='whitespace-nowrap'>
          I'm <span className='font-bold'>Reza</span>
        </span>
      </p>
    </main>
  );
}
