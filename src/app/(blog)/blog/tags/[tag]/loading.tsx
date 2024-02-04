import Link from "next/link";
import React from "react";

export default function Loading() {
  return (
    <div
      role='status'
      className='mx-40 mt-10 animate-pulse justify-center gap-4 space-y-8 px-4 dark:prose-invert rtl:space-x-reverse md:flex-col md:items-center md:space-x-8 md:space-y-0 md:px-6'
    >
      <div className='w-full'>
        <div className='w-full'>
          <div className='mb-4 h-2.5 w-48 rounded-full bg-gray-200 dark:bg-gray-700'></div>
          <div className='mb-2.5 h-2 max-w-[480px] rounded-full bg-gray-200 dark:bg-gray-700'></div>
          <div className='mb-2.5 h-2 rounded-full bg-gray-200 dark:bg-gray-700'></div>
          <div className='mb-2.5 h-2 max-w-[440px] rounded-full bg-gray-200 dark:bg-gray-700'></div>
          <div className='mb-2.5 h-2 max-w-[460px] rounded-full bg-gray-200 dark:bg-gray-700'></div>
          <div className='h-2 max-w-[360px] rounded-full bg-gray-200 dark:bg-gray-700'></div>
        </div>
        <div className='w-full'>
          <div className='mb-4 h-2.5 w-48 rounded-full bg-gray-200 dark:bg-gray-700'></div>
          <div className='mb-2.5 h-2 max-w-[480px] rounded-full bg-gray-200 dark:bg-gray-700'></div>
          <div className='mb-2.5 h-2 rounded-full bg-gray-200 dark:bg-gray-700'></div>
          <div className='mb-2.5 h-2 max-w-[440px] rounded-full bg-gray-200 dark:bg-gray-700'></div>
          <div className='mb-2.5 h-2 max-w-[460px] rounded-full bg-gray-200 dark:bg-gray-700'></div>
          <div className='h-2 max-w-[360px] rounded-full bg-gray-200 dark:bg-gray-700'></div>
        </div>
        <span className='sr-only'>Loading...</span>
      </div>
    </div>
  );
}
