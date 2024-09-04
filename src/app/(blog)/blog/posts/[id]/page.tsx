import React from "react";
import formatDate from "@/lib/formatDate";
import { getPostByName, getPostsMetaData } from "@/lib/posts";
import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import "highlight.js/styles/github-dark.css";

// export const revalidate = 86400;

interface IPostProps {
  params: { id: string };
}

export async function generateStaticParams() {
  const posts = await getPostsMetaData();

  if (!posts) {
    return [];
  }

  return posts.map((post) => ({
    id: post.id,
  }));
}

export async function generateMetadata({ params: { id } }: IPostProps) {
  const post = await getPostByName(`${id}.mdx`);
  if (!post) {
    return {
      title: "Post Not Found",
    } as Metadata;
  }
  return {
    title: post.meta.title,
  } as Metadata;
}

export default async function Post({ params: { id } }: IPostProps) {
  const post = await getPostByName(`${id}.mdx`);

  if (!post) {
    notFound();
  }

  const { meta, content } = post;
  const pubDate = formatDate(meta.date);

  const tags = meta.tags.map((tag, i) => (
    <Link key={i} href={`/blog/tags/${tag}`}>
      {tag}
    </Link>
  ));

  return (
    <>
      <h2 className='mb-0 mt-4 text-3xl'>{meta.title}</h2>
      <p className='mt-0 text-sm'>{pubDate}</p>
      <article>{content}</article>
      <section>
        <h3>Related:</h3>
        <div className='flex flex-grow gap-4'>{tags}</div>
      </section>
      <p>
        <Link href={"/blog"}>Back to Blog page</Link>
      </p>
    </>
  );
}
