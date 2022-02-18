import React from "react";
import styled from "styled-components";
import PostItem from "./PostItem";
import { PostListItemType } from "types/PostItem.types";

interface PostListProps {
  posts: PostListItemType[];
}

const PostList: React.FC<PostListProps> = ({ posts }) => {
  return (
    <PostListWrapper>
      {posts.map(({ node: { id, frontmatter } }: PostListItemType) => (
        <PostItem {...frontmatter} link="https://www.naver.com" key={id} />
      ))}
    </PostListWrapper>
  );
};

const PostListWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 20px;
  width: 768px;
  margin: 0 auto;
  padding: 50px 0 100px;
`;

export default PostList;
