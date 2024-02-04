import React, { ReactNode } from "react";

interface ICardProps {
  children: ReactNode;
}

export default function Card({ children }: ICardProps) {
  return (
    <div className='w-full rounded-md bg-white shadow-md dark:bg-gray-800 dark:text-gray-200'>
      {children}
    </div>
  );
}
