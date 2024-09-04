import Navbar from "@/components/navbar";
import { Metadata } from "next";
import React, { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Reza Zeraatkar Blog",
  description:
    "Here I will share my knowledge and experiences on nextjs/reactjs Front-End Web Development",
};

interface IBlogLayoutProps {
  children: ReactNode;
}

export default function BlogLayout({ children }: IBlogLayoutProps) {
  return (
    <div>
      <Navbar />
      <main className='prose prose-xl prose-slate mx-auto px-4 dark:prose-invert md:px-6'>
        {children}
      </main>
    </div>
  );
}
