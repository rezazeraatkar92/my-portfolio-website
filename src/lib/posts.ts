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
  if (!res.ok) return undefined;

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

  if (!res.ok) return undefined;

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

// import { cache } from "react";
// import fs from "fs";
// import path from "path";
// import matter from "gray-matter";
// import { remark } from "remark";
// import html from "remark-html";

// const postsDirectory = path.join(process.cwd(), "blogposts");

// function getSortedPostsData() {
//   // Get file names under /posts
//   const fileNames = fs.readdirSync(postsDirectory);
//   const allPostsData = fileNames.map((fileName) => {
//     // Remove ".md" from file name to get id
//     const id = fileName.replace(/\.md$/, "");

//     // Read markdown file as string
//     const fullPath = path.join(postsDirectory, fileName);
//     const fileContents = fs.readFileSync(fullPath, "utf8");

//     // Use gray-matter to parse the post metadata section
//     const matterResult = matter(fileContents);

//     const blogPost: BlogPost = {
//       id,
//       title: matterResult.data.title,
//       date: matterResult.data.date,
//     };

//     // Combine the data with the id
//     return blogPost;
//   });
//   // Sort posts by date
//   return allPostsData.sort((a, b) => (a.date < b.date ? 1 : -1));
// }

// async function getPostData(id: string) {
//   try {
//     const fullPath = path.join(postsDirectory, `${id}.md`);
//     const fileContents = fs.readFileSync(fullPath, "utf8");

//     // Use gray-matter to parse the post metadata section
//     const matterResult = matter(fileContents);

//     const processedContent = await remark()
//       .use(html)
//       .process(matterResult.content);

//     const contentHtml = processedContent.toString();

//     const blogPostWithHTML: BlogPost & { contentHtml: string } = {
//       id,
//       title: matterResult.data.title,
//       date: matterResult.data.date,
//       contentHtml,
//     };

//     // Combine the data with the id
//     return {
//       ok: true,
//       message: "Post fetched successfully",
//       code: 200,
//       data: blogPostWithHTML,
//     };
//   } catch (error) {
//     return {
//       ok: false,
//       message: "Post not found",
//       code: 404,
//     };
//   }
// }

// export const getPosts = cache(async () => {
//   return await getSortedPostsData();
// });
// export const getPost = cache(async (id: string) => {
//   return await getPostData(id);
// });
