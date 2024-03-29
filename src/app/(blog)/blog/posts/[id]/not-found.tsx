import React from "react";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className='flex justify-center text-center'>
      <div>
        <h2>Not Found</h2>
        <p>Sorry, Could not find requested resource</p>
        <p>
          back to
          <Link href='/blog' className='text-blue-600 underline'>
            Blog Page
          </Link>
        </p>
      </div>
    </div>
  );
}
