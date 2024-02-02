import { getPost } from "@/lib/posts";
import { notFound } from "next/navigation";
import React from "react";

interface IPostProps {
  params: { id: string };
}

export default async function Post({ params: { id } }: IPostProps) {
  const post = await getPost(id);

  if (post.code === 404) {
    notFound();
  }

  return (
    <div>
      {post.data?.contentHtml ? (
        <div>
          <h1>{post.data?.contentHtml}</h1>
        </div>
      ) : (
        <div>No post available</div>
      )}
    </div>
  );
}
