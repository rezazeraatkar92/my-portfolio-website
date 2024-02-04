import ListItem from "@/components/listItem";
import { getPostsMetaData } from "@/lib/posts";
import { Metadata } from "next";
import Link from "next/link";

export const revalidate = 86400;

interface Props {
  params: {
    tag: string;
  };
}

export async function generateStaticParams() {
  const posts = await getPostsMetaData();

  if (!posts) {
    return [];
  }

  const tags = new Set(posts.map((post) => post.tags).flat());

  return Array.from(tags).map((tag) => {
    tag;
  });
}

export async function generateMetadata({ params: { tag } }: Props) {
  return {
    title: `Posts about ${tag}`,
  } as Metadata;
}

export default async function TagPostList({ params: { tag } }: Props) {
  const posts = await getPostsMetaData();

  if (!posts) {
    return (
      <p className='mt-10 text-center'>
        Sorry, no posts available for now but I will create amazing posts in a
        near future
      </p>
    );
  }

  const tagPosts = posts.filter((post) => post.tags.includes(tag));

  if (!tagPosts.length) {
    return (
      <div className='text-center'>
        <p className='mt-10'>Sorry! No Posts for tag {tag}.</p>
        <Link href='/blog' className='text-blue-600 underline'>
          Back to blog home page
        </Link>
      </div>
    );
  }

  return (
    <>
      <h2 className='mb-0 mt-4 text-center text-3xl'>Results for: #{tag}</h2>
      <section className='mx-auto mt-6 max-w-2xl'>
        <ul className='w-full list-none p-0'>
          {tagPosts.map((post) => (
            <ListItem key={post.id} post={post} />
          ))}
        </ul>
      </section>
    </>
  );
}
