"use client";

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
    <div>
      <h1>Something went wrong on portfolio page!</h1>
      <button onClick={() => reset()}>Try again.</button>
    </div>
  );
}
