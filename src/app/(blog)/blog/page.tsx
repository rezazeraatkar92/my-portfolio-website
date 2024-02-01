import React from "react";

interface IpageProps {}

export default function Blog() {
  return (
    <main className='mx-auto px-6'>
      <p className='prose prose-xl mb-4 mt-4 text-center text-3xl dark:text-white'>
        Hello and Welcome 👋
        <br />
        <span className='whitespace-nowrap'>
          I'm <span className='font-bold'>Reza Zeraatkar</span>
        </span>
        <br />
      </p>
      <p className='text-center'>
        Here I will share my knowledge and experences as a Front-End Web
        Developer through some blog posts.
      </p>
    </main>
  );
}
