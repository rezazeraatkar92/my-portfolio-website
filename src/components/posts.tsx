import { getPostsMetaData } from "@/lib/posts";
import ListItem from "./listItem";

export default async function Posts() {
  const posts = await getPostsMetaData();

  if (!posts) {
    return (
      <p className='mt-10 text-center'>
        Sorry, no posts available for now but I will create amazing posts in a
        near future
      </p>
    );
  }

  return (
    <section className='mx-auto mt-6 max-w-2xl'>
      <h2 className='text-4xl font-bold dark:text-white/90'>Blog</h2>
      <ul className='w-full list-none p-0'>
        {posts.map((post) => (
          <ListItem key={post.id} post={post} />
        ))}
      </ul>
    </section>
  );
}
