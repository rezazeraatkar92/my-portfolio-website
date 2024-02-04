import formatDate from "@/lib/formatDate";
import { getPost, getPosts } from "@/lib/posts";
import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import React from "react";

interface IPostProps {
  params: { id: string };
}

export async function generateStaticParams() {
  const posts = await getPosts();

  return posts.map((post) => ({
    id: post.id,
  }));
}

export async function generateMetadata({ params: { id } }: IPostProps) {
  const post = await getPost(id);
  if (post.code === 404) {
    return {
      title: "Post Not Found",
    } as Metadata;
  }
  return {
    title: post.data?.title,
  } as Metadata;
}

export default async function Post({ params: { id } }: IPostProps) {
  const post = await getPost(id);

  if (post.code === 404) {
    notFound();
  }

  if (!post.data) {
    return <div>No Post available</div>;
  }

  const { title, contentHtml, date } = post.data;
  const pubDate = formatDate(date);

  return (
    <main className='prose prose-xl prose-slate mx-auto px-6 dark:prose-invert'>
      <h1 className='mb-0 mt-4 text-3xl'>{title}</h1>
      <p className='mt-0'>{pubDate}</p>
      <article>
        <section dangerouslySetInnerHTML={{ __html: contentHtml }}></section>
        <p>
          <Link href={"/blog"}>Back to Blog page</Link>
        </p>
      </article>
    </main>
  );
}
