export interface PostFrontmatterType {
  title: string;
  date: string;
  categories: string[];
  summary: string;
  thumbnail: string;
}

export interface PostListItemType {
  node: {
    id: string;
    frontmatter: PostFrontmatterType;
  };
}
