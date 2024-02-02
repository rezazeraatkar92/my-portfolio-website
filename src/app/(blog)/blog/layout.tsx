import Navbar from "@/components/navbar";
import React, { ReactNode } from "react";

export const metadata = {
  title: "Reza Zeraatkar Blog",
  description:
    "Here I will share my knowledge and experences on nextjs/reactjs Front-End Web Developement",
};

interface IBlogLayoutProps {
  children: ReactNode;
}

export default function BlogLayout({ children }: IBlogLayoutProps) {
  return (
    <div>
      <Navbar />
      {children}
    </div>
  );
}
