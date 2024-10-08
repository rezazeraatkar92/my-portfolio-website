import Posts from "@/components/posts";
import React from "react";

interface IPageProps {}

// export const revalidate = 86400;

export default function Blog() {
  return (
    <div className='mx-auto'>
      <p className='prose prose-xl mb-4 mt-4 text-center text-3xl dark:text-white'>
        Hello and Welcome 👋
        <br />
        <span className='whitespace-nowrap'>
          I'm <span className='font-bold'>Reza Zeraatkar</span>
        </span>
        <br />
      </p>
      <p className='text-center'>
        Here I will share my knowledge and experiences as a Front-End Web
        Developer through some blog posts.
      </p>
      <Posts />
    </div>
  );
}
