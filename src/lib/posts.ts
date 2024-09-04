"use server";

import { compileMDX } from "next-mdx-remote/rsc";
import rehypeAutoLinkHeadings from "rehype-autolink-headings";
import rehypeHighlight from "rehype-highlight";
import rehypeSlug from "rehype-slug";
import Video from "@/components/Video";
import CustomImage from "@/components/CustomImage";

type FileTree = {
  tree: [
    {
      path: string;
    },
  ];
};

export async function getPostByName(
  fileName: string
): Promise<BlogPost | undefined> {
  const res = await fetch(
    `https://raw.githubusercontent.com/RezaZeraatkar/my-blog-posts/main/${fileName}`,
    {
      headers: {
        Accept: "application/vnd.github+json",
        Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
        "X-GitHub-Api-Version": "2022-11-28",
      },
    }
  );
  if (!res.ok) {
    console.error(res);
    return undefined;
  }

  const rawMDX = await res.text();
  if (rawMDX === "404: Not Found") return undefined;

  const { frontmatter, content } = await compileMDX<
    Omit<PostMeta, "description">
  >({
    source: rawMDX,
    components: {
      Video,
      CustomImage,
    },
    options: {
      parseFrontmatter: true,
      mdxOptions: {
        rehypePlugins: [
          // @ts-ignore
          rehypeHighlight,
          rehypeSlug,
          [
            rehypeAutoLinkHeadings,
            {
              behavior: "wrap",
            },
          ],
        ],
      },
    },
  });

  const id = fileName.replace(/\.mdx$/, "");

  const blogPostObj: BlogPost = {
    meta: {
      id,
      title: frontmatter.title,
      date: frontmatter.date,
      tags: frontmatter.tags,
    },
    content,
  };
  return blogPostObj;
}

export async function getPostsMetaData(): Promise<PostMeta[] | undefined> {
  const res = await fetch(
    "https://api.github.com/repos/RezaZeraatkar/my-blog-posts/git/trees/main?recursive=1",
    {
      headers: {
        Accept: "application/vnd.github+json",
        Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
        "X-GitHub-Api-Version": "2022-11-28",
      },
    }
  );

  if (!res.ok) {
    console.error(res);
    return undefined;
  }

  const repoFileTree: FileTree = await res.json();

  const filesArray = repoFileTree.tree
    .map((obj) => obj.path)
    .filter((path) => path.endsWith(".mdx"));

  const posts: PostMeta[] = [];

  for (const file of filesArray) {
    const post = await getPostByName(file);
    if (post) {
      const { meta } = post;
      posts.push(meta);
    }
  }

  return posts.sort((a, b) => (a.date < b.date ? 1 : 0));
}
