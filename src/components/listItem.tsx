import formatDate from "@/lib/formatDate";
import Link from "next/link";
import React from "react";

interface IListItemProps {
  post: BlogPost;
}

export default function ListItem({ post }: IListItemProps) {
  const { id, title, date } = post;
  const formattedDate = formatDate(date);

  return (
    <li className='mt-4 text-2xl dark:text-white/90'>
      <Link
        className='underline hover:text-black/70 dark:hover:text-white'
        href={`/blog/posts/${id}`}
      >
        {title}
      </Link>
      <br />
      <p className='mt-1 text-sm'>{formattedDate}</p>
    </li>
  );
}
