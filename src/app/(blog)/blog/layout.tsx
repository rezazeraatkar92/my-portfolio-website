import React, { ReactNode } from "react";

interface IBlogLayoutProps {
  children: ReactNode;
}

export default function BlogLayout({ children }: IBlogLayoutProps) {
  return <div className='max-w-4xl'>{children}</div>;
}
