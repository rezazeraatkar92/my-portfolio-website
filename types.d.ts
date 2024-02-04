type ThemeMode = "system" | "dark" | "light";

type PostMeta = {
  id: string;
  title: string;
  date: string;
  tags: string[];
};

type BlogPost = {
  meta: PostMeta;
  content: ReactElement<any, string | JSXElementConstructor<any>>;
};
