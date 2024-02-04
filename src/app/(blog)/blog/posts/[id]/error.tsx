"use client";

import Link from "next/link";
import React, { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);
  return (
    <main className='mx-auto min-h-screen max-w-lg bg-slate-200 px-4 py-1'>
      <h1 className='my-4 text-2xl font-bold dark:text-slate-900'>
        Something went wrong on post page!
      </h1>
      <button
        className='mb-4 rounded-xl bg-red-500 p-4 text-white'
        onClick={() => reset()}
      >
        Try again.
      </button>
      <p className='text-xl dark:text-slate-900'>
        Or go back to{" "}
        <Link href='/blog' className='underline dark:text-blue-900'>
          Blog page
        </Link>
        😊
      </p>
    </main>
  );
}
