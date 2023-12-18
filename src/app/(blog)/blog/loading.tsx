import Link from "next/link";
import React from "react";

export default function Loading() {
  return (
    <div className='m-auto flex items-center justify-center'>
      <h1>
        Loading{" "}
        <Link target='_blank' href='https://github.com/RezaZeraatkar'>
          Reza Zeraatkar
        </Link>{" "}
        Blog website...
      </h1>
    </div>
  );
}
