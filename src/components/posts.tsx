import { getPosts } from "@/lib/posts";
import ListItem from "./listItem";

interface IpostsProps {}

export default async function Posts() {
  const posts = await getPosts();

  return (
    <section className='mx-auto mt-6 max-w-2xl'>
      <h2 className='text-4xl font-bold dark:text-white/90'>Blog</h2>
      <ul className='w-full'>
        {posts.map((post) => (
          <ListItem key={post.id} post={post} />
        ))}
      </ul>
    </section>
  );
}
